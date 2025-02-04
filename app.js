// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declarar una variable de tipo array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
  // Capturar el valor del campo de entrada
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // Validar que el campo no esté vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Actualizar el array de amigos añadiendo el nombre usando .push()
  amigos.push(nombre);

  // Limpiar el campo de entrada
  input.value = "";

  // Actualizar la lista visual en la página
  mostrarLista();
}

// Función para mostrar la lista de amigos en un elemento HTML
function mostrarLista() {
  // Obtener el elemento de la lista
  const lista = document.getElementById("listaAmigos");
  
  // Limpiar la lista existente para evitar duplicados
  lista.innerHTML = "";

  // Iterar sobre el arreglo 'amigos' y crear un elemento <li> para cada nombre
  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

// Función para sortear aleatoriamente un amigo
function sortearAmigo() {
  // Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert("No hay amigos disponibles para sortear.");
    return;
  }

  // Generar un índice aleatorio utilizando Math.random() y Math.floor()
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  
  // Obtener el nombre sorteado
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado en un elemento HTML 
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;
}
