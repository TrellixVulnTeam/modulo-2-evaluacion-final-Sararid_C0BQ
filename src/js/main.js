'use strict';


//DECLARAR VARIABLES // 

const userInput = document.querySelector('.js_inputUser');
const searchBtn = document.querySelector('.js_btn');

const movieList = document.querySelector('.js_movielist');

const placeholderImage = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';

let listSeries = [];


//CREAR FUNCTIONS FETCH 

function handleSearch() {
  fetch(`https://api.tvmaze.com/search/shows?q=:${userInput.value}`)
    .then(response => response.json())

    .then(data => {
      listSeries = data;
      console.log(data)
      //paintList() utilizar mejor render ; PINTAR LA LIST QUE NOS DEVULEVE FETCH DESPUES DE UNA BUSQUEDA 

    });
  //  .catch(error => console.log(`Ha sucedido un error: ${error}`));
}

searchBtn.addEventListener('click', handleSearch);

