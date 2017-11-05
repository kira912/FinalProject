const express = require("express");
const mongoose = require("mongoose");
const entityController = express.Router();
const Entity = require("../models/entity");
const _ = require("lodash");

entityController.get("/", (req, res, next) => {
  Entity.find((err, entitiesList) => {
    if (err) {
      res.json(err);
    } else {
      res.json(entitiesList);
    }
  });
});

entityController.post("/", (req, res, next) => {
  const entity = new Entity({
    name: req.body.name,
    typeEntity: req.body.typeEntity,
    enseign: req.body.enseign,
    address: req.body.address,
    codePostal: req.body.codePostal,
    city: req.body.city,
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
    addressBank: req.body.addressBank,
    cityBank: req.body.cityBank,
    codePostalBank: req.body.codePostalBank,
    ownerCount: req.body.ownerCount,
    iban: req.body.iban,
    codeBic: req.body.codeBic,

    directorEntity: req.body.directorEntity,
    usersAttachment: req.body.usersAttachment,
    totalBusiness: req.body.totalBusiness
  });
  entity.save(err => {
    if (err) {
      res.json(err);
    } else {
      res.json({
        message: "New entity created !"
      });
    }
  });
});
entityController.get("/:id", (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({
      message: "Specified id is not valid"
    });
    return;
  }

  Entity.findById(req.params.id)
    .then(entity => {
      res.json(entity);
    })
    .catch(err => {
      res.json(err);
    });
});

entityController.patch("/:id", (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({
      message: "Specified id is not valid"
    });
    return;
  }
  const updates = _.pick(
    req.body,
    "name",
    "typeEntity",
    "enseign",
    "address",
    "city",
    "codePostal",
    "telNumber",
    "email",
    "rcs",
    "tvaIntra",
    "siren",
    "siret",
    "license",
    "financialGuarantees",
    "status",
    "socialCapital",
    "exerciseDate",
    "bank",
    "addressBank",
    "cityBank",
    "codePostalBank",
    "ownerCount",
    "iban",
    "codeBic",
    "directorEntity",
    "usersAttachment"
  );

  Entity.findByIdAndUpdate(
    req.params.id,
    {
      $set: updates
    },
    {
      new: true
    },
    (err, entity) => {
      if (err) {
        res.json(err);
      } else {
        res.json(entity);
      }
    }
  );
});

entityController.patch("/:id/business", (req, res) => {
  const update = _.pick(req.body, "totalBusiness");
  Entity.findByIdAndUpdate(
    req.params.id,
    {
      $inc: update
    },
    {
      new: true
    },
    (err, entity) => {
      if (err) {
        res.json(err);
      } else {
        res.json(entity);
      }
    }
  );
});

entityController.delete("/:id", (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({
      message: "Specified id is not valid"
    });
    return;
  }
  Entity.remove(
    {
      _id: req.params.id
    },
    err => {
      if (err) {
        res.json(err);
        return;
      } else {
        return res.json({
          message: "Entity has been removed"
        });
      }
    }
  );
});

module.exports = entityController;
