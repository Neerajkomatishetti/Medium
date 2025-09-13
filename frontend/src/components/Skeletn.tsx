import { Skeleton } from "@/components/ui/skeleton"

export const Skeletn = () => {
    return(
            <div  className="flex flex-col h-fit w-full border-b bg-background border-border">
                    <div className="flex justify-between">
                    <div className="flex flex-col mx-5  w-full lg:w-[60%]">
                        <Skeleton className="w-1/2 min-h-10 h-fit my-2 text-2xl font-bold"/>

                        <Skeleton className="w-full min-h-10 h-fit my-2 "/>

                    </div>
                    <div className=" flex items-center">
                        <img className="max-h-30 animate-pulse" src="/landscape-placeholder-svgrepo-com.svg" place-holder='blog photo' />
                    </div>
                </div>
            </div>
    )
}

export default Skeleton;