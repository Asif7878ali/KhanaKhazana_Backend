const express = require('express')
const server = express()
require('dotenv').config()
const cors = require('cors');
const bodyParser = require('body-parser');
const databaseConnect = require('./database/connectDatabas.js');
const signAPi = require('./routes/signApi.js')
const logApi = require('./routes/logAPi.js')
const contactApi = require('./routes/contactApi.js')

// Use CORS middleware with options if needed
server.use(cors());
server.use(bodyParser.json());


const port = process.env.PORT

// Signin Data and Save To MongoDB Database
server.use(signAPi);

// ContactForm Data Save to MongoDB
server.use(contactApi);

// Login Data
server.use(logApi);

 databaseConnect().then(() => {
   server.listen(port, () => {
       console.log(`server is running on port ${port}`)
   })
});
