export default function Editor (){
    return(<div className="h-screen flex flex-col">
        <input className="border-2 rounded-md px-1" placeholder="title  "/>



        <textarea placeholder="write something " className=" border-2 rounded-md flex-1 px-1 overflow-y-auto" />


    </div>)
}