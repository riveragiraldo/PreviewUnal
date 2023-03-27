//////////////////////////////CONSULTA/////////////////////7
let form = document.querySelector('.consultaProducto');

//console.log(form);



document.getElementById("consultarProducto").addEventListener("click", consultarDatos);

function consultarDatos() {


    document.querySelector("#consultarProducto").value = "Consultando..";
    let prod = new FormData(form);
    codigoConsulta = prod.get('cod');
    console.log(codigoConsulta);
    fetch('https://script.google.com/macros/s/AKfycbzIJjYWaz1Zx4SUs1gttxEsyr0RcXPZKe_8BLvYQz3LDDbISnJoONYjqXmowGk8K_2nyg/exec', {
        method: "POST",
        body: prod
    })

        .then(res => res.text())
        .then(prod => {
            document.getElementById('codigo').value = codigoConsulta;
            document.querySelector("#nombreProducto").value = prod;
            document.querySelector("#nombreProducto").classList.remove('input_disabled');
            document.querySelector("#consultarProducto").value = "Consultar"
        });
}

////////////////////////////REGISTRO////////////////////////////////////

let formulario = document.querySelector('.contactForm');

//console.log(formulario);



document.getElementById("sub").addEventListener("click", registrarDatos);


function registrarDatos() {



    document.querySelector("#sub").value = "REGISTRANDO..";
    let data = new FormData(formulario);

    console.log(data.get('nombreProducto'));


    //URL DE API DE GOOGLE
    fetch('https://script.google.com/macros/s/AKfycbwHL1OWKO0gsvvrI3yNLFUADBPjuBXWrhrdHm3hnrkts5WDtYOMyqVqrs7niokqzXaB8A/exec', {
        method: "POST",
        body: data
    })
        .then(res => res.text())
        .then(data => {
            document.querySelector("#msg").innerHTML = data;
            document.querySelector("#sub").value = "REGISTRAR MOVIMIENTO"
            document.querySelector("#exito").classList.add('activo');
            document.querySelector("#registro").classList.remove('activo');
        });
}




