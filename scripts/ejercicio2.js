const formularioConsulta = document.querySelector("#formulario-consulta");
const modalRespuestaBody = document.querySelector(".modal-body");
const inputs = document.querySelectorAll(".form-control");
const modalFire = document.querySelector(".modal-fire");

formularioConsulta.addEventListener("submit", presentarRespuestas);

function presentarRespuestas(e) {
  e.preventDefault();

  const entradas = [];

  inputs.forEach(input => {
    entradas.push(input.value);
  });

  modalRespuestaBody.innerHTML = `
    <strong>Nombre Completo:</strong> ${entradas[0]} <br>
    <strong>Email:</strong> ${entradas[1]} <br>
    <strong>Asunto:</strong> ${entradas[2]} <br>
    <strong>Mensaje:</strong> ${entradas[3]} <br> <br>

    <h4 class=text-center>Welcome ${entradas[0]}!!! 👋👋👋</h4>
  `;

  // Comprobamos que el usuario haya pasado datos
  if (!entradas[entradas.length - 1]) return;

  modalFire.setAttribute("data-bs-toggle", "modal");
  modalFire.setAttribute("data-bs-target", "#modal-consulta");
  modalFire.click();
}
