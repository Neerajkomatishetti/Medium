import { useNavigate } from "react-router-dom"


export const Sidebar =() =>{
    const navigate = useNavigate()
    return <>
    <div id="sidebar" className="w-[50vw] md:flex md:flex-col md:items-start md:[&>*]:py-3 md:pl-5 md:pt-10 md:w-[20vw] h-[calc(100vh-60px)]">
                        <div className="flex w-full pl-4 pr-2 justify-start font-sans text-lg">
                            <ul className="[&>*]:py-4 [&>*]:px-1 [&>*]:hover:cursor-pointer [&>*]:border [&>*]:border-b-gray-200 w-full [&>*]:rounded-md [&>*]:hover:bg-gray-200">
                                <li onClick={() => { navigate('/home') }}>Home</li>
                                <li onClick={() => { navigate('/home') }}>Library</li>
                                <li onClick={() => { navigate('/Profile') }}>Profile</li>
                                <li onClick={() => { navigate('/Story') }}>Stories</li>
                                <li onClick={() => { navigate('/home') }}>Stats</li>
                            </ul>
                        </div>
                        <div className="w-full pl-4">Following</div>
                        <div className="flex w-full pl-4">
                            <div className="pr-2 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                            <div className="flex flex-col w-full pr-2">
                                <div className="w-fit">Discover more writers and publications to follow.</div>
                                <div>
                                    <a href="#" className="underline">See suggestions</a>
                                </div>
                            </div>
                        </div>
            </div>
    </>
}