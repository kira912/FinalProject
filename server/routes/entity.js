const express = require('express')
const mongoose = require('mongoose')
// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');
 
// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');
 
// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');

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
      typeEntity: req.body.typeEntity,
      entityAttachment: req.body.entityAttachment,
      enseign: req.body.enseign,
      address: req.body.address,
      telNumber: req.body.telNumber,
      email: req.body.email,
      
      rcs: req.body.rcs,
      tvaIntra: req.body.tvaIntra,
      siren: req.body.siren,
      siret: req.body.siret,
      license: req.body.license,
      financialGuarantees: req.body.financialGuarantees,
      status: req.body.status,
      socialCapital: req.body.socialCapital,
      exerciseDate: req.body.exerciseDate,
      
      bank: req.body.bank,
      addressPostalBank: req.body.addressPostalBank,
      ownerCount: req.body.ownerCount,
      iban: req.body.iban,
      codeBic: req.body.codeBic,
    
      directorEntity: req.body.directorEntity,
      userAttachment: req.body.userAttachment
  })
  console.log(entity)
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
    res.status(400).json({
      message: 'Specified id is not valid'
    })
    return
  }

  Entity.findById(req.params.id).then(entity => {
    res.json(entity)
  }).catch(err => {
    res.json(err)
  })
})

entityController.patch('/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({
      message: 'Specified id is not valid'
    })
    return
  }
  console.log(req.body.telNumber)
  const updates = {
      name: req.body.name,
      typeEntity: req.body.typeEntity,
      entityAttachment: req.body.entityAttachment,
      enseign: req.body.enseign,
      address: req.body.address,
      telNumber: req.body.telNumber,
      email: req.body.email,
      rcs: req.body.rcs,
      tvaIntra: req.body.tvaIntra,
      siren: req.body.siren,
      siret: req.body.siret,
      license: req.body.license,
      financialGuarantees: req.body.financialGuarantees,
      status: req.body.status,
      socialCapital: req.body.socialCapital,
      exerciseDate: req.body.exerciseDate,
      bank: req.body.bank,
      addressPostalBank: req.body.addressPostalBank,
      ownerCount: req.body.ownerCount,
      iban: req.body.iban,
      codeBic: req.body.codeBic,
      directorEntity: req.body.directorEntity,
      userAttachment: req.body.userAttachment
  }
  console.log(updates)
  Entity.findByIdAndUpdate(req.params.id, updates, { new: true }, (err, entity) => {
    if (err) {
      res.json(err)
    } else {
      res.json(entity)
    }
  })
})

entityController.delete('/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({
      message: 'Specified id is not valid'
    })
    return
  }
  Entity.remove({
    _id: req.params.id
  }, (err) => {
    if (err) {
      res.json(err)
      return
    } else {
      return res.json({
        message: 'Entity has been removed'
      })
    }
  })
})


module.exports = entityController