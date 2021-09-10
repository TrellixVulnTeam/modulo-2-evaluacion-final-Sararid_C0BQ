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
        return { id: data.show.id, name: data.show.name, image: data.show.image };
      });
      renderListShow();
      //.catch(error => console.log(`Ha sucedido un error: ${error}`));
    });

}


searchBtn.addEventListener('click', handleApiFetch);

