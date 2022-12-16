import React from 'react'
import Style from "./Data.module.css"
import Bads from './Img/badshah.png'
const Badshah = () => {
  return (
    <div id={Style.main}>
      <div id={Style.Par}>
        <h1>Badshah (rapper)</h1><br />
          <br />
          <p>Aditya Prateek Singh Sisodia, (born 19 November 1985), known by his stage name Badshah,[1][2][3] is an Indian rapper, singer, film producer and businessman known for his Hindi, Haryanvi, and Punjabi music. He started his career in 2006 alongside Yo Yo Honey Singh in his Hip Hop group Mafia Mundeer. He split from Honey in 2012 and released his independent Haryanvi song Kar Gayi Chull, which was later adopted into the 2016 Bollywood movie, Kapoor & Sons. His music has been featured in Bollywood soundtracks for films such as 2014 films Humpty Sharma Ki Dulhania[4] and Khoobsurat.[5] He is also considered one of the highest-paid artists and also a controversial rapper of India, for his songs like Genda Phool and Pagal.</p>
      <br />
      <p>His debut single, "DJ Waley Babu" featuring Aastha Gill, was ranked number one on the Indian iTunes charts within 24 hours of the release. The song crossed a million views on YouTube within 30 hours.[6] In 2016, he collaborated with Navv Inder on "Wakhra Swag" which won the 2016 Punjabi Music Awards for best duo/group and most popular song of the year award.[7][8] He has appeared in Forbes India's Celebrity 100 in 2017, 2018 and 2019 as one of the highest-paid celebrities in India and as the only rapper in the list.[9]</p>
      <br />
      <p>Ever since 2016, roughly each of his commercial works have been topping charts including the YouTube Music Video Charts, BBC Asian Network Charts, other several Indian radio and Indian streaming charts as well. As of 2020, four of his songs peaked on World Digital Song Sales chart by Billboard.[10][11] His work, "Genda Phool" came out to be commercially one of the most successful yet controversial number in the Indian history.[12]</p>
      <br />
      <p>He completed his schooling from Bal Bharti Public School, Pitampura, Delhi where he performed with his school choir.[14] Prior to becoming a full-time musician he enrolled as a math student at the prestigious Banaras Hindu University in Varanasi before moving to civil engineer at PEC, Chandigarh, where he was exposed to new Punjabi music which promoted him to take on "rap" writing. He has stated that if he had not become a rapper, he may have become an IAS officer.[17][18][19][20]</p>    
    </div>
      <div id={Style.Img}>
      <img src={Bads} alt="Virat" />
      </div>
    </div>
  )
}

export default Badshah