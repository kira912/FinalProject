const express = require('express')
const mongoose = require('mongoose')
const entityController = express.Router()
const Entity = require('../models/entity')

entityController.get('/', (req, res, next) => {
  Entity.find((err, entitiesList) => {
    if (err) {
      res.json(err)
    } else {
      res.json(entitiesList)
    }
  })
})

entityController.post('/', (req, res, next) => {
  const entity = new Entity({
    name: req.body.name,
    type: req.body.type
  })
  entity.save((err) => {
    if (err) {
      res.json(err)
    } else {
      res.json({
        message: 'New entity created !',
      })
    }
  })
})
entityController.get('/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid'})
    return
  }

  Entity.findById(req.params.id).then(entity => {
    res.json(entity)
  }).catch(err => {
    res.json(err)
  })
})


module.exports = entityController