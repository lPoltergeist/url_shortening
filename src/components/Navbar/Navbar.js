import React from 'react'
import { Header, Nav } from './styles'

import Logo from '../../images/logo.svg'
import Sidebar from './Sidebar/Sidebar'


const Navbar = () => {
    return (
        <Header>
            <Nav>
                <div className="navMenu">

                    <img src={Logo} alt="Shortly Logo" />
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

                </div>

                <div className="LogButtons">
                    <button className="Login">Login</button>
                    <button className="SignUp">Sign Up</button>
                </div>
                
                <Sidebar />
            </Nav>


        </Header>
    )
}

export default Navbar