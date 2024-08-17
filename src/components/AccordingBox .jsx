import { useState } from "react"

export default function AccordingBox ({que , answer}){
    const [isOpen , setIsOpen] = useState(false);
    
    return (
        <div onClick={() => setIsOpen(!isOpen)} className="w-[500px] bg-white mt-[30px] p-[20px] rounded-md">
            <h3 className="flex  justify-between  text-lg font-semibold pb-3">{que}<span role="button">{isOpen ? "-" : "+"}</span></h3>
            {isOpen ? <p>{answer}</p> : ""}
        </div>
    )
}