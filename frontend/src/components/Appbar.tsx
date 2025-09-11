import { useState } from "react";
import { CardSign } from "./CardSign";
import { Button } from "./ui/button";
import SearchBar from "./Searchbar";
import { useNavigate } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

type AppbarProps = { 
    pageType: string;
    toggle?: ()=> void; 
}

export const Appbar = ({pageType, toggle}: AppbarProps) =>{
    type SignType = "Signin" | "Signup"

    const [visible, setVisible] = useState(false);
    const [type, setType] = useState<SignType>("Signin");
    const navigate = useNavigate();


    const openCard = (t : SignType)=>{
        setType(t);
        setVisible(true)
    }

    const closeCard = () => {
        setVisible(false);
    }
  
    return <>
        <div className="flex flex- justify-between sticky top-0 z-10 w-full bg-background h-15 border border-b-border">
            <div className="flex items-center px-4 ">
                <a className={pageType === "Home" || pageType === "Profile"? "mx-2 hover-elevate hover:cursor-pointer " : "hidden"} onClick={toggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </a>
                <a onClick={() =>{
                    navigate('/Home')
                }} className="font-bold mx-2 font-georgia text-2xl hover:cursor-pointer">Medium</a>
                <div className="hidden md:block">
                <div className={pageType === "Home" || pageType === "Profile" ? "block":"hidden" }>
                    <SearchBar/>
                </div>
                </div>
            </div>
            <div className="flex justify-around [&>*]:mx-2 items-center px-2">
                <div id="bell-profile" className={
                    pageType ==="Profile" || pageType === "Home" || pageType === "Story" 
                    ?"flex flex-row justify-between [&>*]:mx-2 pr-4"
                    : "hidden"
                    }>
                    <Button variant={"secondary"} className={pageType === "Story"? "bg-[#1a8917] text-white hover:text-primary":"hidden"}
                        onClick={()=>{}}> Publish
                    </Button>
                    <Button variant={"secondary"}  className={pageType === "Profile"? "block":"hidden"}
                        onClick={()=>{navigate('/')}}> Logout
                    </Button>
                    <a title="Write New Story" onClick={()=>{
                        navigate('/Story')
                    }} id="New-story"  className={pageType === "Story"?"hidden":"flex items-center hover-left hover:cursor-pointer"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </a>
                    <a href="#" id="bell" className="flex items-center hover-left">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                    </a>
                    <a onClick={()=>{
                        navigate('/Profile')
                    }} id="Profile" className="flex items-center hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <ModeToggle/>
                </div>

                <div className={pageType ==="Sign"?"flex flex-row justify-between relative": "hidden"}>

                    <Button variant={"secondary"} onClick={() => openCard("Signin")} className="hover:cursor-pointer mx-2 ">Signin</Button>
                    <Button variant={"secondary"} onClick={() => openCard("Signup")} className="hover:cursor-pointer mx-2">Signup</Button>
                    <ModeToggle/>

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