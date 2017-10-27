const express = require('express')
const authController = express.Router()
const User = require('../models/user')
const jwt = require('jwt-simple')
const passport = require('passport')
const config = require('../configs/auth')

const authenticate = User.authenticate()
authController.post('/login', (req, res, next) => {
  const {
    username,
    password
  } = req.body

  if (username && password) {
    authenticate(username, password, (err, user, failed) => {
      if (err) {
        return next(err)
      }
      if (failed) {
        return res.status(401).json({
          error: failed.message
        })
      }
      if (user) {

        const payload = {
          id: user.id,
        }

        const token = jwt.encode(payload, config.jwtSecret)
        res.json({
          user: {
            username: user.username,
            _id: user._id
          },
          token,
        })
      }
    })
  } else {
    res.sendStatus(401)
  }
})

module.exports = authController