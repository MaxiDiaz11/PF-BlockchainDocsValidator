"use client"

import { useAuthorization } from "@/app/hooks/useAuthorization"
import React from "react"




const CheckRoute : React.FC = () => {
    
    const { isAuth } = useAuthorization()
    console.log("Is Auth",isAuth)
    return <></>


}


export default CheckRoute;