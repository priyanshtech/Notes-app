import { useContext, useState } from "react"
import Editor from "./components/editor";
import { propdistributer } from "./context/contextmagic";
import Panel from "./components/Panel";

export default function App() {
  const {array,setArray,isPanelOpen,setIsPanelOpen,content,setTitle,title,setContent,activeId,setActiveId,theme,setTheme,toggleTheme}=useContext(propdistributer)

  const empty=[]

  return (<>
    <div  className={`${theme==="light"?"bg-white text-black":"bg-black text-white"}`}>
      
      <h1 className="flex justify-center font-bold text-3xl ">NOTES</h1><button
        onClick={() => setIsPanelOpen(prev => !prev)}
        className="border px-2 py-1 rounded"
      >
        {isPanelOpen ? "Close" : "Open"}
      </button>
      
      
      
      
                <button
                      className="border-2 rounded-md px-3 py-1  bg-blue-200 mx-1 hover:scale-102 hover:bg-blue-300 transition-all duration-200"
                      onClick={() => {
            const trimmed = content.trimStart();
            const title = trimmed.split(" ")[0].slice(0,10);

            if (!title) {
              alert("Write something to save the note");
              return;
            }

            // UPDATE existing note
            if (activeId !== null) {
              setArray(prev =>
                prev.map(i =>
                  i.id === activeId
                    ? { ...i, title, content }
                    : i
                )
              );
              setContent("");
              return; // ⬅️ THIS IS THE KEY
            }

            // CREATE new note
            setArray(prev => [
              ...prev,
              { id: Date.now(), title, content }
            ]);

            setContent("");
            }}

            >
            +
            </button><button
                        className="border-2 rounded-md px-3 py-1  bg-red-200"
                        onClick={() => {
              
              setArray(prev => prev.filter(note => note.id !== activeId));
              setActiveId(null);
              setContent("");
            }}

            >
            Delete
            </button >
            <button className="border-2 bg-red-500 rounded-lg mx-2 px-2 hover:scale-102 hover:bg-red-700"onClick={()=>{return setArray(empty)}}>clear all </button><button className="border-2 mx-2 px-2 rounded-md"
            onClick={toggleTheme}>switch  {theme==="dark"?"light":"dark"}</button>
      
      <div className="flex">
        
      <Panel/>
      <Editor/>
       </div>


       
    </div></>
  );
}
