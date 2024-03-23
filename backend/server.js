const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.urlencoded(
    {extended : true } 
  ));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
    console.log("Connected to port " + process.env.PORT);
});

mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    //console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

mongoose.connection.once("open", () => {
    console.log("Mongo DB Connected...");
});

const Package = require('./routes/package');
app.use('/package', Package);