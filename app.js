// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();

    // Validar si el campo está vacío
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    // Agregar el nombre al array y actualizar la lista
    amigos.push(nombre);
    actualizarLista();
    
    // Limpiar el campo de entrada
    inputAmigo.value = "";
}

// Función para actualizar la lista de amigos en la página
function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    
    // Limpiar la lista antes de actualizarla
    listaAmigos.innerHTML = "";

    // Recorrer el array y agregar cada nombre como un <li> en la lista
    amigos.forEach(amigo => {
        let elemento = document.createElement("li");
        elemento.textContent = amigo;
        listaAmigos.appendChild(elemento);
    });
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    // Validar si hay amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado y mostrarlo en la página
    let amigoSorteado = amigos[indiceAleatorio];
    resultado.innerHTML = `<p>El amigo secreto es: <strong>${amigoSorteado}</strong></p>`;
}
