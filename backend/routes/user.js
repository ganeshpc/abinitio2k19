const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../schemas/user.schema');

router.post('/signup', (req, res) => {
  bcrypt.hash(req.body.password, 10).then(hashPassword => {
    const user = new User({
      email: req.body.email,
      password: hashPassword,
      userInfo: req.body.userInfo
    });
    user.save().then(result => {
      res.status(201).json({
        message: 'User created!!',
        result: result
      });
    }).catch(err => {
      res.status(500).json({
        error: err
      });
    });
  });
});

router.post('/login', (req, res) => {
  let fetchedUser;
  User.findOne({ email: req.body.email }).then(user => {
    fetchedUser = user;
    if (!user) {
      return res.status(404).json({
        message: 'User does not exist'
      });
    }
    return bcrypt.compare(req.body.password, user.password);
  }).then(result => {
    if (!result) {
      return res.status(404).json({
        message: 'Username or Password incorrect'
      });
    }
    const token = jwt.sign(
      {email: fetchedUser.email, userId: fetchedUser._id},
      'secret_this_should_be_longer',
      {expiresIn: '1h'}
    );
    res.status(200).json({
      token: token
    });
  }).catch(err => {
    res.status(404).json({
      message: 'Authorization failed',
      err: err
    });
  });
});

module.exports = router;
