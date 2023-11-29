const mongoose = require('mongoose')

const contactUsFormSchema = new mongoose.Schema({
    first_name :  {
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
    number :  {
      type : Number,
      require : true
    },
    message :  {
      type : String,
      require : true
    }
  })
  const contactUsForm = new mongoose.model('contactUsForm', contactUsFormSchema)
  module.exports = contactUsForm