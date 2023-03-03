import React, { useState, useEffect } from 'react'
import { MenuIconDiv, SidebarContainer, SidebarMenu, ButtonDiv } from './styles';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


const Sidebar = () => {
    const [MenuIsOpen, setMenuIsOpen] = useState(false);

    const IconSize = "30";



    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
    });
    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
        })
    }


    //close sidebar if width > 768px
    useEffect(() => {
        window.addEventListener('resize', setDimension);
        if (screenSize.dynamicWidth > 768) {
            setMenuIsOpen(false);
        }
        return (() => {
            window.removeEventListener('resize', setDimension);

        })
    }, [screenSize, setMenuIsOpen])

    return (
        <>
            <MenuIconDiv onClick={() => setMenuIsOpen(!MenuIsOpen)}>

                {MenuIsOpen ? <AiOutlineClose size={IconSize} /> :
                    <AiOutlineMenu size={IconSize} />}

            </MenuIconDiv>

            {MenuIsOpen &&
                <SidebarContainer>

                    <SidebarMenu>
                        <ul>
                            <li>
                                Features
                            </li>

                            <li>
                                Pricing
                            </li>

                            <li>
                                Resources
                            </li>
                        </ul>

                        <div className="rectangle"> </div>

                        <ButtonDiv>
                            <button className="Login">Login</button>
                            <button className="SignUp">Sign Up</button>
                        </ButtonDiv>

                    </SidebarMenu>
                </SidebarContainer>
            }


        </>
    )
}

export default Sidebar