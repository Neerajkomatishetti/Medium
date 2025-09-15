import { Appbar } from "@/components/Appbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"


export const Sign = ()=> {
    return <div className="no-scrollbar">
        <Appbar pageType="Sign"/>
        <div className="flex w-screen justify-between h-full bg-background">
            <div className="flex flex-col justify-center items-center w-[50vw] h-[calc(100vh-60px)] bg-background ml-20 md:ml-10">
                <div id="left-div-sign" className="w-fit">
                <h1 className=" font-heavy text-5xl md:text-8xl">Human</h1>
                <h1 className=" font-heavy text-5xl md:text-8xl">stories & ideas</h1>
                <p className="font-p mt-5">A place to read, write, and deepen your understanding</p>
                <Button onClick={()=>{
                    alert("login to Read!")
                }} className="mt-5">Start Reading</Button>
                </div>
            </div>
            <div className="hidden md:block md:w-fit">
                <img className="block dark:hidden h-[calc(100vh-60px)]" src="./medium-bg-img.webp" alt="background image" />
                <img className="hidden dark:block h-[calc(100vh-60px)]" src="./medium-image.png" alt="background image" />
            </div>
        </div>
        <Footer/>
    </div>
}