const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.oosvawq.mongodb.net/chatHUB?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((e) => {
    console.log(e.message);
  });
