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
        <button
            className="border-2 rounded-md px-3 py-1  bg-blue-200"
            onClick={() => {
                const lines = content.trim().split("\n");
                    const title = lines[0];

                if (!title) {
                    alert("Write something to save the note");
                    return;
                    }

                setArray(prev=>[...prev,{id: Date.now(),title,content}])
                setTitle("");
                setContent("");
                

            }}
            >
            Save
            </button><button
            className="border-2 rounded-md px-3 py-1  bg-red-200"
            onClick={() => {
                if (!title.trim() || !content.trim()){
                    alert("both required title and content to delete")
                    return;
                }
                 setArray(prev => prev.filter(note => note.id !== activeId));
                setTitle("");
                setContent("");
                

            }}
            >
            Delete
            </button></div>

        </div>


    </div>)
}