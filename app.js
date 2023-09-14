require("dotenv").config();
import express from "express";
import { mongodb } from "./src/helpers/mongodb";
import { routes } from "./src/helpers/routes";
let app = express();

routes(app);

let port = process.env.APP_PORT || 3000;

mongodb()
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(port, () => {
      console.log("We are up and running at " + port);
    });
  })
  .catch((error) => {
    console.log("Failed to connect to mongo database");
    console.log(error.message);
  });
