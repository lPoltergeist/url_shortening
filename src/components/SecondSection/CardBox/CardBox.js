import React from 'react'
import { Box, BoxIcon, Section } from './style'

const CardBox = ({ Url, title, text }) => {
  return (
    <Box>

      <BoxIcon>
        <img src={Url} alt={Url} />
      </BoxIcon>


      <Section>
        <h4>{title}</h4>
        <span>{text}</span>
      </Section>
      
    </Box>
  )
}

export default CardBox


