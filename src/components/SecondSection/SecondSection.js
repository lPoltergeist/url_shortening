import React from 'react'
import CardBox from './CardBox/CardBox'

import BrandRecognition from '../../images/icon-brand-recognition.svg';
import DetailedRecords from '../../images/icon-detailed-records.svg';
import FullyCustomizable from '../../images/icon-fully-customizable.svg';

import { Section, Card, Title } from './styles'
import ShortlyInput from '../Shortly_Url_Input/ShortlyInput';

const SecondSection = () => {
  return (
    <Section>

      <ShortlyInput />

      <Title>
        <h3>Advanced Statistics</h3>
        <span>Track how your links are performing across the web
          with our advanced statistics dashboard.</span>
      </Title>

      <Card>
        <CardBox Url={BrandRecognition} title={"Brand Recognition"} text={"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."} />
       
        <div class="rectangle"></div>

        <CardBox Url={DetailedRecords} title={"Detailed Records"} text={"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."} />
        
        <div class="rectangle"></div>

        <CardBox Url={FullyCustomizable} title={"Fully Customizable"} text={"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."} />
      </Card>

    </Section>
  )
}

export default SecondSection