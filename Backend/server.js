const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const { readdirSync } = require('fs');

//app 
const app = express();
port = process.env.PORT || 5000;

//Database connect
const connectDB = require('./config/db');
connectDB();

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json({limit: '6mb'}));
app.use(cors());

//Routes
readdirSync('./routes').map((r)=> {
    app.use(require('./routes/'+r))
    // app.use('/api', require('./routes/'+r))
});


app.listen(port,()=> {
    console.log(`Server running on Port ${port}`)
})