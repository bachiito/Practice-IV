const mesesInfo = {
  Enero: `Proviene del dios romano <em>Janus</em>, quien tenía dos caras,
      una que miraba hacia atrás hacia el año anterior y otra que miraba hacia adelante al nuevo año.`,

  Febrero: `Proviene del festival romano de purificación <em>Februa</em> que se celebraba en este mes.`,

  Marzo: `Se nombra en honor al dios romano de la guerra, <em>Marte</em>.`,

  Abril: `Se cree que proviene de la palabra latina <em>aperire</em>, que significa abrir, ya que abril 
      es el mes en que la primavera está en plena floración.`,

  Mayo: `Se nombra en honor a la diosa romana <em>Maia</em>, quien fue adorada como la diosa de la 
      primavera y el crecimiento.`,

  Junio: `Proviene del nombre de la diosa romana <em>Juno</em>, quien era la diosa del matrimonio y la familia.`,

  Julio: `Originalmente se llamaba <em>Quintilis</em> en el calendario romano, pero se renombró en honor a 
      <em>Julio César</em>, el emperador romano.`,

  Agosto: `Se nombró en honor a <em>Augusto</em>, el primer emperador romano.`,

  Septiembre: `Proviene de la palabra latina <em>septem</em>, que significa siete, ya que era originalmente el 
      séptimo mes del calendario romano.`,

  Octubre: `Proviene de la palabra latina <em>octo</em>, que significa ocho, ya que era originalmente el octavo 
      mes del calendario romano.`,

  Noviembre: `Proviene de la palabra latina <em>novem</em>, que significa nueve, ya que era originalmente el 
      noveno mes del calendario romano.`,

  Diciembre: `Proviene de la palabra latina <em>decem</em>, que significa diez, ya que era originalmente el 
      décimo mes del calendario romano.`,
};

function getModalBody(mes) {
  console.log(mesesInfo[mes]);
}

getModalBody("Enero");
