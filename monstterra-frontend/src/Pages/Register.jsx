import React, { useState, useEffect} from 'react';
import NavigationBar from '../components/NavigationBar'
import './RegisterCss.css';
import { Input, 
        Flex,
        ChakraProvider,
        Checkbox,
        CheckboxGroup,
        extendTheme,
        Link,
        Button,
    
    } from '@chakra-ui/react'



const Register = () =>{

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastname] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [confirm, setConfirm] = useState('');
    const [email, setEmail] = useState('');
    const [errlist, setErrList] = useState(["*  email address does not match","*  fill out all mandatory fields","*  fill out all mandatory fields"]);
    const [valid, setValid] = useState(false);
    const [autofill, setAutoFill] = useState('');
    const handleCheckboxChange = () => {        
        setIsChecked(prevState => !prevState); // Toggle the checkbox value safely
      };
    const handleauto = (event) => {
        
        setAutoFill(`${formatPhoneNumber(event.target.value)}`);
    };

    const handlefirst = (event) => {
    setFirstName(event.target.value);
    };
    const handlelast = (event) => {
    setLastname(event.target.value);
    };
    const handleconfirm = (event) => {
    setConfirm(event.target.value);
    };
    
    function formatPhoneNumber(phoneNumber) {
        // Remove non-digit characters from the input
        const cleaned = phoneNumber.replace(/\D/g, '');
      
        // Split the phone number into groups according to the format (123)-456-789
        const match = cleaned.match(/^(\d{3})(\d{0,3})(\d{0,3})$/);
      
        if (match) {
          // Format the phone number using captured groups
          const formattedNumber = `(${match[1]})-${match[2]}-${match[3]}`;
          return formattedNumber.replace(/-+$/, ''); // Remove trailing hyphens
        }
        return phoneNumber.split(')').join('');
      }
    function isValidEmail(email) {
        // Regular expression pattern for validating email addresses
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        return emailRegex.test(email);
    }
    const handleemail = (event) => {
        setEmail(event.target.value);
        
        };

    useEffect(() => {
    
        if (isValidEmail(email)){
            setValid(true);
        }else{
            setValid(false);
        }
        
    }, [email]);

    useEffect(() =>{
        const newErrorList = [];
        if (!(firstName && lastName && email)) {
            newErrorList.push("*  Fill out all mandatory fields");
          }
          if (!(email === confirm)) {
            newErrorList.push("*  Email address does not match");
          }
          if (!isChecked) {
            newErrorList.push("*  Please agree to the Terms Of Service");
          }
        setErrList(newErrorList);
    }, [firstName,lastName,email,confirm,isChecked])

    const theme = extendTheme({
        components: {
          Checkbox: {
            baseStyle: {
              control: {
                bg: "#FCFFDB",
                _checked: {
                  bg: "teal"
                }
              }
            }
          }
        }
      })

    return(
        <>
        <NavigationBar/>
        <div className='register-page-container'>
            <div className='register-title-container'>
                <div className='register-title'>
                    Ready To Join MonsTerra?
                </div>
            </div>
            <div className='register-description-conatiner'>
                <div className='register-description'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                </div>
            </div>


            <div className='first-last-container'>
                <div className='first-container'>First Name <span className='star'>*</span>
                <div className='first-input-container'>
                <Input variant='outline' placeholder='First Name' background={'#DBFFF2'} color={'#0D3241'} height={`${78/1920*100}vw`} borderRadius={'full'} paddingLeft={'25px'} onChange={handlefirst} focusBorderColor='lightgreen' fontSize={'1vw'}/>
                </div>
                </div>
                <div className='last-container'>Last Name <span className='star'>*</span>
                    <div className='last-input-container'>
                    <Input variant='outline' placeholder='Last Name' background={'#DBFFF2'} color={'#0D3241'} height={`${78/1920*100}vw`} borderRadius={'full'} paddingLeft={'25px'} onChange={handlelast} focusBorderColor='lightgreen' fontSize={'1vw'}/>
                    </div>
                </div>
            </div>

            <div className='email-container'>
                <div className='email-first-container'>Email Address <span className='star'>*</span> 
                <div className='email-first-input-container'>
                
                    <Input variant='outline' placeholder='placeholder123@domain.com' background={'#DBFFF2'} color={'#0D3241'} height={`${78/1920*100}vw`} borderRadius={'full'} paddingLeft={'25px'}onChange={handleemail} focusBorderColor='lightgreen' fontSize={'1vw'}/>
                    <span className={`invalid-text-${valid.toString()}`}>Invalid Email!</span>
                </div>
                </div>
                <div className='email-confirm-input-container'>
                <Input variant='outline' placeholder='Confirm Email Address' background={'#DBFFF2'} color={'#0D3241'} height={`${78/1920*100}vw`} borderRadius={'full'} paddingLeft={'25px'}onChange={handleconfirm} className={`confirm-container-${valid.toString()}`} focusBorderColor='lightgreen' fontSize={'1vw'}/>
                </div>
                
            </div>

            <div className='phone-container'>
                <div className='phone-number-container'>Phone Number
                    <div className='phone-input-container'>
                    <Input variant='outline' placeholder='(123)-456-7890' background={'#DBFFF2'} color={'#0D3241'} height={`${78/1920*100}vw`} borderRadius={'full'} paddingLeft={'25px'} onChange={handleauto} className={'phone-input'} focusBorderColor='lightgreen' fontSize={'1vw'} value={autofill}/>
                    </div>
                </div>
            </div>
            <div className='check-tos-container'>
                <ChakraProvider theme={theme}>
                    <Flex backgroundColor="transparent">
                        <CheckboxGroup colorScheme="teal">
                            <Checkbox color={'whitesmoke'} paddingTop={'50px'} paddingLeft={'10px'} size={'lg'} spacing={'30px'} isChecked={isChecked} onChange={handleCheckboxChange}>
                                <span className='checkbox-text'>
                                By checking this box, you agree to the {' '}
                                <Link color='teal.200' href='Register/TOS' >
                                    Terms of Service.  {' '}
                                </Link>
                                <span className='star'>*</span>
                                </span>
                            </Checkbox>
                        </CheckboxGroup>
                    </Flex>
                </ChakraProvider>
            </div>
            <div className='error-list-container'> 
                
                {errlist.map((item) => (
                
                    <div className='error-text'>{item}</div>
                
                ))}
            
            </div>
            <div className='finish-registration-container'>
                <Link href='Register/Confirm'>
                    <Button colorScheme='teal' width={`${700/1920*100}vw`} height={`${50/1920*100}vw`} fontWeight={'200'} fontSize={'1.25vw'} isDisabled={errlist.length !== 0}>Finish Registration</Button>
                </Link>
            </div>

            
        </div>
        </>
    )
}

export default Register