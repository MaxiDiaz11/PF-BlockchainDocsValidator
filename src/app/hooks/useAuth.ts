export const useAuth = () => {
    const login = async (email : string, password: string, role : Role) => {
        try {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_URL_API}/auth/login`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                    role,
                }),
              }
            );
      
            if (!response.ok) {
              throw new Error(`Failed to login ${response.status}`);
            }
      
            const data = await response.json();
            return data;
          } catch (err) {
            console.error(err);
            throw err;
          }
        };


        return {
            login,
          };


}


enum Role {
    Admin,
    Alumno
}