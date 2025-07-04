const { Router } = require("express");
const messageDetailsRouter = Router();
const { messages } = require("./indexRouter");

messageDetailsRouter.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const message = messages.find((msg) => msg.id === id);
  res.render("messageDetail", { message: message });
});

module.exports = messageDetailsRouter;
