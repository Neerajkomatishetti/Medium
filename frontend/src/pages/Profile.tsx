import { Appbar } from "@/components/Appbar"
import { Sidebar } from "@/components/Sidebar";


type toggleprop = {
    expanded?: boolean;
    toggle: () => void;
}

export const Profile = ({expanded, toggle}:toggleprop) => {
    return (
        <div>
            <Appbar toggle={toggle} pageType="Profile"/>
            <div>
            <div className={`${expanded? "z-10 absolute transition-transform ease-in-out md:relative" : "hidden md:block relative transition-transform ease-in-out -translate-x-full"}`}>  
                 <Sidebar/>
                </div>
            </div>
        </div>
    )
}