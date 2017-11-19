const express = require("express");
const mongoose = require("mongoose");
const moment = require("moment");
const ticketController = express.Router();
const Ticket = require("../models/ticket");
const _ = require("lodash");

ticketController.get("/", (req, res, next) => {
  Ticket.find("ticket created_at")
    .sort({ created_at: -1 })
    .exec((err, tickets) => {
      if (err) {
        res.json(err);
      } else {
        res.json(tickets);
      }
    });
});

ticketController.post("/", (req, res, next) => {
  const ticket = new Ticket({
    seller: req.body.seller,
    geographicalArea: req.body.geographicalArea,
    dateDeparture: req.body.dateDeparture,
    returnDate: req.body.returnDate,
    country: req.body.country,
    typology: req.body.typology,
    suppliers: req.body.suppliers,
    bookingDate: req.body.bookingDate,
    gestourOrder: req.body.gestourOrder,
    businessVolume: req.body.businessVolume,
    insurance: req.body.insurance,

    firstname: req.body.firstname,
    lastname: req.body.lastname,
    customerEmail: req.body.customerEmail,
    mobileClient: req.body.mobileClient,
    numberPax: req.body.numberPax,
    recruitement: req.body.recruitement,
    origin: req.body.origin,
    crmProducts: req.body.crmProducts,
    crmPersonal: req.body.crmPersonal,
    crmOptIn: req.body.crmOptIn,
    remarks: req.body.remarks
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
    "geographicalArea",
    "dateDeparture",
    "returnDate",
    "country",
    "typology",
    "suppliers",
    "bookingDate",
    "gestourOrder",
    "businessVolume",
    "insurance",

    "firstname",
    "lastname",
    "customerEmail",
    "mobileClient",
    "numberPax",
    "recruitement",
    "origin",
    "crmProducts",
    "crmPersonal",
    "crmOptIn",
    "remarks"
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
