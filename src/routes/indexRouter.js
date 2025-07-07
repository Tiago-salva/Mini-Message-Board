const { Router } = require("express");
const indexRouter = Router();
const messages = [
  { text: "Hi there!", user: "Amando", added: new Date(), id: 1 },
  { text: "Hello World!", user: "Charles", added: new Date(), id: 2 },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
  res.send("¡Tu app está corriendo en Railway!");
});

indexRouter.post("/new", (req, res) => {
  const { messageText, messageUser } = req.body;
  const newId = messages.length ? messages[messages.length - 1].id + 1 : 1;
  console.log(messageText);
  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date(),
    id: newId,
  });
  res.redirect("/");
});

module.exports = { indexRouter, messages };
