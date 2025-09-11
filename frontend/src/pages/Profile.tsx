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
            <div className={`transition-all duration-300 overflow-hidden ${expanded ? 'absolute z-10 left-0 w-[65vw] lg:relative  lg:w-[30vw]' : ' absolute z-10 lg:relative w-0'}`}>
                    <Sidebar/>
            </div>
            </div>
        </div>
    )
}