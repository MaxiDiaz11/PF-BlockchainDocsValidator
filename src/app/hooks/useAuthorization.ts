import { useEffect, useState } from "react"
import { redirect } from "next/navigation";


export const useAuthorization = () => {

    const [isAuth, setIsAuth] = useState(false)


    useEffect(()=> {
        const token = getToken();
        if(token)
            setIsAuth(true)
    },[])


 const getToken = () => {
    const token = sessionStorage.getItem('authToken');
        if (!token) {
            redirect("/auth/login")
        }
    return token
  }


  return {
    isAuth
  }
}