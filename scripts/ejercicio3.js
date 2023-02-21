const formularioServicios = document.querySelector("#formulario-servicios");
const modalBody = document.querySelector(".modal-body");
const inputs = document.querySelectorAll(".form-control");
const modalFire = document.querySelector(".modal-fire");

formularioServicios.addEventListener("submit", presentarRespuestas);

function presentarRespuestas(e) {
  e.preventDefault();

  let serviciosPorEdad = "";
  const entradas = [];

  inputs.forEach(input => {
    entradas.push(input.value);
  });

  if (entradas[2] > 18) {
    serviciosPorEdad =
      "Usted es mayor de edad, usted tiene acceso a todos nuestros servicios";
  } else {
    serviciosPorEdad =
      "Usted es menor de edad, tiene acceso a servicios limitados";
  }

  modalBody.innerHTML = `
    <h4 class=text-center>Welcome ${entradas[0]}!!! 👋👋👋</h4><br>
    <p><strong>Nombre Completo:</strong> ${entradas[0]}</p>
    <p><strong>Email:</strong> ${entradas[1]} </p>
    <p><strong>Edad:</strong> ${entradas[2]} </p>
    <p><strong>Mensaje de su solicitud:</strong> ${entradas[3]}</p> 
    <p>**<em>${serviciosPorEdad}</em>.</p>
  `;

  // Comprobamos que el usuario haya pasado datos
  if (!entradas[entradas.length - 1]) return;

  modalFire.setAttribute("data-bs-toggle", "modal");
  modalFire.setAttribute("data-bs-target", "#modal-servicios");
  modalFire.click();
}
