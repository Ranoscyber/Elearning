import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import RootLayout from './layouts/RootLayout'
import Learns from './pages/Learns'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<RootLayout/>}>
          <Route index element={<Home/>}></Route>
          <Route path='/Learns' element={<Learns/>}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App