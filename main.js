//Cargar la dirrecion imagenes a un arreglo
var imagenes = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg',
'img/img5.jpg', 'img/img6.jpg', 'img/img7.jpg', 'img/img8.jpg', 'img/img9.jpg',
'img/img10.jpg', 'img/img11.jpg', 'img/img12.jpg', 'img/img13.jpg', 'img/img14.jpg', 'img/img15.jpg' ];

//Posicion en el arreglo
var posicion = 0,
    posicionIzq = 14;
    posicionDer = 1;




//Funcion que 'movera' el carrusel al hacer click en los botones
function carrusel(contenedor){
    contenedor.addEventListener('click', e =>{
        //botones
        let leftArrow = contenedor.querySelector('#arrow-left'),
            rightArrow = contenedor.querySelector('#arrow-right');

        //Llamar las imagenes dentro del container
        let imgIzq = contenedor.querySelector('#imagenIzquierda'),
            imgCentro = contenedor.querySelector('#imagenCentro'),
            imgDer = contenedor.querySelector('#imagenDerecha'),
            tgt = e.target; //Identificador de que elemento esta siendo targeted

        //Target cuando se hace click en el boton izq
        if(tgt == leftArrow || tgt == imgIzq){
            validarPosLeft();
            imgIzq.src = imagenes[posicionIzq];
            imgCentro.src = imagenes[posicion];
            imgDer.src = imagenes[posicionDer];
            cambioBigPic();
        }

        //Target cuando se hace click en el boton der
        if(tgt == rightArrow || tgt == imgDer){
            validarPosRight();
            imgIzq.src = imagenes[posicionIzq];
            imgCentro.src = imagenes[posicion];
            imgDer.src = imagenes[posicionDer];
            cambioBigPic();
        }

        

    });
}

//Al haber un cambio en la posicion de la imagen central del carrusel, la imagen grande cambiara
function cambioBigPic(){
    let contenedorBigPic = document.querySelectorAll('#centerPic'),
        imagenGrande = document.querySelector('.big');
        imagenGrande.src = imagenes[posicion];
}


//Mandar a llamar los elementos dentro de el div con id="carrusel"
document.addEventListener("DOMContentLoaded", () =>{
    let contenedor = document.querySelector('#carrusel');
    carrusel(contenedor);
     
});

//==============Validaciones para botones===================

function validarPosLeft(){
    posicionDer = posicion;
    posicion = posicionIzq;
    if(posicionIzq == 0){
        posicionIzq = 14;
    }else{
        posicionIzq = posicionIzq-1;
    }   
}

function validarPosRight(){
    posicionIzq = posicion;
    posicion = posicionDer;
    if(posicionDer == 14){
        posicionDer = 0;
    }else{
        posicionDer = posicionDer+1;
    }   
}

//=============Fin Validaciones================