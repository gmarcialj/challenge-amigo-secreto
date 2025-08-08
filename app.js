// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  let inputAmigo = document.getElementById("amigo");
  const nombreAmigo = inputAmigo.value.trim();
  
  // Validar que el nombre no esté vacío
  if (!nombreAmigo) {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  // Validar que el nombre no esté repetido
  if (amigos.includes(nombreAmigo)) {
    alert("Este nombre ya ha sido agregado. Por favor, ingresa un nombre diferente.");
  } else { 
    // Si el valor es válido, actualizamos la lista de amigos
    amigos.push(nombreAmigo);

  }

  // Limpiamos el campo de entrada
  inputAmigo.value = "";

  // Actualizamos la lista en el DOM
  actualizarLista();
}

/*
 * Función que recorre el array "amigos"y agregar cada nombre 
 * como un elemento <li> dentro de una lista HTML. 
 */
function actualizarLista() {
  // Obtener el elemento lista y limpiarlo
  let lista = limpiarElemento("listaAmigos");

  // Iterar sobre el array para agregar el elemento <li> por cada amigo
  amigos.forEach(function(amigo) {
    lista.innerHTML += `<li>${amigo}</li>`;
  });

}

// Función que limpia el elemento del DOM y lo devuelve para su reutilización
function limpiarElemento(elementoSeleccionado) {
  let elemento = document.getElementById(elementoSeleccionado);
  elemento.innerHTML = "";

  return elemento;
}

/*
  * Función que selecciona de manera aleatoria uno de los nombres 
  * almacenados en el array "amigos".
  */
 function sortearAmigo() {
  // Validar que haya al menos 2 amigos para hacer el sorteo
  if (amigos.length <2) {
    alert("Debes agregar al menos dos amigos para realizar el sorteo.");
    return;
  }

  // Generar un índice aleatorio basado en la longitud del array
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre del amigo seleccionado
  const amigoSeleccionado = amigos[indiceAleatorio];

  // Limpiar la lista y resultado
  let lista = limpiarElemento("listaAmigos");
  let resultado = limpiarElemento("resultado");

  // Mostrar el nombre del amigo seleccionado
  resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSeleccionado}.`;

  // Bloqueamos los botones añadir y sorteo para evitar múltiples sorteos
  document.getElementById("botonAgregar").disabled = true;
  document.getElementById("botonSortear").disabled = true;
 }
