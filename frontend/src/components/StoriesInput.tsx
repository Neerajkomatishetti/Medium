import { Textarea } from "@/components/ui/textarea"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export const StoriesInput = () => {
    return (
        <div className="flex justify-center mt-5">
            <div className="flex flex-col [&>*]:my-4 mt-10 w-[90vw] md:w-[50vw]">
                <Input placeholder="Title"/>
                <Textarea className="min-h-[30vh]" id="Story" placeholder="Write a Story"/>
                <Button className="max-w-30">Submit</Button>
            </div>
            
        </div>
    )
}