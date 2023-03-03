import React from 'react'
import { FooterContainer, FooterNav, SocialMidiaIcons, MenuContainer } from './style'

import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'

import Logo from '../../images/logo.svg'


const Footer = () => {

    const IconSize = "40";


    return (
        <FooterContainer>
            <MenuContainer>


                <FooterNav>

                    <div className="bottomLogo"><img src={Logo} alt="logo" /></div>

                    <ul>
                        <h4>Features</h4>

                        <li>
                            Link Shortening
                        </li>
                        <li>
                            Branded Links
                        </li>
                        <li>
                            Analytics
                        </li>
                    </ul>

                    <ul>
                        <h4>Resources</h4>

                        <li>
                            Blog
                        </li>
                        <li>
                            Developers
                        </li>
                        <li>
                            Support
                        </li>
                    </ul>

                    <ul>
                        <h4>Company</h4>

                        <li>
                            About
                        </li>
                        <li>
                            Our Team
                        </li>
                        <li>
                            Careers
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>

                    <SocialMidiaIcons>

                        <AiFillFacebook className="icon" size={IconSize} />
                        <AiOutlineTwitter className="icon" size={IconSize} />
                        <BsPinterest className="icon" size={IconSize} />
                        <AiOutlineInstagram className="icon" size={IconSize} />

                    </SocialMidiaIcons>
                </FooterNav>


            </MenuContainer>
        </FooterContainer>
    )
}

export default Footer