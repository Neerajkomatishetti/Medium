import { Appbar } from "@/components/Appbar"
import { HomeStories } from "@/components/HomeStories";
import ProfileCard from "@/components/ProfileCard";
import { Sidebar } from "@/components/Sidebar";
import { useEffect, useState } from "react";
import type { Profileprops } from "@/components/ProfileCard";


type toggleprop = {
    expanded?: boolean;
    toggle: () => void;
}

export const Profile = ({expanded, toggle}:toggleprop) => {
    const [ProfileDetails, setProfileDetails] = useState<Profileprops['ProfileDetails']>({
            name:"Anonymous",
            img_url:"/landscape-placeholder-svgrepo-com.svg",
            link:"./Profile"
        })
    useEffect(()=>{
        setProfileDetails({
            ...ProfileDetails,
            name:localStorage.getItem('username') ?? "Anonymous"
        })
    },[])

        
    return (
        <div>
            <Appbar toggle={toggle} pageType="Profile"/>
            <div className="flex flex-row  relative h-[calc(100vh-60px)]">
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${expanded ? 'absolute z-20 left-0 w-[65vw] lg:relative  lg:w-[30vw]' : ' absolute z-10 lg:relative -left-80 w-0'}`}>
                    <Sidebar/>
                </div>
                <div className="w-full flex justify-center">
                <div className="w-full lg:max-w-[80vw] flex flex-row h-[calc(100vh-60px)] px-5">
                    <div className="flex flex-col items-center w-full  h-auto">
                        <div className="flex flex-row items-end w-full h-30">
                            <h1  className="font-bold text-3xl">{ProfileDetails.name}</h1>
                        </div>
                        <HomeStories />
                    </div>
                    <div className="hidden lg:block bg-background text-primary border border-l ml-1 w-97 max-h-[calc(100vh-60px)] px-5 pt-10 pr-5 overflow-y-auto scrollbar-modern ">
                        <ProfileCard ProfileDetails={ProfileDetails} />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}