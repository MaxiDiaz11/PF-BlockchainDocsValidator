export function getDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('es-ES', options);
}



export const getNombreDoc = (nombre: string) => {
  const nombreConExtension = nombre.split("-")[1];

  const nombreSinExtension = nombreConExtension.split(".")[0];

  return nombreSinExtension;
};
