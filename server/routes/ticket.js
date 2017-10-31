const express = require("express");
const mongoose = require("mongoose");
const ticketController = express.Router();
const Ticket = require("../models/ticket");
const _ = require("lodash");

ticketController.get("/", (req, res, next) => {
  Ticket.find((err, ticketsList) => {
    if (err) {
      res.json(err);
    } else {
      res.json(ticketsList);
    }
  });
});

ticketController.post("/", (req, res, next) => {
  const ticket = new Ticket({
    start: req.body.start,
    end: req.body.end,
    price: req.body.price,
    date: req.body.date,
    category: req.body.category,
    client: req.body.client
  });
  ticket.save(err => {
    if (err) {
      res.json(err);
    } else {
      res.json({
        message: "New ticket created !"
      });
    }
  });
});

ticketController.get("/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({
      message: "Specified id is not valid"
    });
    return;
  }

  Ticket.findById(req.params.id)
    .then(ticket => {
      res.json(ticket);
    })
    .catch(err => {
      res.json(err);
    });
});

ticketController.patch("/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status.json(400)({
      message: "Specified id is not valid"
    });
    return;
  }

  const updates = _.pick(
    req.body,
    "start",
    "end",
    "price",
    "date",
    "category",
    "client"
  );

  Ticket.findByIdAndUpdate(
    req.params.id,
    { $set: updates },
    { new: true },
    (err, ticket) => {
      if (err) {
        res.json(err);
      } else {
        res.json(ticket);
      }
    }
  );
});

module.exports = ticketController;
