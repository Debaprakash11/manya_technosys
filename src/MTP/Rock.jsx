import React from 'react'
import Style from "./Data.module.css"
import Virat_Kohli from './Img/rock.png'
const Rock = () => {
  return (
    <div id={Style.main}>
      <div id={Style.Par}>
        <h1>Dwayne Johnson(Rock)</h1><br />
          <br />
      <p>Dwayne Douglas Johnson (born May 2, 1972), also known by his ring name The Rock,[3] is an American actor and former professional wrestler. Widely regarded as one of the greatest professional wrestlers of all time,[6][7] he was integral to the development and success of the WWE during the Attitude Era, an industry boom period in the late 1990s and early 2000s. Johnson wrestled for WWF/E for eight years prior to pursuing an acting career. His films have grossed over $3.5 billion in North America and over $10.5 billion worldwide,[8] making him one of the world's highest-grossing and highest-paid actors.[9][10]</p>
      <br />
      <p>Prior to his emergence as a top-grossing actor beginning in the 2010s, Johnson was an athlete. At Freedom High School in Bethlehem Township, Pennsylvania in the Lehigh Valley, he ultimately emerged as a standout on the school's football and wrestling teams, which competed in the Eastern Pennsylvania Conference, a conference known for producing top professional and Olympic athletes. He credits his high school football coach with helping inspire transformational changes in his life, which before entering sports in 11th grade had been characterized by fights and petty crimes as a high-school teenager. His football capabilities at Freedom High School led him to be ranked as one of the top ten defensive tackle high-school prospects in the nation, drawing the attention of several NCAA Division I college football programs.</p>
      <br />
      <p>Johnson accepted an athletic scholarship to play at the University of Miami, one of the country's top college football programs. As a college freshman, he was a member of the University of Miami's 1991 national championship team but largely spent his four college football years at the University of Miami in backup roles behind elite players, including future NFL star and Pro Football Hall of Fame inductee Warren Sapp.[11] Johnson aspired to play professional football but went undrafted in the 1995 NFL Draft. Following his graduation from the University of Miami that year, he signed with the Calgary Stampeders of the Canadian Football League but was cut from the team in his first season.[12]</p>
            
    </div>
      <div id={Style.Img}>
      <img src={Virat_Kohli} alt="Virat" />
      </div>
    </div>
  )
}

export default Rock