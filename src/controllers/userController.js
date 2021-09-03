const express = require('express');
const { remove } = require('../models/User');

const User = require('../models/User');

const router = express.Router();

router.post('/create', async (req, res) => {
  const { username } = req.body;
  try {

    if (await User.findOne({ username })) {
      return res.status(400).send({ error: 'Username already exists' });
    }
    const user = await User.create(req.body);

    return res.status(200).send({ user });
  } catch (err) {
    return res.status(400).send({ error: 'Registration failed. User not created.' })
  }
});

router.get('/read', async (req, res) => {
  const users = await User.find()
  return res.send({ users })
});

router.delete('/delete/:_id', async (req, res) => {
  const { _id } = req.params;

  try {
    await User.findByIdAndRemove({ _id });

    return res.status(200).send({ message: 'User has been removed' });
  } catch (err) {
    return res.status(400).send({ error: 'Error removing user.' });
  }
});

router.put('/update/:_id', async (req, res) => {

  try {
    const { name, username, password } = req.body;
    const update = new Date()
    const lastAccess = update;

    const user = await User.findByIdAndUpdate(req.params._id, { 
      name, 
      username, 
      password,
      lastAccess
    });

    await user.save();

    return res.status(200).send({ user, message: 'User has been updated' });
  } catch (err) {
    return res.status(400).send({ error: 'Error updating user.' });
  }
});



module.exports = app => app.use('/users', router)