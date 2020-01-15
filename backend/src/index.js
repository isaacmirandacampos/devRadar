const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://isaacmirandacampos:imcaasi@cluster0-vcwem.mongodb.net/devRadar?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  }
);

app.use(routes);

app.listen(3333);
