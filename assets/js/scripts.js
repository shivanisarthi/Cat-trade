//Código do botão ao clicar e sair
function clicke(){
    let clicked = $("#change-cat");
    clicked.css({"box-shadow" : "black 2px 2px"})
}

function clicked(){
   let clicked = $("#change-cat");
   clicked.css({"box-shadow" : "black 5px 5px"})
}

//API da imagem de gato 
const BASE_URL = 'https://thatcopy.pw/catapi/rest/'

//Função que captura as imagens de gato da const BASE_URL
const getCats = async () =>{
        const data = await fetch(BASE_URL); //Consumindo a API
        const json =  await data.json()

        return json.webpurl;
}

//Parte do botão
const gatImage = document.querySelector("#cat"); //Imagem no HTML
const loading = async () =>{
     gatImage.src = await getCats()
}

const btnCat = document.querySelector("#change-cat"); //Botão no HTML

btnCat.addEventListener("click",loading);

loading()