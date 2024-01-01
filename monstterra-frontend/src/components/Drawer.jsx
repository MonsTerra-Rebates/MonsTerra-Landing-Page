import React from 'react'
import {HamburgerIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import './DrawerCss.css'

import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'
function Drawer0() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button onClick={onOpen} colorScheme='whiteAlpha'>
          <HamburgerIcon color={'black'}/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size = "full"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Page Menu</DrawerHeader>
            <DrawerBody>
            <div className="header-redirect-menu">
                    
                    <Link to={'/'}>Home</Link>
                    
                </div>
                <div className="header-redirect-menu">
                    
                    <Link to={'/ContactUs'}>Contact Us!</Link>
                    
                </div>
                <div className="header-redirect-menu">
                    
                    <Link to={'/Register'}>Register</Link>
                    
                </div>
                </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export default Drawer0