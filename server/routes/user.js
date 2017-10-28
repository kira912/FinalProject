const express = require("express");
const mongoose = require("mongoose");
const userController = express.Router();
const User = require("../models/user");
const _ = require("lodash");

userController.get("/", (req, res, next) => {
  User.find()
    .then(userList => {
      res.json(userList);
    })
    .catch(err => {
      res.json(err);
    });
});

userController.post("/", (req, res) => {
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    civility: req.body.civility,
    nationality: req.body.nationality,
    birthDate: req.body.birthDate,
    telNumber: req.body.telNumber,
    email: req.body.email,
    address: req.body.address,
    codePostal: req.body.codePostal,
    city: req.body.city,
    country: req.body.country,
    entityAttachment: req.body.entityAttachment,
    functionJob: req.body.functionJob,
    contract: req.body.contract,
    annualSalary: req.body.annualSalary,
    entryBusiness: req.body.entryBusiness,
    startActivity: req.body.startActivity,
    endBusiness: req.body.endBusiness,
    professionalEmail: req.body.professionalEmail,
    role: req.body.role
  });

  const password = "ih";

  User.register(user, password, err => {
    if (err) {
      // returns the error
      return res.status(400).json(err.message);
    }
    res.json({
      success: true
    });
  });
});

userController.get("/:id", (req, res) => {
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

userController.patch("/:id", (req, res) => {
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
    "entityAttachment",
    "functionJob",
    "contract",
    "annualSalary",
    "entryBusiness",
    "startActivity",
    "endBusiness",
    "professionalEmail",
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
    "codeBic",

    "role"
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

userController.delete("/:id", (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({
      message: "Speciefied id is not valid"
    });
    return;
  }

  User.remove(
    {
      _id: req.params.id
    },
    err => {
      if (err) {
        res.json(err);
      } else {
        return res.json({
          message: "User has been removed"
        });
      }
    }
  );
});
module.exports = userController;
