const express = require('express')

const router = express.Router();


// handdle incomming request by sensors 
router.get('/',(req,res,next) =>{
    res.status(200).json({
        message : "sensors data is not  pracent" 
    })
})

router.post('/',(req,res,next) =>{
    res.status(200).json({
        message : "sensors data is pracent" 
    })
})
router.post('/:sensorID',(req,res,next) =>{
    const id = req.params.sensorID;
    if(id > 0) {
        res.status(200).json({
            message : "sensor data is precesent "
        })
    }
    else{
        res.status(200).json({
            message : "chack the sensor id "
        })
    }
})
router.patch('/:sensorID',(req,res,next) =>{
    const id = req.params.sensorID;
    if(id > 0) {
        res.status(200).json({
            message : "update the sensor data  "
        })
    }
    else{
        res.status(200).json({
            message : "chack the sensor id "
        })
    }
})
router.delete('/:sensorID',(req,res,next) =>{
    const id = req.params.sensorID;
    if(id > 0) {
        res.status(200).json({
            message : "delete the sensor data  "
        })
    }
    else{
        res.status(200).json({
            message : "chack the sensor id "
        })
    }
})

module.exports = router