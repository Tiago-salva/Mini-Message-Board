const express = require("express");
const path = require("path");
const indexRouter = require("./src/routes/indexRouter");
const newMessageRouter = require("./src/routes/newMessageRouter");

const app = express();
const PORT = 3000;

app.set("views", path.join(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/new", newMessageRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
