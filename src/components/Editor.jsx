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
        <input className="border-2 rounded-md px-1" placeholder="title  "
        value ={title}
        onChange={(e)=>setTitle(e.target.value)}/>



        <textarea placeholder="write something " className=" border-2 rounded-md flex-1 px-1 overflow-y-auto " value ={content}
        onChange={(e)=>setContent(e.target.value)} /> 
        <div>
        <button
            className="border-2 rounded-md px-3 py-1  bg-blue-200"
            onClick={() => {
                if (!title.trim() || !content.trim()){
                    alert("both required title and content ")
                    return;
                }
                setArray(prev=>[...prev,{id: Date.now(),title,content}])
                setTitle("");
                setContent("");
                

            }}
            >
            Save
            </button><button
            className="border-2 rounded-md px-3 py-1  bg-blue-200"
            onClick={() => {
                if (!title.trim() || !content.trim()){
                    alert("both required title and content to delete")
                    return;
                }
                setArray(prev=>[...prev,{id: Date.now(),title,content}])
                setTitle("");
                setContent("");
                

            }}
            >
            Delete
            </button></div>

        </div>


    </div>)
}