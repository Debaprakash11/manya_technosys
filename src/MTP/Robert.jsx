import React from 'react'
import Style from "./Data.module.css"
import Virat_Kohli from './Img/robert.png'

const Robert = () => {
  return (
    <div id={Style.main}>
      <div id={Style.Par}>
        <h1>Robert Downey Jr.</h1><br />
          <br />
          <p>Robert John Downey Jr. (born April 4, 1965)[1] is an American actor and producer. His career has been characterized by critical and popular success in his youth, followed by a period of substance abuse and legal troubles, before a resurgence of commercial success later in his career. In 2008, Downey was named by Time magazine among the 100 most influential people in the world,[2][3] and from 2013 to 2015, he was listed by Forbes as Hollywood's highest-paid actor.[2][3]</p>
          <br />
          <p>At the age of five, he made his acting debut in his father Robert Downey Sr.'s film Pound in 1970. He subsequently worked with the Brat Pack in the teen films Weird Science (1985) and Less than Zero (1987). In 1992, Downey portrayed the title character in the biopic Chaplin, for which he was nominated for the Academy Award for Best Actor and won a BAFTA Award. Following a stint at the Corcoran Substance Abuse Treatment Facility on drug charges, he joined the TV series Ally McBeal, for which he won a Golden Globe Award. He was fired from the show in the wake of drug charges in 2000 and 2001. He stayed in a court-ordered drug treatment program and has maintained his sobriety since 2003.</p>
          <br />
          <p>Initially, completion bond companies would not insure Downey, until Mel Gibson paid the insurance bond for the 2003 film The Singing Detective.[4] He went on to star in the black comedy Kiss Kiss Bang Bang (2005), the thriller Zodiac (2007), and the action comedy Tropic Thunder (2008); for the latter, he was nominated for an Academy Award for Best Supporting Actor.</p>
          <br />
          <p>Downey gained global recognition for starring as Tony Stark in ten films within the Marvel Cinematic Universe, beginning with Iron Man (2008), and leading up to Avengers: Endgame (2019). He has also played the title character in Guy Ritchie's Sherlock Holmes (2009), which earned him his second Golden Globe, and its sequel, Sherlock Holmes: A Game of Shadows (2011).</p>
    </div>
      <div id={Style.Img}>
      <img src={Virat_Kohli} alt="Virat" />
      </div>
    </div>
  )
}

export default Robert