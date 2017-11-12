const express = require("express");
const mongoose = require("mongoose");
const profileController = express.Router();
const User = require("../models/user");
const _ = require("lodash");

profileController.get("/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({
      message: "Specified id is not valid"
    });
    return;
  }

  User.findById(req.params.id)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.json(err);
    });
});

profileController.patch("/:id", (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status.json(400)({
      message: "Specified id is not valid"
    });
    return;
  }

  const updates = _.pick(
    req.body,
    "firstname",
    "lastname",
    "profilePic",
    "civility",
    "nationality",
    "birthDate",
    "telNumber",
    "email",
    "password",
    "address",
    "codePostal",
    "city",
    "country",

    "professionalEmail",
    "professionalNumber",

    "firstnameUrgence",
    "lastnameUrgence",
    "linkUser",
    "telNumberUrgence",
    "emailUrgence",
    "bloodGroup",
    "allergies",

    "bank",
    "addressBank",
    "codePostalBank",
    "cityBank",
    "ownerCount",
    "iban",
    "codeBic"
  );

  User.findByIdAndUpdate(
    req.params.id,
    {
      $set: updates
    },
    {
      new: true
    },
    (err, user) => {
      if (err) {
        res.json(err);
      } else {
        res.json(user);
      }
    }
  );
});
module.exports = profileController;
