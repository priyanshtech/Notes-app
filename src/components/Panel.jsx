import { useContext,useState } from "react"
import { propdistributer } from "../context/contextmagic"


export default function Panel(){
    

    const {array,setArray,setActiveId,activeId,isPanelOpen,setIsPanelOpen}=useContext(propdistributer)
    return(<div className={`
    h-screen
    bg-gray-100
    transition-all duration-300
    overflow-hidden
    ${isPanelOpen ? "w-40" : "w-0"}
  `}>
        <h2 className="border-2 overflow-hidden rounded-md px-1 ">History</h2>
        <ul className="border">
            {array.map((item) => (
                <li
                onClick={() => setActiveId(item.id)}
                key={item.id}
                className="border-b px-2 py-1 cursor-pointer  truncate "
                >
                {item.title}
                </li>
            ))}
            </ul>




    </div>)
}