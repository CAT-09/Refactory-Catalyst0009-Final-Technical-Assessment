const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");
const studentsModel = require("./Masambu_Emmanuel/studentReg/models/studentForm");
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
});

const router = express.Router();

const studentRoutes = require("./Masambu_Emmanuel/studentReg/routes/studentRoutes");
const { route } = require("./Masambu_Emmanuel/studentReg/routes/studentRoutes");

require("dotenv").config();

// Installations
const app = express();
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
});
mongoose.connection
  .on("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.log(`Connection error: ${err.message}`);
  });

// Middleware
app.use(express.urlencoded({ extended: true })); // Bodyparser middleware
app.use(express.static(path.join(__dirname, "public")));


app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());


// passport.use(studentsModel.createStrategy());
// passport.serializeUser(studentsModel.serializeUser());
// passport.deserializeUser(studentsModel.deserializeUser());

// Configs or settings
app.set("./Masambu_Emmanuel/studentReg/views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Masambu_Emmanuel/studentReg/views/index.html");
});



app.use("/studentinfo", studentRoutes);



// Always at the bottom
app.get("*", (req, res) => {
  res.status(400).send("Page does not exist");
}); // Modern functions

// Server
app.listen(5000, function () {
  console.log("listening on 5000");
}); // Old function style
