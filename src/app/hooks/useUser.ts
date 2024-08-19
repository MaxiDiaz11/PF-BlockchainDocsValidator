export const useUser = () => {
    const createAlumno = async (
        legajo: string,
        nombreCompleto: string,
        correoInstitucional: string,
        password:string
       ) => {
        try {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_URL_API}/users/crearAlumno`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    legajo,
                    nombreCompleto,
                    correoInstitucional,
                    password
                }),
              }
            );
      
            if (!response.ok) {
              throw new Error(`Failed to create Alumno ${response.status}`);
            }
      
            const data = await response.json();
            return data;
          } catch (err) {
            console.error(err);
            throw err;
          }
    };

    const createAdmin = async (
        nombreCompleto: string,
        correo: string,
        password:string,
        role:AdminRole
       ) => {
        try {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_URL_API}/users/crearAdmin`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nombreCompleto,
                    correo,
                    password,
                    role
                }),
              }
            );
      
            if (!response.ok) {
              throw new Error(`Failed to create Alumno ${response.status}`);
            }
      
            const data = await response.json();
            return data;
          } catch (err) {
            console.error(err);
            throw err;
          }
    };

        return {
            createAlumno,
            createAdmin
        };
}


enum AdminRole {
    Estadisticas,
    Gestor
}