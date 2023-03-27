let registro = document.querySelector("form");

//let registro = document.getElementById("registro");
registro.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector("#sub").value = "REGISTRANDO..";
    let data = new FormData(registro);
    //console.log(data);

    //URL DE API DE GOOGLE
    fetch('https://script.google.com/macros/s/AKfycbye_tEILwdpXgfZVybqTjg1Lxz8OkkumH7UgE6TBTmLK-RKfrmVVVnCGq82xT4Sw8EJww/exec', {
        method: "POST",
        body: data
    })
        .then(res => res.text())
        .then(data => {
            document.querySelector("#msg").innerHTML = data;
            document.querySelector("#sub").value = "REGISTRAR MOVIMIENTO"
        });
})