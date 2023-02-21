const form = document.querySelector("form");
const input = document.querySelector("input");
const modalTitle = document.querySelector(".modal-title");
const modalBody = document.querySelector(".modal-body");
const modalFire = document.querySelector(".modal-fire");

form.addEventListener("submit", generarTablaDeMultiplicar);

function generarTablaDeMultiplicar(e) {
  e.preventDefault();

  const target = input.value;
  modalBody.innerHTML = "";

  for (let i = 1; i < 13; i++) {
    const fila = `<p>${target} * ${i} = ${target * i}</p>`;
    modalBody.insertAdjacentHTML("beforeend", fila);
  }

  modalTitle.innerHTML = `<strong>Tabla del ${target}</strong>`;
  modalFire.setAttribute("data-bs-toggle", "modal");
  modalFire.setAttribute("data-bs-target", "#modal-tabla-multiplicar");
  modalFire.click();
}
