
import { useState } from "react"


export const HomeStories = () => {
    const [activeTab, setActiveTab] = useState('For you')

    return (
        <div>
          <div className="mb-4 border-b border-border">
            <ul className="flex flex-wrap sticky top-0 -mb-px text-md font-medium text-center" role="tablist">
              {['For you', 'Featured'].map((tab) => (
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
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 [&>*]:my-10 [&>*]:border-b [&>*]:border-border overflow-y-auto scrollbar-none max-h-[calc(100vh-140px)]" role="tabpanel">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the 
                  lorem*50<strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the 
                  lorem*50<strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the 
                  lorem*50<strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the 
                  lorem*50<strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the 
                  lorem*50<strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the 
                  lorem*50<strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the 
                  lorem*50<strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the 
                  lorem*50<strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the 
                  lorem*50<strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the 
                  lorem*50<strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the 
                  lorem*50<strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the 
                  lorem*50<strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the 
                  lorem*50<strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the 
                  lorem*50<strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the 
                  lorem*50<strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the 
                  lorem*50<strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>.
                </p>
              </div>
            )}
            {activeTab === 'Featured' && (
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" role="tabpanel">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>.
                </p>
              </div>
            )}
          </div>
        </div>
      )
      
}