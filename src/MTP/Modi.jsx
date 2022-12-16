import React from 'react'
import Style from "./Data.module.css"
import Virat_Kohli from './Img/modi.png'
const Modi = () => {
  return (
    <div id={Style.main}>
      <div id={Style.Par}>
        <h1>Narendra Modi</h1><br />
          <br />
      <p>Narendra Damodardas Modi (Gujarati: [ˈnəɾendɾə dɑmodəɾˈdɑs ˈmodiː] (listen); born 17 September 1950)[b] is an Indian politician serving as the 14th and current prime minister of India since 2014. Modi was the chief minister of Gujarat from 2001 to 2014 and is the Member of Parliament from Varanasi. He is a member of the Bharatiya Janata Party (BJP) and of the Rashtriya Swayamsevak Sangh (RSS), a right-wing Hindu nationalist paramilitary volunteer organisation. He is the longest serving prime minister from outside the Indian National Congress.</p>
      <br />
      <p>Modi was born and raised in Vadnagar in northeastern Gujarat, where he completed his secondary education. He was introduced to the RSS at age eight. He has reminisced about helping out after school at his father's tea stall at the Vadnagar railway station. At age 18, Modi was married to Jashodaben Chimanlal Modi, whom he abandoned soon after. He first publicly acknowledged her as his wife more than four decades later when required to do so by Indian law, but has made no contact with her since. Modi has asserted he had travelled in northern India for two years after leaving his parental home, visiting a number of religious centres, but few details of his travels have emerged. Upon his return to Gujarat in 1971, he became a full-time worker for the RSS. After the state of emergency was declared by prime minister Indira Gandhi in 1975, Modi went into hiding. The RSS assigned him to the BJP in 1985 and he held several positions within the party hierarchy until 2001, rising to the rank of general secretary.[c]</p>
      <br />
      <p>Modi led the BJP in the 2014 general election which gave the party a majority in the lower house of Indian parliament, the Lok Sabha, the first time for any single party since 1984. Modi's administration has tried to raise foreign direct investment in the Indian economy and reduced spending on healthcare, education, and social welfare programmes. Modi centralised power by abolishing the Planning Commission and replacing it with the NITI Aayog. He began a high-profile sanitation campaign, controversially initiated a demonetisation of high-denomination banknotes and a transformation of the taxation regime, and weakened or abolished environmental and labour laws. He oversaw the country's response to the COVID-19 pandemic. As Prime Minister, Modi has received consistently high approval ratings.[12][13][14]</p>  
    </div>
      <div id={Style.Img}>
      <img src={Virat_Kohli} alt="Virat" />
      </div>
    </div>
  )
}

export default Modi