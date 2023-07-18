//const aside = document.getElementById ('panel');//
//const textAside = document.getElementById ('panel'); 
//const hideText = () => {
//hideText.classlist.add("hidden");
}//
const urlImg = document.getElementById('url-img-input')
const memeImg = document.getElementById('container-meme')
UrlImgInput.addEventListener('input', (e)=> changeBackground(e))

const changeBackground =(e) => { 
    console.log(e.target.value)
    memeImg.style.backgroundImage = 'url(${e.target.value})' 
}