const bodyParser = require('body-parser');
const express = require('express')

const router = express.Router();

router.get('/',(req,res,next) =>{
    res.status(200).json({
        message : "list of all users " 
    })
})
router.get('/:userID',(req,res,next) =>{
    const id = req.params.userID 
    if(id > 0)
    {
        res.status(200).json({
        message : "user is pracent " 
       })
    }
})
router.post('/',(req,res,next) =>{
    const user = {
        name : req.body.name,
        password : req.body.password
    }
    res.status(200).json({
        message : "user is created" ,
        creteUser : user  
    })
})
router.delete('/:userID',(req,res,next) =>{
    const id = req.params.userID
    res.status(200).json({
        message : "user is deleted : " + id 
    })
})

module.exports = router