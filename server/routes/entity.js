const express = require('express')
const entityController = express.Router()
const Entity = require('../models/entity')

entityController.get('/', (req, res, next) => {
  Entity.find((err, entitiesList) => {
    if (err) {
      res.json(err)
      return
    }
    res.json(entitiesList)
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
      return
    }
    res.json({
      message: 'New entity created !',
      id: entity._id
    })
  })
})


module.exports = entityController