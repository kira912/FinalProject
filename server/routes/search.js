const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const User = require("../models/user");

router.get("/user", (req, res, next) => {
  getUser("directeur")
    .then(data => {
      console.log("DATA", data);
      res.json(data);
    })
    .catch(err => {
      console.log("ERROR FETCHING", err);
    });
});

module.exports = router;

function getUser(user) {
  let url = `/search?firstname=${user}`;
  return router
    .get(url)
    .then(response => response.data)
    .catch(err => {
      console.log("ERROR");
    });
}
