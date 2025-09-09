import { useState } from "react";
import { CardSign } from "./CardSign";
import { Button } from "./ui/button";



export const Appbar = () =>{
    type SignType = "Signin" | "Signup"

    const [visible, setVisible] = useState(false);
    const [type, setType] = useState<SignType>("Signin");

    const openCard = (t : SignType)=>{
        setType(t);
        setVisible(true)
    }

    const closeCard = () => {
        setVisible(false);
    }
  
    return <>
        <div className="flex flex- justify-between fixed w-full h-15 bg-white border border-b-slate-300">
            <div className="flex items-center px-4 ">
                <a href="#" className="font-bold font-georgia text-2xl">Medium</a>
            </div>
            <div className="flex justify-around [&>*]:mx-2 items-center px-2">
                <div className="hidden"><a href="#">something later1</a></div>
                <div className="flex flex-row justify-between relative">
                    <Button onClick={() => openCard("Signin")} className="hover:cursor-pointer mx-2 ">Signin</Button>
                    <Button onClick={() => openCard("Signup")} className="hover:cursor-pointer mx-2">Signup</Button>

                    {visible && (
                        <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                        onClick={() => setVisible(false)}
                        >
                        <div className="flex justify-center w-full" onClick={(e) => e.stopPropagation()}>
                            <CardSign type={type} toggleCard={closeCard} />
                        </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    </>
}