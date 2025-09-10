import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Sign } from './pages/Sign'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { PublishStory } from './pages/PublishStory'
import { useState } from 'react'


function App() {
  const [expanded, setExpanded] = useState(true);

  const toggle = () => {
      setExpanded(expanded => !expanded);
  }

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/Sign' element={<Sign/>}/>
        <Route path='/Home' element={<Home expanded={expanded}  toggle={toggle}/>}/>
        <Route path='/Profile' element={<Profile expanded={expanded} toggle={toggle}/>}/>
        <Route path='/Story' element={<PublishStory/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
