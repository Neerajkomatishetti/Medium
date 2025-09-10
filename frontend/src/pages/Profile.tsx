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
            <div className={`transition-all duration-300 overflow-hidden ${expanded ? 'w-[70vw] md:w-[30vw]' : 'w-0'}`}>
                    <Sidebar/>
            </div>
            </div>
        </div>
    )
}