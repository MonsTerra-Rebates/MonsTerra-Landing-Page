import React, { useState, useEffect } from 'react';
import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Link} from 'react-router-dom'



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
    <>
      <div>
      <RouterProvider router = {router}/>
      </div>
    </>
  )
}

export default App
