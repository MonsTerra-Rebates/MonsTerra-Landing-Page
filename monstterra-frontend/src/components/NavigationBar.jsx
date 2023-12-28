import React, { useState, useEffect , useRef} from 'react';
import { Show, Hide, Divider, Center} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import './NavigationBarCss.css' 
import Drawer0 from "./Drawer";
import Logo from '../assets/MTWireframeLogoUncolored1.png'


const NavigationBar = () =>{
    const [scrollDistance, setScrollDistance] = useState(0);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    setScrollDistance(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className= {scrollDistance > 500 ? "navbar-container-0" : scrollDistance > 1500 ? "navbar-container-2" : scrollDistance > 3000 ? "navbar-container-3":"navbar-container-1" }>
            
            <div className="logo-container">
                <img src={Logo} alt="Logo" className='logo-img'/>
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