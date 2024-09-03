require('dotenv').config();
const express = require('express')
//const cors = require('cors');
const registration = require('./src/routes/registration');
const login = require('./src/routes/login');


const PORT = process.env.PORT || 3000

const app = express()

//app.use(cors());
app.use(express.json());

app.use('/reg', registration);
app.use('/login', login);



  try{
    app.listen(PORT, () => console.log(`server start ${PORT}`))
  } catch (error) {
    console.log(error)
  }
