const express = require("express");
const morgan = require("morgan");
require("dotenv").config({ debug: process.env.DEBUG });
// const cors = require("cors");
const mongoose = require("mongoose")
const methodOverride = require('method-override');
const resumeRoutes = require("./src/routes/resume.route");
// const UserRoutes = require("./base/routes/user/user.route");

const app = express();


// app.use(cors());
app.use(morgan('dev'));

// connect to mongoDB
// (async() => {
//   try {

//     const connectmDB = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true, useFindAndModify: false });

//     if(connectmDB) {
//     console.log(`Connected to DB`);
//     }

//   } catch (err) {
//     console.log(`Failed to connect to DB ${err}`);
//   }
// })();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use("/resume", resumeRoutes);
// app.use("/api", UserRoutes);

app.use( (req, res, next) => {
  let error = new Error("Page Not Found");
  error.status = 404;
  next(error);
});

app.use( (req, res, next) => {
  res.status(error.status || 500).json({
    message: error.message
  });
});

module.exports = app;
