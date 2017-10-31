const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const User = require("./models/user");
const config = require("./configs/auth");
const history = require("express-history-api-fallback");
const { Strategy, ExtractJwt } = require("passport-jwt");

mongoose.connect("mongodb://localhost/intranetData", {
  useMongoClient: true
});

const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

if (app.get("env") === "development") {
  app.use(
    cors({
      origin: "http://localhost:8080"
    })
  );
}
app.use(passport.initialize());
const strategy = new Strategy(
  {
    // this is a config we pass to the strategy
    // it needs to secret to decrypt the payload of the
    // token.
    secretOrKey: config.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  },
  (payload, done) => {
    console.log("fd:)");
    User.findById(payload.id).then(user => {
      if (user) {
        done(null, user);
      } else {
        done(new Error("User not found"));
      }
    });
  }
);

//tell passport to use it
passport.use(strategy);

const authRoute = require("./routes/auth");
const entityRoute = require("./routes/entity");
const userRoute = require("./routes/user");
const ticketRoute = require("./routes/ticket");
const profileRoute = require("./routes/profile");
app.use(
  "/api",
  /* passport.authenticate("jwt", config.jwtSession), */ authRoute
);
app.use("/api/entities", entityRoute);
app.use("/api/users", userRoute);
app.use("/api/tickets", ticketRoute);
app.use("api/users", profileRoute);

app.get(
  "/api/secret",
  passport.authenticate("jwt", config.jwtSession),
  (req, res) => {
    res.json(req.user);
  }
);

const clientRoot = path.join(__dirname, "../client/dist");
app.use("/", express.static(clientRoot));
app.use(
  history("index.html", {
    root: clientRoot
  })
);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  // return the error message only in development mode
  res.json({
    error: req.app.get("env") === "development" ? err : {}
  });
});

module.exports = app;
