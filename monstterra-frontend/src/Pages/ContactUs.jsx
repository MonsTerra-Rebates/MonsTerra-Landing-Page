import React, { useState, useEffect} from 'react';
import NavigationBar from '../components/NavigationBar'
import './ContactUsCss.css'
import { Input , Button} from '@chakra-ui/react'


const Contact = () =>{

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const handleName = (event) => {
        setName(event.target.value);
    };
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleMessage = (event) => {
        setMessage(event.target.value);
    };

    return(
        <>
        <NavigationBar/>
        <div className='contact-us-container'>
            <div className='contact-title-container'>
                Get In Touch
            </div>
            <div className='contact-top-container'>
                <div className='contact-top-contacts-container'>
                    <div className='contacts-text'>Contacts</div>
                    
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
                    <div className='socials-text'>Socials</div>
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

            <div className='contact-interface-container'>
                <div className='contact-interface-title'>Have an Urgent Question?</div>
                <div className='contact-interface-subtitle'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</div>
                <div className='contact-inputs-container'>
                <div className='contact-name-container'>
                    <div className='contact-yourname'>Your Name:</div>
                    <Input variant='outline' placeholder='Full Name' background={'#DBFFF2'} color={'#0D3241'} height={`${60/1920*100}vw`} width = {'40vw'}borderRadius={'full'} paddingLeft={'25px'} onChange={handleName} focusBorderColor='lightgreen' fontSize={'1vw'}/>
                </div>
                <div className='contact-email-container'>
                    <div className='contact-youremail'>Your Email:</div>
                    <Input variant='outline' placeholder='Email Adress' background={'#DBFFF2'} color={'#0D3241'} height={`${60/1920*100}vw`} width = {'40vw'}borderRadius={'full'} paddingLeft={'25px'} onChange={handleEmail} focusBorderColor='lightgreen' fontSize={'1vw'}/>
                </div>
                <div className='contact-message-container'>
                    <div className='contact-message'>Message:</div>
                    <Input variant='outline' placeholder='Message' background={'#DBFFF2'} color={'#0D3241'} height={`${256/1920*100}vw`} width = {'40vw'}borderRadius={'2vw'} paddingLeft={'25px'} onChange={handleMessage} focusBorderColor='lightgreen' fontSize={'1vw'}/>
                </div>
                
                </div>
            </div>
            <div className='send-button-container'>
            <Button colorScheme='teal' width={`${700/1920*100}vw`} height={`${50/1920*100}vw`} fontWeight={'200'} fontSize={'1.25vw'} >Send Message</Button>
            </div>
        </div>
        </>
    )
}

export default Contact