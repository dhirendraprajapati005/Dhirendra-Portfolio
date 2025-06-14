import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Project';


const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/project' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    </div>
  )
}

export default App;