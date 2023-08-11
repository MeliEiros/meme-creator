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
const filtroBrillo = document.getElementById("brightness-slider");
const filtroOpac = document.getElementById("slider-opacity"); 
const filtroContraste = document.getElementById("slider-contrast");
const filtroDesenfoque = document.getElementById("slider-blur");
const filtroGrises = document.getElementById("slider-grayscale");
const filtroSepia = document.getElementById("slider-sepia");
const filtroHue = document.getElementById("slider-hue");
const filtroSaturado = document.getElementById("slider-saturate");
const filtroNegativo = document.getElementById("slider-invert");
const text = document.getElementById("no-toptext");
const textBottom = document.getElementById("no-bottomtext");
const tittleColor = document.getElementById("tittle-color");
const colorBack = document.getElementById("color-background");

const cambiarMood = () => {
   aside.classList.toggle("light-aside");
   asideText.classList.toggle("light-aside");
   main.classList.toggle("main-light");
   header.classList.toggle("header-light");
   body.classList.toggle("body-light");
   buttonImg.classList.toggle("buttons");
   textBottom.classList.toggle("buttons");
   buttonMood.classList.toggle("buttons");
}

if (main.classList.contains("main-light")) {
   buttonMood.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Modo oscuro';
} else { 
   buttonMood.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Modo oscuro';
   ;
}

buttonMood.addEventListener("click" , () => cambiarMood());


const urlImg = document.getElementById ("url-img-input")
const memeImg = document.getElementById("container-meme")
urlImg.addEventListener('input', (e)=> changeBackground(e))

const changeBackground = (e) => { 
    console.log(e.target.value)
    memeImg.style.backgroundImage = `url(' ${e.target.value}')`
} 

//Descarga// 
const descargarMeme = document.getElementById("download");
const containerMeme= document.getElementById("meme-container");
descargarMeme.addEventListener("click" , () => descargar()); 

const descargar = () => { 
   domtoimage.toBlob(meme).then(function (blob) {
      window.saveAs(blob, "meme.png");
      });
  };

  //Fondo
  //const fondoMeme = document.getElementById("backgroundcolor-text");
  //const colorMeme = document.getElementById("color-name");

  //const memeColor = () => { 
   //let color = colorImg.value;
   //colorMeme.innerHTML = `${colorElegido}`;
//};
   
//fondoMeme.addEventListener("input" , () => { 
  // memeImg.style.backgroundColor = `${colorImg.value}`;
    
//})

//colorImg.addEventListener("input" , () => memeColor ());

const brilloInput = document.getElementById("brightness-slider");
const opacidadInput = document.getElementById("slider-opacity");
const contrasteInput =document.getElementById("slider-contrast");
const desenfoqueInput =document.getElementById("slider-blur");
const grisesInput =document.getElementById("slider-grayscale");
const sepiaInput =document.getElementById("slider-sepia");
const hueInput =document.getElementById("slider-hue");
const saturadoInput =document.getElementById("slider-saturate");
const negativoInput =document.getElementById("slider-invert");

const filtros = () => {
   memeImg.style.filter = `brightness(${brilloInput.value}) opacity(${opacidadInput.value}) contrast(${contrasteInput.value}%) blur(${desenfoqueInput.value}px) grayscale(${grisesInput.value}%) sepia(${sepiaInput.value}%) hue-rotate(${hueInput.value}deg) saturate(${saturadoInput.value}%) invert(${negativoInput.value})`;
};

brilloInput.addEventListener("input", () => filtros());
opacidadInput.addEventListener("input", () => filtros());
contrasteInput.addEventListener("input", () => filtros());
desenfoqueInput.addEventListener("input", () => filtros());
grisesInput.addEventListener("input", () => filtros());
sepiaInput.addEventListener("input", () => filtros());
hueInput.addEventListener("input", () => filtros());
saturadoInput.addEventListener("input", () => filtros());
negativoInput.addEventListener("input", () => filtros());


   
//const topText =document.getElementById("top-text-container");
//const  bottomText =document.getElementById("bottom-text-container");
//const textoArriba =document.getElementById("texto-arriba");
//const textoAbajo =document.getElementById("texto-bajo");
//textoArriba.addEventListener("input" , () => { 
   //topText.innerHTML = `<p>${textoArriba.value}</p>`;
//})
 //textoAbajo.addEventListener("input" , () => { 
  // bottomText.innerHTML = `<p>${textoAbajo.value}</p>`;
//})