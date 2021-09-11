'use strict';

function setInLocalStorage() {
  // stringify me permite transformar a string el array de la lista de series favoritas
  const stringList = JSON.stringify(favoriteSeries);
  //añadimos  al localStorage  los datos convertidos en string previamente
  localStorage.setItem('show', stringList);
}



function getInLocalStorage() {
  const localStorageShows = localStorage.getItem('show');

  //coge la cadena show y con parse la convierto en array, si no hay nada en el array , o si no hay algo que se llame show , devuelve null

  favoriteSeries = JSON.parse(localStorageShows);
  if (favoriteSeries === null) {
    favoriteSeries = [];
  } else {
    renderFavList();
  }
}

getInLocalStorage();
