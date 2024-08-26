export const getDate = (fechaStr: string) => {
  // Formato: YYYY-MM-DD HH:MM:SS
  // Extraer partes de la fecha
  const [fecha, hora] = fechaStr.split("T");
  const [anio, mes, dia] = fecha.split("-");
  const [horas, minutos, segundos] = hora
    .split(":")
    .map((part) => part.split(".")[0]);

  const formato = `${anio}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;

  return formato;
};

export const getNombreDoc = (nombre: string) => {
  const nombreConExtension = nombre.split("-")[1];

  const nombreSinExtension = nombreConExtension.split(".")[0];

  return nombreSinExtension;
};
