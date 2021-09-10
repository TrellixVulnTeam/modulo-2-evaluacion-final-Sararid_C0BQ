'use strict';

function handleFav(e) {
  const clickedId = parseInt(e.currentTarget.id);
  console.log(clickedId)
  const showEle = listSeries.find((ele) => {
    return ele.id === clickedId;
  });
  const favFound = favoriteSeries.findIndex((fav) => {
    return fav.id === clickedId;
  });
  if (favFound === -1) {
    favoriteSeries.push(showEle);
  } else {
    favoriteSeries.splice(favFound, 1);
  }
  paintFavList();
}

function paintFavList() {
  favoriteListHtml.innerHTML = '';
  for (let fav of favoriteSeries) {
    const nameShow = fav.name;
    const image = fav.image;
    const imageSrc = fav.image.medium;
    const id = fav.id;
    let styleClass = "styleListFav js_li"
    let getImage = '';

    /// si la imagen no se encuentra en jason ponner un placeholder o clase fav 
    if (image !== null) {
      getImage = imageSrc;

    } else if (image === null) {

      getImage = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
    }

    favoriteListHtml.innerHTML += ` <li class="${styleClass} js_li "  id = "${id}" ><p> ${nameShow} </p> <img src="${getImage} " alt="" ></li>`

  }
}


function handleClickLi() {
  const liListener = document.querySelectorAll('.js_li');
  for (let eleLi of liListener) {
    eleLi.addEventListener('click', handleFav);
  }
}

