import { createContext } from "react";
import { useState } from "react";

export const propdistributer=createContext()

export default function ProviderFunction({children}){

    const [array , setArray]=useState([])




    return(<propdistributer.Provider value={{array,setArray}}>{children}</propdistributer.Provider>

    )
}