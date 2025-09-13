import { useNavigate } from "react-router-dom"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"


export const Sidebar =() =>{
    const navigate = useNavigate()
    return <>
    <div id="sidebar" className="w-[70vw]  border  shadow dark:shadow-gray-500 bg-background text-primary md:flex md:flex-col md:items-start md:[&>*]:py-3 md:pl-5 md:pt-10 md:w-[20vw] h-[calc(100vh-60px)]">
                        <div className="flex w-full pl-4 pr-2 justify-start font-sans text-lg">
                            <ul className="[&>*]:py-4 [&>*]:px-1 [&>*]:hover:cursor-pointer [&>*]:border-b hover:text-primary [&>*]:shadow-secondary w-full [&>*]:rounded-md [&>*]:hover:bg-secondary ">
                                <li onClick={() => { navigate('/Home') }}>
                                    <div className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mr-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                        </svg>
                                        <p>Home</p>
                                    </div>
                                    </li>
                                <li onClick={() => { navigate('/Home') }}>
                                    <div className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mr-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                        </svg>
                                        <p>Library</p>
                                    </div>
                                    
                                </li>
                                <li onClick={() => { navigate('/Profile') }}>
                                    <div className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mr-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                        <p>Profile</p>
                                    </div>
                                </li>
                                <li onClick={() => { navigate('/UserStories') }}>
                                    <div className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                                        </svg>
                                        <p>Stories</p>
                                    </div>
                                </li>
                                <li onClick={() => { navigate('/Home') }}>
                                    <div className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                                        </svg>
                                        <p>Stats</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full pl-4 mb-4">Following</div>
                        <div className="flex flex-row justify-between w-full mb-10 px-2">
                            <div className="pr-2 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                            <div className="flex flex-col wrap-break-word pr-2">
                                <div className="w-[80%]">Discover more writers and publications to follow.</div>
                                <div>
                                    <a href="#" className="underline">See suggestions</a>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full pl-4">
                            <Button className="mr-2" variant={"secondary"} onClick={()=>{navigate('/')}}>
                                 Logout
                            </Button>
                            <ModeToggle/>
                        </div>
            </div>
    </>
}