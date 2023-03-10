import React from 'react'
import Style from "./Data.module.css"
import Virat_Kohli from './Img/deepika.png'
const Deepika = () => {
  return (
    <div id={Style.main}>
      <div id={Style.Par}>
        <h1>Deepika Padukone</h1><br />
          <br />
      <p>Deepika Padukone (pronounced [d̪iːpɪka pəɖʊkoːɳeː] or [paːɖʊkoːɳ]; born 5 January 1986) is an Indian actress who works in Hindi films. She is one of the highest-paid actresses in India, and her accolades include three Filmfare Awards. She features in listings of the nation's most popular personalities; Time named her one of the 100 most influential people in the world in 2018 and awarded her the TIME100 Impact Award in 2022.</p>
      <br />
      <p>Padukone, the daughter of the badminton player Prakash Padukone, was born in Copenhagen and raised in Bangalore. As a teenager, she played badminton in national level championships but left her career in the sport to become a fashion model. She soon received offers for film roles and made her acting debut in 2006 as the title character of the Kannada film Aishwarya. Padukone then played a dual role opposite Shah Rukh Khan in her first Bollywood release, the romance Om Shanti Om (2007), which won her the Filmfare Award for Best Female Debut. Padukone received praise for her starring role in the romance Love Aaj Kal (2009), but this was followed by a brief setback.</p>
      <br />
      <p>The romantic comedy Cocktail (2012) marked a turning point in her career, and she gained further success with starring roles in the romantic comedies Yeh Jawaani Hai Deewani and Chennai Express (both 2013), the heist comedy Happy New Year (2014), Sanjay Leela Bhansali's period dramas Bajirao Mastani (2015) and Padmaavat (2018), and the Hollywood action film XXX: Return of Xander Cage (2017). She also received critical acclaim for playing a character based on Juliet in Bhansali's tragic romance Goliyon Ki Raasleela Ram-Leela (2013) and a headstrong architect in the comedy-drama Piku (2015), winning two Filmfare Awards for Best Actress. She formed her own company Ka Productions in 2018, under which she produced and acted in Chhapaak (2020) and 83 (2021), both of which failed commercially.</p>
      <br />  
    </div>
      <div id={Style.Img}>
      <img src={Virat_Kohli} alt="Virat" />
      </div>
    </div>
  )
}

export default Deepika