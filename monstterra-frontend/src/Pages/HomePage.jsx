
import NavigationBar from '../components/NavigationBar'
import './HomePageCss.css'

import { Link , LinkProps , Text, Button, Divider, Box, AbsoluteCenter} from '@chakra-ui/react'
import ImgPanel from '../components/ImgPanel';
import Footer from '../components/Footer';
const HomePage = () =>{
    return(
        <>
        <NavigationBar/>
        <div className='homepage-container'>
            <div className='title-description-container'>
                <div className='title'>
                Welcome To MonsTerra
                </div>
                <div className='title-description'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                </div>
            </div>

            <div className='join-container'>
                <div className='join-title'>Join Us!</div>
                <div className='join-text'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. {' '}
                    <Link color='teal.200' href='Register'>
                        Join now by clicking here!
                    </Link>
                    
                </div>
                <div className='join-button'>
                        <Link href='Register'>
                            <Button colorScheme='teal' width={`${300/1920*100}vw`} height={`${50/1920*100}vw`} fontWeight={'200'} fontSize={'1.25vw'}>Register With Email</Button>
                        </Link>
                    </div>
            </div>
            <div className='contact-container'>
                <div className='contact-title'>Contact Us!</div>
                <div className='contact-text'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. {' '}
                    <Link color='teal.200' href='ContactUs'>
                        Contact us here.
                    </Link>
                </div>
            </div>
            <div className='meet-container'>
                <div className='meet-title'>
                    Meet The Creators
                </div>
                
                <ImgPanel/>
            </div>
            
            
            
        </div>
        <Footer/>
        </>
    )
}

export default HomePage