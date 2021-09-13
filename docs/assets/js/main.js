"use strict";const userInput=document.querySelector(".js_inputUser"),searchBtn=document.querySelector(".js_btn"),seriesListHtml=document.querySelector(".js_movielist"),favoriteListHtml=document.querySelector(".js_favoriteList"),placeholderImage="https://via.placeholder.com/210x295/ffffff/666666/?text=TV",errorMessage=document.querySelector(".js_errorMessage");let listSeries=[],favoriteSeries=[];function handleApiFetch(e){e.preventDefault(),fetch("https://api.tvmaze.com/search/shows?q=:"+userInput.value).then(e=>e.json()).then(e=>{listSeries=e.map(e=>({id:e.show.id,name:e.show.name,image:e.show.image})),renderListShow()}).catch(e=>errorMessage.innerHTML="Ha sucedido un error: "+e)}function renderListShow(){seriesListHtml.innerHTML="";for(let e of listSeries){const t=e.name,i=e.id,r=document.createElement("li"),s=document.createElement("img"),n=document.createElement("p"),a=document.createTextNode(t);if(r.id=i,r.className="styleList js_li",null!==e.image){let t=e.image.medium;s.src=t}else s.src=placeholderImage;s.alt=t,n.appendChild(a),r.append(n,s),seriesListHtml.appendChild(r)}handleClickLi()}function handleFav(e){const t=parseInt(e.currentTarget.id),i=favoriteSeries.findIndex(e=>e.id===t);if(-1===i){const e=listSeries.find(e=>e.id===t);favoriteSeries.push(e)}else favoriteSeries.splice(i,1);renderFavList(),setInLocalStorage()}function renderFavList(){favoriteListHtml.innerHTML="";for(let e of favoriteSeries){const t=e.name,i=e.image,r=e.id;let s="";const n=document.createElement("li"),a=document.createElement("img"),o=document.createElement("p"),l=document.createTextNode(t);n.id=r,n.className="styleListFav js_li";const c=document.createElement("i");c.className="fas fa-times-circle styleRemove",null!==i?(s=i.medium,a.src=s):a.src=placeholderImage,a.alt=t,o.appendChild(l),n.append(o,a,c),favoriteListHtml.appendChild(n)}handleClickLi()}function handleClickLi(){const e=document.querySelectorAll(".js_li");for(let t of e)t.addEventListener("click",handleFav)}function setInLocalStorage(){const e=JSON.stringify(favoriteSeries);localStorage.setItem("show",e)}function getInLocalStorage(){const e=localStorage.getItem("show");favoriteSeries=JSON.parse(e),null===favoriteSeries?favoriteSeries=[]:renderFavList()}searchBtn.addEventListener("click",handleApiFetch),getInLocalStorage();