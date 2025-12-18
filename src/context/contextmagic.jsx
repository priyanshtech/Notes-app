import { createContext } from "react";
import { useState } from "react";

export const propdistributer=createContext()

export default function ProviderFunction({children}){

    const [array , setArray]=useState([])
    const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [activeId, setActiveId] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const[theme,setTheme]=useState("light")
   function toggleTheme(){
    setTheme(theme==="light"?"dark":"light")
   }





    return(<propdistributer.Provider value={{array,setArray,title,setTitle,content,setContent,activeId, setActiveId,isPanelOpen,setIsPanelOpen,theme,setTheme,toggleTheme}}>{children}</propdistributer.Provider>

    )
}