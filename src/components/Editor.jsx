import { useContext, useEffect } from "react"
import { propdistributer } from "../context/contextmagic"

export default function Editor (){
    const {title,setTitle,content,setContent,array,setArray,activeId,setActiveId}=useContext(propdistributer)

    useEffect(( )=>
        {
        const nota=array.find(n=>n.id===activeId)
            if (nota){
                setTitle(nota.title)
                setContent(nota.content)
            }
        },[activeId])



    return(<div className="h-screen flex-1"><div className="flex flex-col h-screen">
        



        <textarea placeholder="Write something " className=" border-2 rounded-md flex-1 px-4 py-3 overflow-y-auto caret-blue-900" value ={content}
        onChange={(e)=>setContent(e.target.value)} /> 
        <div>
        </div>

        </div>


    </div>)
}