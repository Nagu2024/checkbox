import React from 'react'
import Home from './home'
import Dynamic from './Dynamic'
import Optiond from './Optiond';
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dynamic" element={<Dynamic />} />
        <Route path="/optiond" element={<Optiond />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App