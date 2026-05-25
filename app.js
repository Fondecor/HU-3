
const inputNota = document.getElementById("inputNota");
const btnAgregar = document.querySelector("#btnAgregar");
const listaNotas = document.getElementById("listaNotas");


console.log("Input seleccionado:", inputNota);
console.log("Botón seleccionado:", btnAgregar);
console.log("Lista seleccionada:", listaNotas);

let notas = [];

function renderizarNotas() {
    listaNotas.innerHTML = ""; 
    
    notas.forEach((textoNota, index) => {
      
        const li = document.createElement("li");
        li.textContent = textoNota;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        

        btnEliminar.onclick = function () {
           
            notas.splice(index, 1);
            localStorage.setItem("notas", JSON.stringify(notas));
            
            console.log("Se eliminó una nota");
            renderizarNotas(); 
        };

        li.appendChild(btnEliminar);
        listaNotas.appendChild(li);
    });
}


btnAgregar.addEventListener("click", () => {
    const texto = inputNota.value.trim();


    if (texto === "") {
        alert("Por favor, escribe algo antes de agregar.");
        return;
    }


    notas.push(texto);


    localStorage.setItem("notas", JSON.stringify(notas));
    console.log("Nota agregada y guardada en Local Storage");

    renderizarNotas();


    inputNota.value = "";
    inputNota.focus();
});


document.addEventListener("DOMContentLoaded", () => {
    const notasGuardadas = localStorage.getItem("notas");
    
    if (notasGuardadas) {
        notas = JSON.parse(notasGuardadas);
        console.log(`Cargadas ${notas.length} notas desde Local Storage`);
        renderizarNotas();
    } else {
        console.log("No hay notas guardadas previamente");
    }
});
