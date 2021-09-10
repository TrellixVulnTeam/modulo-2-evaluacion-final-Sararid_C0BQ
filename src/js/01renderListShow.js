'use strict';
//funcion para pintar las series en el html 
function renderListShow() {
  seriesListHtml.innerHTML = "";

  for (let list of listSeries) {

    const movieName = list.name;
    const movieId = list.id;

    let newItemList = document.createElement('li');
    let img = document.createElement('img');
    let textName = document.createElement('p');

    let textField = document.createTextNode(movieName);

    newItemList.id = movieId;
    newItemList.className = 'styleList js_li';

    if (list.image !== null) {
      let getImage = list.image.medium;
      img.src = getImage;
    } else {
      img.src = placeholderImage;
    }


    img.alt = 'tv_show';
    textName.appendChild(textField);
    newItemList.append(textName, img);
    seriesListHtml.appendChild(newItemList);

  }

}
