
var cuerpo = document.getElementById("cuerpo");

var imagenes=new Array(
    ['/images/fondos/fondo.jpg'],
    ['/images/fondos/fondo1.jpg'],
    ['/images/fondos/fondo2.jpg'],
    ['/images/fondos/fondo3.jpg'],
    ['/images/fondos/fondo4.jpg']
);
var uImage=imagenes[1];


var contador=0;
/**
     * Array con las ubicaciones de las imagenes
     */



/**
 * Funcion para cambiar la imagen
 */
function rotarImagenes()
{
    // cambiamos la imagen
    contador++
    uImage=imagenes[contador%imagenes.length][0];
    cuerpo.style.backgroundImage = 'url('+uImage+')';
}



/**
 * Función que se ejecuta una vez cargada la página
 */
onload=function()
{
    // Cargamos una imagen aleatoria
    rotarImagenes();

    // Indicamos que cada 3 minutos cambie la imagen
    setInterval(rotarImagenes,5000);
}

 

// cuerpo.style.backgroundImage = 'url('+uImage+')';
