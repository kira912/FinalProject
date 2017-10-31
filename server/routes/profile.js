const express = require("express");
const mongoose = require("mongoose");
const profileController = express.Router();
const User = require("../models/user");

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

module.exports = profileController;
