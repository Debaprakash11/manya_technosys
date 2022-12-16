import React from 'react'
import Style from "./Data.module.css"
import Virat_Kohli from './Img/rohit.png'
const Rohit = () => {
  return (
    <div id={Style.main}>
      <div id={Style.Par}>
        <h1>Rohit Sharma</h1><br />
          <br />
      <p>Rohit Gurunath Sharma (born 30 April 1987) is an Indian international cricketer and the current captain of the Indian cricket team. Widely considered as one of the best opening batter of all time,[2] he plays as a right-handed batsman for Mumbai Indians in IPL and for Mumbai in domestic cricket. Rohit Sharma also captains Mumbai Indians in IPL and the team has won 5 tittles under his leadership, most by any team.</p>
      <br />
      <p>Sharma currently holds the world record for the highest individual score (264) in a One Day International (ODI) match and is the only player to have scored three double-centuries in ODIs and also holds the record for scoring most hundreds (five) in a single Cricket World Cup, for which he won the ICC Men's ODI Cricketer of the Year award in 2019. Sharma has received two national honours, the Arjuna Award in 2015 and the prestigious Major Dhyan Chand Khel Ratna in 2020.</p>
      <br />
      <p>Sharma was born on 30 April 1987 in Bansod, Nagpur, Maharashtra.[3] His mother, Purnima Sharma, is from Visakhapatnam, Andhra Pradesh.[4] His father, Gurunath Sharma, worked as a caretaker of a transport firm storehouse. Sharma was raised by his grandparents and uncles in Borivali because of his father's low income. He would visit his parents, who lived in a single-room house in Dombivli, only during weekends.[5] He has a younger brother, Vishal Sharma.[6]</p>
      <br />
      <p>Sharma joined a cricket camp in 1999 with his uncle's money. Dinesh Lad, his coach at the camp, asked him to change his school to Swami Vivekanand International School, where Lad was the coach and the cricket facilities were better than those at Sharma’s old school. Sharma recollects, "I told him I couldn't afford it, but he got me a scholarship. So for four years I didn't pay a penny, and did well in my cricket".[6] Sharma started as an off-spinner who could bat a bit before Lad noticed his batting ability and promoted him from number eight to open the innings. He excelled in the Harris and Giles Shield school cricket tournaments, scoring a century on debut as an opener.[7]</p>  
    </div>
      <div id={Style.Img}>
      <img src={Virat_Kohli} alt="Virat" />
      </div>
    </div>
  )
}

export default Rohit