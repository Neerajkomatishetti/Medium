import { Appbar } from "@/components/Appbar";
import axios from "axios";
import { useEffect, useState } from "react"
import type { toggleprop } from "./Home";
import { Sidebar } from "@/components/Sidebar";
import type { Post } from "@/components/HomeStories";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export const UserStories = ({expanded, toggle}: toggleprop) => {

    const [userstories, setUserStories] = useState<Post[]>([]);

    const token:string | null = localStorage.getItem('token');

    const fetchData = async () => {
        try {
            const res = await axios.get(`${BACKEND_URL}/blog/userStories`, {
                headers: {
                    Authorization: token
                }
            });
            setUserStories(res.data?.Posts ?? []);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() =>{
        fetchData();

    },[])

    return <div>
        <Appbar pageType="Profile"  toggle={toggle}/>
        <div  className="flex flex-row relative max-h-[calc(100vh-60px) top-[0]">
            <div className={`transition-all duration-500 ease-in-out overflow-hidden  ${expanded ? 'absolute z-10 left-0 w-[65vw] lg:relative  lg:w-[30vw]' : ' absolute z-10 lg:relative  -left-80 w-0'}`}>
                <Sidebar/>
            </div>
            <div className="flex flex-col items-center py-10 w-full max-h-[calc(100vh-60px)]  scrollbar-modern overflow-y-auto">
                { userstories.map( (post:Post) =>{
                    return (
                    <div key={post.id} className="flex flex-col mt-5 h-fit w-[95vw] lg:max-w-[60vw]  border shadow bg-background border-border ">
                        <div className="flex justify-between">
                        <div className="flex flex-col mx-5  w-full lg:w-[50%]">
                            <div className="w-full min-h-10 h-fit py-2 border-b border-border font-bold">
                                {post.title}
                            </div>
                            <p className="w-full min-h-20 h-fit py-2 ">
                                {post.content}
                            </p>
                        </div>
                        <div className="flex pr-2 py-2 items-center mx-2">
                            <img className="max-h-30" src="/landscape-placeholder-svgrepo-com.svg" place-holder='blog photo' />
                        </div>
                        </div>
                    </div>)
                }) }

            </div>
        </div>

    </div>
}