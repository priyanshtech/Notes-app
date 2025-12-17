import { useContext, useState } from "react"
import Editor from "./components/editor";
import { propdistributer } from "./context/contextmagic";
import Panel from "./components/Panel";

export default function App() {
  const {array,setArray,isPanelOpen,setIsPanelOpen}=useContext(propdistributer)

  

  return (<>
    <div  >
      
      <h1 className="flex justify-center font-bold text-3xl bg-gray-200">NOTES</h1><button
        onClick={() => setIsPanelOpen(prev => !prev)}
        className="border px-2 py-1 rounded"
      >
        {isPanelOpen ? "Close" : "Open"}
      </button>
      
      <div className="flex">
        
        <Panel/>
      <Editor/>
       </div>


       
    </div></>
  );
}
