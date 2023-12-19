import React from "react";
import { Show, Hide } from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import './NavigationBarCss.css' 
const NavigationBar = () =>{
    return (
        <div className="navbar-container">
            
            <div className="logo-container">Logo</div>

            <Hide breakpoint='(max-width: 600px)'>
            <div className="redirects-contianer">
            <div>Redirect 1</div>
            <div>Redirect 2</div>
            <div>Redirect 3</div>
            </div>
            </Hide>

            <Show breakpoint='(max-width: 600px)'>
                <div>
                    <HamburgerIcon boxSize={30}/>
                </div>
            </Show >
        </div>
    )
}

export default NavigationBar