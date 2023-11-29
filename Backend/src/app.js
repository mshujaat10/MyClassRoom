const express = require('express');
const app = express();
const cors = require('cors');
require('./DB/connect')

app.use(cors());
app.use(express.json());

app.use('/auth', require('./routes/userauth'));
app.use('/classes',require('./routes/classes'));

app.listen('5000',()=>{
    console.log('App Started')
})