import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Sign } from './pages/Sign'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { PublishStory } from './pages/PublishStory'
import { useState } from 'react'
import { ThemeProvider } from "@/components/theme-provider"
import { UserStories } from './pages/UserStories'


function App() {
  const [expanded, setExpanded] = useState(true);

  const toggle = () => {
      setExpanded(expanded => !expanded);
  }

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sign/>}/>
        <Route path='/Home' element={<Home expanded={expanded}  toggle={toggle}/>}/>
        <Route path='/Profile' element={<Profile expanded={expanded} toggle={toggle}/>}/>
        <Route path='/UserStories' element={<UserStories expanded={expanded} toggle={toggle}/>}/>
        <Route path='/Story' element={<PublishStory/>}/>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
    
    </>
  )
}

export default App
