import React from "react";
import { Show, Hide, Divider, Center} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import './NavigationBarCss.css' 
import Drawer0 from "./Drawer";
import Logo from '../assets/MonsTerraWireframeLogo.png'

const NavigationBar = () =>{
    return (
        <div className="navbar-container">
            
            <div className="logo-container">
                <img src={Logo} alt="Logo" />
            </div>
          
            <Hide breakpoint='(max-width: 700px)'>
            <div className="redirects-contianer">

                <div className="header-redirect">
                    
                    <Link to={'/'}>Home</Link>
                    
                </div>
                <div className="header-redirect">
                    
                    <Link to={'/ContactUs'}>Contact Us!</Link>
                    
                </div>
                <div className="header-redirect">
                    
                    <Link to={'/Register'}>Register</Link>
                    
                </div>
                
            </div>
            </Hide>

            <Show breakpoint='(max-width: 700px)'>
                <div className="hamburger-container">
                    <Drawer0/>
                </div>
            </Show >

        </div>
    )
}

export default NavigationBar