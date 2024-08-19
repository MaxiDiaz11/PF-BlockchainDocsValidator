export const useDocs = () => {
  const getDocs = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}/api/documents`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
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

  return {
    getDocs,
  };
};
