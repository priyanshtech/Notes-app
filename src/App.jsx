import { useContext, useState } from "react"
import Editor from "./components/editor";
import { propdistributer } from "./context/contextmagic";

export default function App() {
  const {array,setArray}=useContext(propdistributer)

  

  return (<>
    <div >
      <h1 className="flex justify-center font-bold text-3xl bg-gray-200">NOTES</h1>
      <Editor/>

       
    </div></>
  );
}
