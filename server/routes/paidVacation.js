const express = require("express");
const mongoose = require("mongoose");
const vacationController = express.Router();
const Vacation = require("../models/paidVacation");
const User = require("../models/user");
const _ = require("lodash");

vacationController.get("/", (req, res, next) => {
  Vacation.find()
    .then(vacationList => {
      res.json(vacationList);
    })
    .catch(err => {
      res.json(err);
    });
});

vacationController.get("/:id", (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({
      message: "Specified is not valid"
    });
    return;
  }

  Vacation.findById(req.params.id)
    .then(vacation => {
      res.json(vacation);
    })
    .catch(err => {
      res.json(err);
    });
});

vacationController.post("/", (req, res) => {
  const vacation = new Vacation({
    start: req.body.start,
    end: req.body.end,
    owner: req.body.owner
  });

  vacation.save(err => {
    if (err) {
      res.json(err);
    } else {
      res.json({
        message: "Request for vacation was send"
      });
    }
  });
});

vacationController.patch("/:id", (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({
      message: "Specified id is not valid"
    });
    return;
  }

  const updates = _.pick(req.body, "start", "end", "status");

  Vacation.findByIdAndUpdate(
    req.params.id,
    {
      $set: updates
    },
    {
      new: true
    },
    (err, vacation) => {
      if (err) {
        res.json(err);
      } else {
        res.json(vacation);
      }
    }
  );
});

vacationController.delete("/:id", (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({
      message: "Specified id not valid"
    });
    return;
  }

  Vacation.remove(
    {
      _id: req.params.id
    },
    err => {
      if (err) {
        res.json(err);
      } else {
        return res.json({
          message: "Paid vacation has been removed"
        });
      }
    }
  );
});

module.exports = vacationController;
