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

userController.post("/", (req, res, next) => {
  const user = new User({
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    civility: req.body.civility,
    nationality: req.body.nationality,
    birthDate: req.body.birthDate,
    telNumber: req.body.telNumber,
    username: req.body.username,
    address: req.body.address,
    codePostal: req.body.codePostal,
    city: req.body.city,
    country: req.body.country,
    entityAttachment: req.body.entityAttachment,
    directorEntity: req.body.directorEntity,
    functionJob: req.body.functionJob,
    contract: req.body.contract,
    annualSalary: req.body.annualSalary,
    entryBusiness: req.body.entryBusiness,
    startActivity: req.body.startActivity,
    endBusiness: req.body.endBusiness,
    professionalEmail: req.body.professionalEmail,
    professionalNumber: req.body.professionalNumber,
    role: req.body.role
  });

  const password = "ih";

  User.register(user, password, err => {
    if (err) {
      // returns the error
      return next(err);
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

    "entityAttachment",
    "directorEntity",
    "functionJob",
    "contract",
    "annualSalary",
    "paidHolidaysIn",
    "paidHolidaysOut",
    "entryBusiness",
    "startActivity",
    "endBusiness",
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

userController.patch("/:id/business", (req, res) => {
  const update = _.pick(req.body, "totalBusiness");
  User.findByIdAndUpdate(
    req.params.id,
    {
      $inc: update
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

userController.patch("/:id", (req, res) => {
  let update = {
    entityAttachment: entityAttachment._id
  };
  User.findByIdAndUpdate(req.params.id)
    .populate("entityAttachment")
    .exec(err, update => {
      if (err) {
        res.json(err);
      } else {
        res.json(update);
      }
    });
});

userController.patch("/:id/ticket/new", (req, res) => {
  const updateTotalTicket = _.pick(req.body, "totalTicket");
  User.findByIdAndUpdate(
    req.params.id,
    {
      $inc: updateTotalTicket
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
