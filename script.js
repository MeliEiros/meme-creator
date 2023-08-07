const buttonText = document.getElementById("img-button");
 const buttonImg = document.getElementById("text-button");

 const aside = document.getElementById("aside-img");
 const asideText =document.getElementById("aside-text");

 const textHide = () => {
    aside.classList.add("panel-hidden");
    asideText.classList.remove("panel-hidden2");
 }
 const imgHide = () => { 
    asideText.classList.add("panel-hidden2");
    aside.classList.remove("panel-hidden");
    
 }
buttonText.addEventListener("click" , () => textHide());
buttonImg.addEventListener("click" , () => imgHide());

const buttonMood = document.getElementById("mood-button");
const main = document.getElementById("main-container");
const header = document.getElementById("header-container");
const body = document.getElementById("body-light");
const filtroBrillo = document.getElementById("filtro-brillo");
const filtroOpac = document.getElementById("filtro-opac"); 
const filtroContraste = document.getElementById("filtro-contraste");
const filtroDesenfoque = document.getElementById("filtro-desenfoque");
const filtroGrises = document.getElementById("filtro-grises");
const filtroSepia = document.getElementById("filtro-sepia");
const filtroHue = document.getElementById("filtro-hue");
const filtroSaturado = document.getElementById("filtro-saturado");
const filtroNegativo = document.getElementById("filtro-negativo");
const text = document.getElementById("no-toptext");
const textBottom = document.getElementById("no-bottomtext");
const tittleColor = document.getElementById("tittle-color");
const colorBack = document.getElementById("color-background");

const cambiarModo = () => {
   aside.classList.toggle("light-aside");
   asideText.classList.toggle("light-aside");
}



const urlImg = document.getElementById ("url-img-input")
const memeImg = document.getElementById("container-meme")
urlImg.addEventListener('input', (e)=> changeBackground(e))

const changeBackground = (e) => { 
    console.log(e.target.value)
    memeImg.style.backgroundImage = `url(' ${e.target.value}')`
} 

//const button = document.getElementById("mood-button")
//const mainContainer = document.getElementById('main-container')
//const headerContainer = document.getElementById('header-container')
