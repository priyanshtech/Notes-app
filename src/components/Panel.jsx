import { useContext,useState } from "react"
import { propdistributer } from "../context/contextmagic"


export default function Panel(){
    

    const {array,setArray,setActiveId,activeId,isPanelOpen,setIsPanelOpen,theme,setTheme}=useContext(propdistributer)
    return(<div className={`
    h-screen
    
    transition-all duration-300
    overflow-hidden
    ${isPanelOpen ? "w-60" : "w-0"}
  `}>
        <h2 className="border-2  rounded-md px-1 ">History</h2>
        <ul >
            {array.map((item) => (
                <li
                onClick={() => setActiveId(item.id)}
                key={item.id}
                className=" px-2 py-1 cursor-pointer   "
                >
                {item.title}
                </li>
            ))}
            </ul>




    </div>)
}