'use strict';

function handleFav(e) {
  const clickedId = parseInt(e.currentTarget.id);
  //console.log(clickedId);

  // Busco la peli seleccionada por el usuario si esta ya en la lista de favorito
  const favFound = favoriteSeries.findIndex((fav) => {
    return fav.id === clickedId;
  });


  ///  estoy comprobando si la peli esta en la lista da fav, aqui la condicion es que no lo esta , y lo añado a la lista de favoritos 
  if (favFound === -1) {
    const showEle = listSeries.find((ele) => {
      return ele.id === clickedId;
    });
    favoriteSeries.push(showEle);
    // console.log(favoriteSeries);

    //si la peli  esta en la lista de favoritos , lo quito 
  } else {
    favoriteSeries.splice(favFound, 1);
    // console.log(favoriteSeries);
  }

  renderFavList(); //esto pinta 
  setInLocalStorage(); //esto guarda 
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


    if (image !== null) {
      getImage = image.medium;
      img.src = getImage;
    } else {
      img.src = placeholderImage;

    }
    img.alt = nameShow;
    textName.appendChild(textField);
    newItemList.append(textName, img);
    favoriteListHtml.appendChild(newItemList);

  }
  //esto es le quiero dar sobre la foto area que aprece en el listado de favoritos 
  handleClickLi();

}


function handleClickLi() {
  const liListener = document.querySelectorAll('.js_li');
  for (let eleLi of liListener) {
    eleLi.addEventListener('click', handleFav);
  }
}

