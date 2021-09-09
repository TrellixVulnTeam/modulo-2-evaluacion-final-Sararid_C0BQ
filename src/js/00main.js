'use strict';


//DECLARAR VARIABLES // 

const userInput = document.querySelector('.js_inputUser');

const searchBtn = document.querySelector('.js_btn');

const seriesListHtml = document.querySelector('.js_movielist');

const placeholderImage = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';

let listSeries = [];



//CREAR FUNCTIONS FETCH 

function handleSearch() {
  fetch(`https://api.tvmaze.com/search/shows?q=:${userInput.value}`)
    .then(response => response.json())

    .then(data => {
      //seriesList.innerHTML = "";
      listSeries = data;
      console.log(data);
      renderList();

    });
  //  .catch(error => console.log(`Ha sucedido un error: ${error}`));
}


searchBtn.addEventListener('click', handleSearch);

