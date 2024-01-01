const express = require('express')
const router = express.Router()
const schemas = require('../models/schemas')

router.post('/register', async(req,res) =>{
    const {name,email,phone} = req.body

    const newUser = new schemas.Users({name: name,email: email,phone: phone,})

    console.log(`user: ${newUser}`)

    const saveUser = await newUser.save()

    if (saveUser){
        res.send('User registration successful. Thank you')
    }
    
})

router.get('/users', (req, res) =>{
    const userData = [
        
        {
            'id': 1,
            'firstName': "Ryan",
            'lastName': "Zhu",
            'age': '18',
            'email': 'ryanzhuturtle@gmail.com',
        },
        {
            'id': 1,
            'firstName': "John",
            'lastName': "Doe",
            'age': '22',
            'email': 'exampleemail1@gmail.com',
        }
        
    ]

    res.send(userData) 
})


module.exports = router