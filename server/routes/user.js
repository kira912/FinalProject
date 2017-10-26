const express = require('express')
const mongoose = require('mongoose')
const userController = express.Router()
const User = require('../models/user')

userController.get('/', (req, res, next) => {
  User.find().then(userList => {
    res.json(userList)
  }).catch(err => {
    res.json(err)
  })
})

userController.post('/', (req, res) => {
  const user = new User({
    firstName: req.body.firstName
  })

  user.save((err) => {
    if (err) {
      res.json(err)
    } else {
      res.json({
        message: 'New user created'
      })
    }
  })
})

userController.get('/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({
      message: 'Specified id is not valid'
    })
    return
  }

  User.findById(req.params.id).then(user => {
    res.json(user)
  }).catch(err => {
    res.json(err)
  })
})

userController.put('/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status.json(400)({
      message: 'Specified id is not valid'
    })
    return
  }

  const updates = {
    username: req.body.username
  }

  User.findByIdAndUpdate(req.params.id, updates, (err) => {
    if (err) {
      res.json(err)
    } else {
      res.json(updates)
    }
  })
})

userController.delete('/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({
      message: 'Speciefied id is not valid'
    })
    return
  }

  User.remove({
    _id: req.params.id
  }, (err) => {
    if (err) {
      res.json(err)
    } else {
      return res.json({
        message: 'User has been removed'
      })
    }
  })
})
module.exports = userController