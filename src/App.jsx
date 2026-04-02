import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import RootLayout from './layouts/RootLayout'
import Learns from './pages/Learns'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<RootLayout/>}>
          <Route index element={<Home/>}></Route>
          <Route path='/Learns' element={<Learns/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App