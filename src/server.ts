const express = require('express')
const app = express();
const mongoose = require("mongoose");
const bodyparser = require('body-parser')
const cors = require('cors');

import {registarLogController} from './controller/logController';

app.use(express.json());
app.use(bodyparser.json());
app.use(cors());

app.post('/', registarLogController);

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/consulteme"
    );
    app.listen(5000, () => {
      console.log("Rodando na 5000");
    })
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();

export default app;
