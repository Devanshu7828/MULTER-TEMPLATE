require("dotenv").config();
const express = require("express");
const app = express();
const ejs = require("ejs");
const ejsLayouts = require("express-ejs-layouts");
const port = process.env.PORT || 3000;
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors=require("cors");

// show routes
app.use(morgan("dev"));
// DB
require("./database/db");

// middleware
app.use(cors())
// app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json())
app.use(express.json());
app.use(express.static("public"));
app.use('/uploads', express.static(path.join(__dirname,'uploads')))

app.use(ejsLayouts);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Guest MIDDLEWARE
app.use('/',require('./routes/routes'))
// ROUTES




app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
