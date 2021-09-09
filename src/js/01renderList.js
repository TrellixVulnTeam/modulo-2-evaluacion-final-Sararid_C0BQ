'use strict';
//funcion para pintar las series en el html 
function renderList() {
  seriesListHtml.innerHTML = "";
  for (let i in listSeries) {

    const serieName = listSeries[i].show.name;
    const serieId = listSeries[i].show.id;
    let newItemList = document.createElement('li');
    let img = document.createElement('img');
    let textName = document.createElement('p');
    let textField = document.createTextNode(serieName);
    newItemList.id = serieId; //añado el id de la serie al li
    newItemList.className = 'styleList js_li'; //añado el estilo 

    if (listSeries[i].show.image !== null) {
      let getImage = listSeries[i].show.image.medium;
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
