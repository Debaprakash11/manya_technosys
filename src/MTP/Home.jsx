import React from 'react'
import User from './Msd'
import Virat from './Virat'
import Rohit from './Rohit'
import Deepika from './Deepika'
import Modi from './Modi'
import Robert from './Robert'
import Rock from './Rock'
import Smirti from './Smirti'
import Badshah from './Badshah'
import Rashmika from './Rashmika'
import Style from "./Data.module.css"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <h1 id={Style.logo}>
      <i class="fa-solid fa-microchip" ></i>YourData</h1>
      <nav>
        <Link to='/mod'>MODI</Link>
        <Link to='/'>DHONI</Link>
        <Link to='/vir'>VIRAT</Link>
        <Link to='/roh'>ROHIT</Link>
        <Link to='/sim'>SMRITI</Link>
        <Link to='/bad'>BADSHAH</Link>
        <Link to='/dee'>DEEPIKA</Link>
        <Link to='/ras'>RASHMIKA</Link>
        <Link to='/rob'>ROBERT</Link>
        <Link to='/roc'>ROCK</Link>  
    </nav>

    </div>
    
  )
}

export default Home