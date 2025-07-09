const db = require("../db/queries");

async function getAllMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Messageboard", messages: messages });
}

function createMessageGet(req, res) {
  res.render("form", { title: "Add a new message" });
}

async function createMessagePost(req, res) {
  const { messageUser, messageText } = req.body;
  await db.insertMessage({ messageUser, messageText });
  res.redirect("/");
}

async function messageDetailGet(req, res) {
  const id = parseInt(req.params.id);
  const message = await db.getMessage(id);
  res.render("messageDetail", { title: "Message Details", message: message });
}

async function deleteMessage(req, res) {
  const id = parseInt(req.params.id);
  await db.deleteMessage(id);
  res.redirect("/");
}

module.exports = {
  getAllMessages,
  createMessageGet,
  createMessagePost,
  messageDetailGet,
  deleteMessage,
};
