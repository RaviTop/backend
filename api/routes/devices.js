const bodyParser = require('body-parser');
const express = require('express')
const { createDevices,getDevices,updatedevices,deleteDevices} = require('../models/device.models');

const router = express.Router();


// Create User
router.post('/', async (req, res) => {
    const {uuid,deviceName,edgeid } = req.body;
    try {
      const data = await createDevices(uuid,deviceName,edgeid);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
// get user
  router.get('/', async (req, res) => {
    const { uuid } = req.body
    try {
      const data = await getDevices(uuid);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Update User
  router.put('/', async (req, res) => {
    const {uuid,deviceName,edgeid,NewEdgeid} = req.body;
    try {
      const data = await updatedevices(uuid,deviceName,edgeid,NewEdgeid);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Delete User
  router.delete('/', async (req, res) => {
    const {uuid,edgeid } = req.body;
    try {
      const data = await deleteDevices(uuid,edgeid);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


module.exports = router