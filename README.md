# Amigo Secreto

Este proyecto es una aplicación web sencilla que permite a los usuarios ingresar nombres de amigos en una lista y, mediante un sorteo aleatorio, determinar quién será el "amigo secreto". La aplicación se desarrolló utilizando JavaScript y se integra con un archivo HTML que contiene los elementos necesarios.

## Funcionalidades

- **Agregar Nombres:** El usuario puede escribir el nombre de un amigo en un campo de texto y agregarlo a la lista haciendo clic en el botón "Adicionar".
- **Validar Entrada:** Si el campo de entrada está vacío, el sistema muestra una alerta solicitando un nombre válido.
- **Visualizar la Lista:** Cada nombre ingresado se muestra dinámicamente en una lista en la página.
- **Sorteo Aleatorio:** Al presionar el botón "Sortear Amigo", se selecciona de manera aleatoria uno de los nombres utilizando `Math.random()` y `Math.floor()`, mostrando el resultado en pantalla.

## Instrucciones de Uso

1. **Clonar o Descargar el Proyecto:**  
   Descarga los archivos del proyecto o clónalo en tu máquina.

2. **Verificar la Estructura del HTML:**  
   Asegúrate de que tu archivo HTML incluya los siguientes elementos con sus respectivos identificadores:
   - Un campo de entrada con `id="nombre"`.
   - Un botón que invoque la función `agregarAmigo()` para adicionar un nombre.
   - Una lista `<ul>` con `id="lista"` para mostrar los nombres ingresados.
   - Un botón que invoque la función `sortearAmigo()` para realizar el sorteo.
   - Un contenedor (por ejemplo, un `<div>`) con `id="resultado"` para mostrar el nombre sorteado.

3. **Ejecutar la Aplicación:**  
   Abre el archivo HTML en un navegador para interactuar con la aplicación.

## Código JavaScript

El siguiente bloque de código implementa las funcionalidades requeridas, integrando los pasos PRIMERO a CUARTO y utilizando los comandos especificados:

