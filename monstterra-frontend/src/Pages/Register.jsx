import React, { useState, useEffect} from 'react';
import NavigationBar from '../components/NavigationBar'
import './RegisterCss.css';
import axios from "axios"
import emailjs from '@emailjs/browser'

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
    const autoCorrectName = (name) =>{
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    }
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastname] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [confirm, setConfirm] = useState('');
    const [email, setEmail] = useState('');
    const [errlist, setErrList] = useState(["*  email address does not match","*  fill out all mandatory fields","*  fill out all mandatory fields"]);
    const [valid, setValid] = useState(false);
    const [autofill, setAutoFill] = useState('');
    const [phone, setPhone] = useState('')
    const [validPhone, setValidPhone] = useState(false)
    const [errors, setErrors] = useState('')
    const [submitted, setSubmitted] = useState(false)
    //===========================================================

    const axiosPostData = async() =>{
        console.log(`${firstName}|${lastName}|${email}|${phone}`)
        const postData ={
            name: `${autoCorrectName(firstName)} ${autoCorrectName(lastName)}`,
            email: email,
            phone: phone,
        }
        setSubmitted(true);
        await axios.post('http://localhost:4000/register', postData)
        .then(res => setErrors(res.data))
    }

    const emailSend = async() => {
        const FullName = `${autoCorrectName(firstName)} ${autoCorrectName(lastName)}`
        const templateParams = {
          to_email: email,
          to_name: FullName,
          message: 'Thank you for joining MonsTerra! We will email you nearing the launch date of our product! Stay tuned.'
        };
        await emailjs
          .send(
            'service_ep2ahka',
            'template_uisp89h',
            templateParams,
            'sQsFNzDFB62Pqt7nc'
          )
          .then(
            (response) => {
                console.log('Email sent successfully:', response);
            },
            (error) => {
                console.error('Email sending failed:', error);
            }
          );
      };

    const handleSubmit = (event) =>{
        
        event.preventDefault()

        setErrors('')
        axiosPostData()
        emailSend()

    }


    
    //===========================================================
    
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
        const noalpha = phoneNumber.replace(/\D/g, '')

        if (noalpha.length === 10){
            const phoneNum = `(${noalpha.substring(0,3)})-${noalpha.substring(3,6)}-${noalpha.substring(6)}`
            setPhone(phoneNum.replace(/[\(\)\-]/g, ''))
            setValidPhone(true)
            return phoneNum
        }
        setValidPhone(false)
        setPhone('')
        return noalpha
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
          if (!!autofill && !validPhone){
            newErrorList.push("*  Please enter a valid phone number or none at all")
          }
        setErrList(newErrorList);
    }, [firstName,lastName,email,confirm,isChecked,autofill,phone])

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
                            <Checkbox color={'whitesmoke'} paddingTop={'50px'} paddingLeft={'10px'} spacing={'30px'} isChecked={isChecked} onChange={handleCheckboxChange} size={'sm'}>
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
                    <Button colorScheme='teal' width={`${700/1920*100}vw`} height={`${50/1920*100}vw`} fontWeight={'200'} fontSize={'1.25vw'} isDisabled={errlist.length !== 0 || submitted} onClick={handleSubmit}>Finish Registration</Button>
                  
                </Link>
            </div>
            
            <div className='success'>
                {errors}
            </div>
            
        </div>
        </>
    )
}

export default Register