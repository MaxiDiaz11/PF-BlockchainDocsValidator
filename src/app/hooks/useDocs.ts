export const useDocs = () => {

  const solicitarDoc = async (documentType: string, legajo: string, sysacadPass: string) => {
    try {
      const token = getToken()

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}/documents`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
          body: JSON.stringify({
              documentType,
              legajo,
              sysacadPass,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to generate doc ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const getDocs = async () => {
    try {
      const token = getToken()
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}/documents`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch documents");
      }

      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const validateDoc = async (cid: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}/documents/validarDocumento`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cid
        }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch documents");
      }

      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const getToken = () => {
    const token = sessionStorage.getItem('authToken');
        if (!token) {
          throw new Error("No authentication token found");
        }
    return token
  }

  return {
    getDocs,
    solicitarDoc,
    validateDoc
  };
};


