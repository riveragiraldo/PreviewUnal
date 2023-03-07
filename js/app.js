

const contactForm = document.getElementById('contactForm');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');
contactForm.addEventListener('submit', async(e)=>{

    e.preventDefault();

    //Escribir filas

    try{
const respuesta = await fetch('https://sheet.best/api/sheets/4b0e3de5-b959-4292-9f99-962537bd36cf',{
        method:'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            "Nombre": contactForm.nombre.value,
            "Email": contactForm.email.value,
            "Telefono": contactForm.telefono.value,
            "Asunto": contactForm.asunto.value,
            "Mensaje": contactForm.mensaje.value,
            "AceptaPol": contactForm.tratamiento.value
        })
    });
    const contenido = await respuesta.json();
    console.log(contenido);

    } catch(error){
console.log(error);
    }

//Leer filas

//     try{
// const respuesta = await fetch('https://sheet.best/api/sheets/4b0e3de5-b959-4292-9f99-962537bd36cf');
//     const contenido = await respuesta.json();
//     console.log(contenido);

//     } catch(error){
// console.log(error);
//     }


        //Eliminar filas

//     try{
// const respuesta = await fetch('https://sheet.best/api/sheets/4b0e3de5-b959-4292-9f99-962537bd36cf/0',{
//         method:'DELETE'});// EL / FILA 0 DESDE EL PRIMER REGISTRO
//     const contenido = await respuesta.json();
//     console.log(contenido);

//     } catch(error){
// console.log(error);
//     }


        //Actualizar filas

//     try{
// const respuesta = await fetch('https://sheet.best/api/sheets/4b0e3de5-b959-4292-9f99-962537bd36cf/3',{
//         method:'PATCH',
//         mode: 'cors',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body:JSON.stringify({
           
//             "Telefono": " 1000 000 000",
            
//         })
//     });  // EL / FILA 0 DESDE EL PRIMER REGISTRO SOLO MODIFICAR TELÉFONO
//     const contenido = await respuesta.json();
//     console.log(contenido);

//     } catch(error){
// console.log(error);
//     }

    // Mensaje de Validación

    registro.classList.remove('activo');
    exito.classList.add('activo');
});