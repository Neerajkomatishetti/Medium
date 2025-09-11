import { Textarea } from "@/components/ui/textarea"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useState } from "react"
import axios from "axios"

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export const StoriesInput = () => {
    const [story, setStory] = useState({
        title:"",
        content:""
    });

    const token:string | null = localStorage.getItem('token');

    return (
        <div className="flex justify-center mt-5">
            <div className="flex flex-col [&>*]:my-4 mt-10 w-[90vw] md:w-[50vw]">
                <Input onChange={(e) => {
                    setStory({
                        ...story,
                        title:e.target.value
                    })
                }} 
                value={story.title}
                placeholder="Title"/>
                <Textarea onChange={(e) => {
                    setStory({
                        ...story,
                        content:e.target.value
                    })
                }}
                value={story.content}
                className="min-h-[30vh]" id="Story" placeholder="Write a Story"/>
                <Button onClick={async () =>{
                    const response = await axios.post(`${BACKEND_URL}/blog`, {
                            title:story.title,
                            content:story.content
                    },
                     {
                        headers:{
                            Authorization:token
                        }
                    })
                    alert(response.data.message)

                }} className="max-w-30">Submit</Button>
            </div>
            
        </div>
    )
}