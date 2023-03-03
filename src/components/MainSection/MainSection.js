import React from 'react'
import { Section, SectionImage, SectionText } from './style'

import MainImg from '../../images/illustration-working.svg'

const MainSection = () => {
    return (
        <Section>
            <SectionText>
                <h1>More than just shorter links</h1>
                <span>
                    Build your brand's recognition and got detailed
                    insights on how your links are performing
                </span>

                <div>

                    <button className="SignUp">Get Started</button>

                </div>
            </SectionText>

            <SectionImage>
                <img src={MainImg} alt="MainSectionImage" />
            </SectionImage>

        </Section>
    )
}

export default MainSection