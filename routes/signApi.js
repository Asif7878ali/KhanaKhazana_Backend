const express = require('express')
const signApi = express.Router()
const bcrypt = require('bcryptjs')
const userRegister = require('../schema/userSchema.js')


//Signin Data and Save To MongoDb Database
signApi.post('/registerUsers', async (req, res) => {
  console.log('Node Data Sign', req.body)

  try {
    const { first_name, last_name, email, password, confirm_password } = req.body
    const userExist = await userRegister.findOne({ email: email }).exec()
    if (userExist) {
      return res.status(400).json({ message: 'User already exists' })
    } else {
      //hash Password
      const hashPassword = await bcrypt.hash(password, 5)
      const hashConfirmPassword = await bcrypt.hash(confirm_password, 5)

      let userData = new userRegister();
      userData.first_name = req.body.first_name;
      userData.last_name = req.body.last_name;
      userData.email = req.body.email;
      userData.password = hashPassword;
      userData.confirm_password = hashConfirmPassword;

      const document = await userData.save()
      console.log('MongoDb Data', document)
      res.status(200).json({ message: 'Registration successful' })
    }
  } catch (error) {
    console.warn(error)
    res.status(500).json({ message: 'Internal Server Error' });
  }

})

module.exports = signApi