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
        



        <textarea placeholder="Write " className=" flex-1 px-10 py-10 overflow-y-auto caret-blue-100 text-3xl" value ={content}
        onChange={(e)=>setContent(e.target.value)} /> 
        <div>
        </div>

        </div>


    </div>)
}