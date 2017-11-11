const express = require("express");
const timelineRoute = express.Router();

const User = require("../models/user");
const Entity = require("../models/entity");
const Ticket = require("../models/ticket");

const moment = require("moment");

timelineRoute.get("/", (req, res) => {
  User.find({}, "firstname created_at")
    .sort({ created_at: -1 })
    .exec((err, timeline) => {
      if (err) {
        res.json(err);
      } else {
        res.json(timeline);
      }
    });
});

module.exports = timelineRoute;
