'use strict';

//DECLARAR VARIABLES // 

const userInput = document.querySelector('.js_inputUser');
const inputUser = userInput.value;
const searchBtn = document.querySelector('.js_btn');
const movieList = document.querySelector('.js_movielist');
const placeholderImage = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';

let listShows = [];
//fetch 

function handleSearch() {
  fetch(`https://api.tvmaze.com/search/shows?q=:${inputUser}`)
    .then(response => response.json())

    .then(data => {
      listShows = data;

      console.log(data)
      //  paintList();

    });

  // .catch (error => console.log(`Ha sucedido un error: ${error}`));
}

searchBtn.addEventListener('click', handleSearch);
