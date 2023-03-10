const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');

const QR = new QRCode (contenedorQR);
QR.makeCode(formulario.link.value);



const contenedorQR_2 = document.getElementById('contenedorQR_2');
const formulario_2 = document.getElementById('formulario_2');

const QR_2 = new QRCode (contenedorQR_2);
QR_2.makeCode(formulario_2.link_2.value);






