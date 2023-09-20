require("dotenv").config();
import express from "express";
import { mongodb } from "./src/helpers/mongodb";
import { routes } from "./src/helpers/routes";
import { handleError } from "./src/helpers/errorResponse";
let app = express();

let port = process.env.APP_PORT || 3000;
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({
    extended: false,
    limit: "50mb",
  })
);

routes(app);
app.use((err, _, res, __) => {
  handleError(err, res);
});

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
