const express = require('express')
const contactAPi = express.Router()
const contactUsForm = require('../schema/contactSchema.js')

                  //ContactForm Data Save to MongoDb
 contactAPi.post('/contactUs', async (req, res)=>{
    console.log('Node Data Contact', req.body)

    try {
        let userContact = new contactUsForm();
        userContact.first_name = req.body.first_name;
        userContact.last_name = req.body.last_name;
        userContact.email = req.body.email;
        userContact.number = req.body.number;
        userContact.message = req.body.message;
    
        const document = await userContact.save()
        console.log('MongoDB Data',document)
        res.status(200).send({message: 'Sent Succesful' })
        
    } catch (error) {
        console.warn(error)
        res.status(500).send({message: 'Internal Server Error' })
    }
   
})    

module.exports = contactAPi