export const useSpecialDocs = () => {

    const uploadDocument = async (file : File) => {
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/special-documents`, {
              method: "POST",
              body: formData,
            });
        
            if (!response.ok) {
              throw new Error("Failed to upload document");
            }
        
            const data = await response.json();
            return data;
          } catch (err) {
            console.error("Error uploading document:", err);
            throw err;
          }
    };

    const updateStatus = async (status: number, specialDocumentId: number) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/special-documents`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                status,
                specialDocumentId
              }),
            });
        
            if (!response.ok) {
              throw new Error("Failed  updating special document status");
            }
        
            const data = await response.json();
            return data;
          } catch (err) {
            console.error("Error updating special document status:", err);
            throw err;
          }
    }


    const filterSpecialDoc = async (status: number, alumnoName : string, alumnoLegajo : string) => {
        try {

            const queryParams = new URLSearchParams({
                status: status.toString(),
                alumnoName,
                alumnoLegajo,
              }).toString();


            const response = await fetch(
                `${process.env.NEXT_PUBLIC_URL_API}/special-documents?${queryParams}`,
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
    }


    return {
        uploadDocument,
        updateStatus,
        filterSpecialDoc
    }


}