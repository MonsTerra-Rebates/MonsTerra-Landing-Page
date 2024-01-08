const express = require('express')
const router = express.Router()
const schemas = require('../models/schemas')

router.post('/register', async(req,res) =>{
    const {name,email,phone} = req.body

    const newUser = new schemas.Users({name: name,email: email,phone: phone,})

    console.log(`user: ${newUser}`)

    try {
        const userEmails = await schemas.Users.find({}, 'email'); // Only fetch 'email' field
        const emails = userEmails.map(user => user.email);
        if (emails.includes(email)){
            res.send('This email already exists.')
        }
        else{
    
            const saveUser = await newUser.save()
    
            if (saveUser){
                res.send('User registration successful. Thank you')
            }
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }

   
    
})

router.get('/emails', async (req, res) => {
    try {
        const userEmails = await schemas.Users.find({}, 'email'); // Only fetch 'email' field

        const emails = userEmails.map(user => user.email);
        res.send(emails);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router