import { Appbar } from "@/components/Appbar"
import { StoriesInput } from "@/components/StoriesInput"

export const PublishStory =() => {
    return (
        <div>
            <Appbar pageType="Story"/>
            <div>
                <StoriesInput/>
            </div>
        </div>
    )
}