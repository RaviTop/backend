const bodyParser = require('body-parser');
const express = require('express')
const { createUser, getUser, updateUser, deleteUser } = require('../models/telemetry.models');

const router = express.Router();


// Create User
router.post('/users', async (req, res) => {
    const {rol, email, password } = req.body;
    try {
      const data = await createUser(rol,email, password);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
// get user
  router.get('/users', async (req, res) => {
    const { email,password } = req.body
    try {
      const data = await getUser(email,password);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Update User
  router.put('/users', async (req, res) => {
    const {uuid,email,password} = req.body;
    try {
      const data = await updateUser(uuid,email,password);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Delete User
  router.delete('/users', async (req, res) => {
    const {uuid , email,password } = req.body;
    try {
      const data = await deleteUser(email);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


module.exports = router