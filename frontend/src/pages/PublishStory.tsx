import { Appbar } from "@/components/Appbar"
import { Stories } from "@/components/Stories"

export const PublishStory =() => {
    return (
        <div>
            <Appbar pageType="Story"/>
            <div>
                <Stories/>
            </div>
        </div>
    )
}