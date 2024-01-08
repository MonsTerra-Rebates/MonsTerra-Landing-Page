import React from 'react'
import NavigationBar from '../components/NavigationBar'
import './ContactUsCss.css'
const Contact = () =>{
    return(
        <>
        <NavigationBar/>
        <div className='contact-us-container'>
            <div className='contact-title-container'>
                Get In Touch
            </div>
            <div className='contact-top-container'>
                <div className='contact-top-contacts-container'>
                    Contacts
                    <div className='contact-module-container'>
                        
                        <div className='module-title'>Email</div>
                        <div className='module-subtitle'>Contact us through our email</div>
                        <div className='module-link'>MonsterraInboxOfficial@gmail.com</div>
                    </div>
                    <div className='contact-module-container'>
                        <div className='module-title'>Phone</div>
                        <div className='module-subtitle'>Give us a call at</div>
                        <div className='module-link'>111-111-1111</div>
                    </div>
                </div>
                <div className='contact-top-socials-container'>
                    Socials
                    <div className='contact-module-container'>
                        <div className='module-title'>LinkedIn</div>
                        <div className='module-subtitle'>Find us on Linkedin</div>
                        <div className='module-link'>linkedin.com/in/placeholder</div>
                    </div>
                    <div className='contact-module-container'>
                        <div className='module-title'>Instagram</div>
                        <div className='module-subtitle'>Find us on Instagram</div>
                        <div className='module-link'>www.instagram.com/MonsTerra</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact