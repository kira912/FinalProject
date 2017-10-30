const express = require("express");
const mongoose = require("mongoose");
const ticketController = express.Router();
const Ticket = require("../models/ticket");

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

module.exports = ticketController;
