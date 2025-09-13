
import { useState } from "react"
import Skeleton, { Skeletn } from "./Skeletn"




export const HomeStoriesSkeleton = () => {
    const [activeTab, setActiveTab] = useState('For you')
    
    return (
        <div className="w-full">
          <div className="mb-4 w-full border-b border-border">
            <ul className="flex flex-wrap sticky top-0 -mb-px text-md font-medium text-center" role="tablist">
              {["For you", "Featured"].map((tab) => (
                <li key={tab} className="me-2" role="presentation">
                  <button
                    className={`inline-block p-4 border-b-2 rounded-t-lg ${
                      activeTab === tab
                        ? 'border-blue-500 text-blue-600 dark:text-blue-500'
                        : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                    }`}
                    onClick={() => setActiveTab(tab)}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab}
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
          </div>
      
          <div >
            {activeTab === 'For you' && (
              <div className=" rounded-lg w-full bg-background [&>*]:my-10   overflow-y-auto scrollbar-none max-h-[calc(100vh-140px)]" role="tabpanel">

                <Skeletn/>
                <Skeletn/>
                <Skeletn/>
                <Skeletn/>
                <Skeletn/>
                <Skeletn/>
                <Skeletn/>
             

              </div>
            )}
            {activeTab === 'Featured' && (
              <div className="p-4 rounded-lg bg-background" role="tabpanel">
                <p className="text-sm ">
                  This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>.
                </p>
              </div>
            )}
          </div>
        </div>
      )
      
}