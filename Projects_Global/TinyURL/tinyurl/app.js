const express = require("express");
const app = express();

app.use(express.static("public"));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const tinyURLController = require("./src/controllers/tinyURLController");

app.get("/:url", tinyURLController.redirectURL);

app.post("/create", tinyURLController.createAlias);

app.listen(4001, function () {
  console.log("Server started running on port 4001");
});
