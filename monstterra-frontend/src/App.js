import { useState } from 'react'
import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'


import RootLayout from './layouts/RootLayout'
import HomePage from './Pages/HomePage'
import Register from './Pages/Register'
import Contact from './Pages/ContactUs'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<RootLayout/>}>
      <Route index element = {<HomePage/>}/>
      <Route path = "ContactUs" element = {<Contact/>} />
      <Route path = "Register" element = {<Register/>}/>
    </Route>
  )
)

const App = () => {
  return (
    <ChakraProvider>
      <RouterProvider router = {router}/>
    </ChakraProvider>
  )
}

export default App
