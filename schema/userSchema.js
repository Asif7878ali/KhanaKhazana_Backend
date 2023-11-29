const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    first_name : {
      type : String,
      require : true
    },
    last_name :  {
      type : String,
      require : true
    },
    email :  {
      type : String,
      require : true
    },
    password :  {
      type : String,
      require : true
    },
    confirm_password:  {
      type : String,
      require : true
    }
  })  

const userRegister = new mongoose.model('userRegister', userSchema)

module.exports = userRegister