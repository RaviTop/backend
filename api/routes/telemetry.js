const bodyParser = require('body-parser');
const express = require('express')
const { createTelemetry,getTelemetry,updateTelemetry,deleteTelemetry,} = require('../models/telemetry.models');

const router = express.Router();


// Create User
router.post('/', async (req, res) => {
    const {edgeid,values } = req.body;
    
    try {
      const data = await createTelemetry(edgeid,values);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
// get user
  router.get('/', async (req, res) => {
    const { edgeid } = req.body
    try {
      const data = await getTelemetry(edgeid);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Update User
  router.put('/', async (req, res) => {
    const {edgeid,values,newValue} = req.body;
    console.log(edgeid,values,newValue)
    try {
      const data = await updateTelemetry(edgeid,values,newValue);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Delete User
  router.delete('/', async (req, res) => {
    const {edgeid,values} = req.body;
    try {
      const data = await deleteTelemetry(edgeid,values);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


module.exports = router