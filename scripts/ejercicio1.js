const modalJunioTitle = document.querySelector("#modal-junio-title");
const modalJunioBody = document.querySelector("#modal-junio-body");
const modalRandomTitle = document.querySelector("#modal-random-title");
const modalRandomBody = document.querySelector("#mes-random-body");
const mostrarMesRandomBtn = document.querySelector(
  "[data-bs-target='#mes-random']"
);
const mostrarMesRandomInOpenModal = document.querySelector(
  "#random-modal__footer-btn"
);

const meses = Array.of(
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
);

const mesesInfo = {
  Enero: {
    Info: `Proviene del dios romano Janus quien tenía dos caras, 
      una que miraba hacia atrás hacia el año anterior y otra que miraba hacia adelante al nuevo año.`,
  },

  Febrero: {
    Info: `Proviene del festival romano de purificación Februa que 
      se celebraba en este mes.`,
  },

  Marzo: {
    Info: `Se nombra en honor al dios romano de la guerra, Marte.`,
  },

  Abril: {
    Info: `Se cree que proviene de la palabra latina aperire, que 
      significa abrir, ya que abril es el mes en que la primavera está en plena floración.`,
  },

  Mayo: {
    Info: `Se nombra en honor a la diosa romana Maia, quien fue adorada 
      como la diosa de la primavera y el crecimiento.`,
  },

  Junio: {
    Info: `Proviene del nombre de la diosa romana Juno, 
      quien era la diosa del matrimonio y la familia.`,
  },

  Julio: {
    Info: `Originalmente se llamaba Quintilis en el 
      calendario romano, pero se renombró en honor a Julio César, el emperador romano.`,
  },

  Agosto: {
    Info: `Se nombró en honor a Augusto, el primer emperador romano.`,
  },

  Septiembre: {
    Info: `Proviene de la palabra latina septem, que significa
      siete, ya que era originalmente el séptimo mes del calendario romano.`,
  },

  Octubre: {
    Info: `Proviene de la palabra latina octo, que significa ocho, ya 
      que era originalmente el octavo mes del calendario romano.`,
  },

  Noviembre: {
    Info: `Proviene de la palabra latina novem, que significa nueve, 
      ya que era originalmente el noveno mes del calendario romano.`,
  },

  Diciembre: {
    Info: `Proviene de la palabra latina decem, que significa diez, 
      ya que era originalmente el décimo mes del calendario romano.`,
  },
};

const numeroOrdinales = {
  1: "Primer",
  2: "Segundo",
  3: "Tercer",
  4: "Cuarto",
  5: "Quinto",
  6: "Sexto",
  7: "Séptimo",
  8: "Octavo",
  9: "Noveno",
  10: "Décimo",
  11: "Undécimo",
  12: "Duodécimo",
};

const junioIndex = meses.findIndex(mes => mes === "Junio");
mostrarMesRandomBtn.addEventListener("click", getMesRandom);
mostrarMesRandomInOpenModal.addEventListener("click", getMesRandom);

getMesInfo(meses, mesesInfo, junioIndex, modalJunioTitle, modalJunioBody);

function getMesInfo(meses, mesesInfo, mesIndex, titulo, cuerpo) {
  let mesData = "";
  const mes = meses[mesIndex];
  const mesPropiedades = mesesInfo[mes];

  for (const prop in mesPropiedades) {
    if (mesPropiedades.hasOwnProperty(prop)) {
      mesData += mesPropiedades[prop];
    }
  }

  cuerpo.innerHTML = `${mesData}`;
  titulo.innerHTML = `${numeroOrdinales[`${++mesIndex}`]} 
  mes del año → <strong>${mes}</strong>`;
}

function getMesRandom() {
  const mesRandomIndex = getRandomNumber(12);

  getMesInfo(
    meses,
    mesesInfo,
    mesRandomIndex,
    modalRandomTitle,
    modalRandomBody
  );
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}
