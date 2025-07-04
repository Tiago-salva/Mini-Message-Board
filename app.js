const express = require("express");
const path = require("path");
const { indexRouter } = require("./src/routes/indexRouter");
const newMessageRouter = require("./src/routes/newMessageRouter");
const messageDetailsRouter = require("./src/routes/messageDetailRouter");

const app = express();
const PORT = 3000;
const assetsPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/new", newMessageRouter);
app.use("/message", messageDetailsRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
