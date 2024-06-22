const express = require('express'); 
// logging packege for request 
const morgan = require('morgan')

//  extracting the incomming data from requestes using body-parser 

const bodyParser = require('body-parser');

//import user and sensor module 
const sensors = require('./api/routes/sensors');
const users = require('./api/routes/users')
// create express object 
const app = express() ;

app.use(morgan('dev'));
// body parser apply for incomming data 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// route which is handdle by the request 
app.use('/sensors',sensors)
app.use('/users',users)

// handling the error 
app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status(404);
    next(error)
})

app.use((error,req,res,next)=>{
    res.status(err.status || 500 )
    res.json({
        error :{
            message : error.message
        }
    })
})

module.exports = app