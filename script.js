const buttonText = document.getElementById("img-button");
 const buttonImg = document.getElementById("text-button");

 const aside = document.getElementById("aside-img");
 const asideText =document.getElementById("aside-text");

 const textHide = () => {
    aside.classList.add("hidden");
    asideText.classList.remove("hidden");
 }
 const imgHide = () => { 
    asideText.classList.add("hidden");
    aside.classList.remove("hidden");
    
 }
buttonText.addEventListener("click" , () => imgHide());
buttonImg.addEventListener("click" , () => textHide());

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
   domtoimage.toBlob(containerMeme).then((blob) => {
   saveAs(blob, "meme.png");
      });
  };

  //Fondo
  const fondoMeme = document.getElementById("meme-container");
  const colorMeme = document.getElementById("color-name");

  const memeColor = () => { 
   let color = fondoMeme.value;
   colorMeme.innerHTML = `${colorElegido}`;
};
   
fondoMeme.addEventListener("input" , () => { 
   memeImg.style.backgroundColor = `${fondoMeme.value}`;
    
})

fondoMeme.addEventListener("input" , () => memeColor ());



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


const resetfiltros = document.getElementById("button-filters");

resetfiltros.addEventListener("click" , () => resetear());
const resetear = () => { 
   memeImg.style.filter = `brightness(${brilloInput.value = 1}) opacity(${opacidadInput.value = 1}) contrast(${contrasteInput.value = 100}%) blur(${desenfoqueInput.value = 0}px) grayscale(${grisesInput.value = 0}%) sepia(${sepiaInput.value = 0}%) hue-rotate(${hueInput.value = 0}deg) saturate(${saturadoInput.value = 100}%) invert(${negativoInput.value = 0})`;
   }


   
const topText =document.getElementById("top-text-container");
const  bottomText =document.getElementById("bottom-text-container");
const textoArriba =document.getElementById("texto-arriba");
const textoAbajo =document.getElementById("texto-bajo");
const topTextInput =document.getElementById("top-text-input");
const bottonTextInput =document.getElementById("text-bottom-input");
topTextInput.addEventListener("input" , () => { 
   textoArriba.innerHTML = topTextInput.value;
});

 bottonTextInput.addEventListener("input" , () => { 
  textoAbajo.innerHTML = bottonTextInput.value;
});