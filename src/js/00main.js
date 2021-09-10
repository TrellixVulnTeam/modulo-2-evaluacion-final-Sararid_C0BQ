'use strict';

//DECLARAR VARIABLES // 

const userInput = document.querySelector('.js_inputUser');

const searchBtn = document.querySelector('.js_btn');

const seriesListHtml = document.querySelector('.js_movielist');

const favoriteListHtml = document.querySelector('.js_favoriteList');

const placeholderImage = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';

let listSeries = [];

let favoriteSeries = [];


//CREAR FUNCTIONS FETCH 

function handleApiFetch(e) {
  e.preventDefault();

  fetch(`https://api.tvmaze.com/search/shows?q=:${userInput.value}`)
    .then(response => response.json())

    .then(dataShows => {
      listSeries = dataShows.map(data => {

        return {
          id: data.show.id,
          name: data.show.name,
          image: data.show.image
        };
      });

      renderListShow();
      //.catch(error => console.log(`Ha sucedido un error: ${error}`));
    });

}
function renderListShow() {
  seriesListHtml.innerHTML = "";

  for (let eleInList of listSeries) {

    const movieName = eleInList.name;
    const movieId = eleInList.id;

    let newItemList = document.createElement('li');
    let img = document.createElement('img');
    let textName = document.createElement('p');

    let textField = document.createTextNode(movieName);

    newItemList.id = movieId;
    newItemList.className = 'styleList js_li';

    if (eleInList.image !== null) {
      let getImage = eleInList.image.medium;
      img.src = getImage;
    } else {
      img.src = placeholderImage;
    }

    img.alt = movieName;
    textName.appendChild(textField);
    newItemList.append(textName, img);
    seriesListHtml.appendChild(newItemList);

  }
  /* hay que llamar esta funcion de llamada del li dentro del render pq queremos 
  poner el listener sobre los li, sin esta funcion pues no hace nada, no pinta la selccion favorita clikada por la usuaria */

  handleClickLi();
}

function handleFav(e) {
  const clickedId = parseInt(e.currentTarget.id);
  console.log(clickedId)

  // 83 --> Busco en la lista de favoritos (la peli seleccionada por el usuario esta ya en la lista de favorito) -- el elemento con el mismo id que el elemento en la lista principal 
  const favFound = favoriteSeries.findIndex((fav) => {
    return fav.id === clickedId;
  });


  /// 89 estoy comprobando si la peli esta en la lista da fav, aqui la condicion es que no lo esta , y lo añado a la lista de favoritos 
  if (favFound === -1) {
    const showEle = listSeries.find((ele) => {
      return ele.id === clickedId;
    });
    favoriteSeries.push(showEle);
    console.log(favoriteSeries);

    //96 si la peli  esta en la lista de favoritos , lo quito 
  } else {
    favoriteSeries.splice(favFound, 1);
    console.log(favoriteSeries);
  }

  //103 si no pongo la funcion de pintar lista fav(paintFavList()), el codigo funciona pero no pinta en el html , mirar el console.log
  renderFavList(); //esto pinta 

}

function renderFavList() {
  favoriteListHtml.innerHTML = '';
  for (let fav of favoriteSeries) {

    const nameShow = fav.name;

    const image = fav.image;
    const id = fav.id;

    let getImage = '';

    let newItemList = document.createElement('li');
    let img = document.createElement('img');
    let textName = document.createElement('p');
    let textField = document.createTextNode(nameShow);

    newItemList.id = id;
    newItemList.className = "styleListFav js_li";

    /// si la imagen no se encuentra en jason ponner un placeholder o clase fav 
    if (image !== null) {
      getImage = image.medium;
      img.src = getImage;
    } else {
      img.src = placeholderImage;

    }
    img.alt = nameShow;
    textName.appendChild(textField);
    newItemList.append(textName, img);
    favoriteListHtml.appendChild(newItemList)

  }

  //  handleClickLi(); esto es le quiero dar sobre la foto area que aprece en ellistado de favoritos

}



function handleClickLi() {
  const liListener = document.querySelectorAll('.js_li');
  for (let eleLi of liListener) {
    eleLi.addEventListener('click', handleFav);
  }
}


searchBtn.addEventListener('click', handleApiFetch);

