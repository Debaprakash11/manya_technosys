import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./MTP/Home";
import Msd from "./MTP/Msd";
import Virat from "./MTP/Virat";
import Rohit from './MTP/Rohit'
import Deepika from './MTP/Deepika'
import Modi from './MTP/Modi'
import Robert from './MTP/Robert'
import Rock from './MTP/Rock'
import Smirti from './MTP/Smirti'
import Badshah from './MTP/Badshah'
import Rashmika from './MTP/Rashmika'
const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Home/>
        <Routes>
            <Route path="/" element={<Msd/>}></Route>         
            <Route path="/vir" element={<Virat/>}></Route>          
            <Route path="/dee" element={<Deepika/>}></Route>          
            <Route path="/mod" element={<Modi/>}></Route>          
            <Route path="/ras" element={<Rashmika/>}></Route>          
            <Route path="/roh" element={<Rohit/>}></Route>          
            <Route path="/sim" element={<Smirti/>}></Route>          
            <Route path="/rob" element={<Robert/>}></Route>          
            <Route path="/bad" element={<Badshah/>}></Route>          
            <Route path="/roc" element={<Rock/>}></Route>          
                   
        </Routes>
        </BrowserRouter>
       
    </div>
  )
}

export default App