const { Router } = require("express");
const {
  getAllMessages,
  createMessageGet,
  createMessagePost,
  messageDetailGet,
  deleteMessage,
} = require("../controllers/messagesController");

const indexRouter = Router();

indexRouter.get("/", getAllMessages);

indexRouter.get("/new", createMessageGet);

indexRouter.post("/new", createMessagePost);

indexRouter.get("/message/:id", messageDetailGet);

indexRouter.get("/delete/:id", deleteMessage);

module.exports = { indexRouter };
