const pool = require("../db/pool");

async function getAllMessages() {
  const { rows } = await pool.query(`SELECT * FROM messages;`);
  return rows;
}

async function insertMessage({ messageUser, messageText }) {
  await pool.query(
    `INSERT INTO messages (username, text, added)
    VALUES ($1, $2, $3)`,
    [messageUser, messageText, new Date()]
  );
}

async function getMessage(id) {
  const { rows } = await pool.query(
    `SELECT * FROM messages
      WHERE id = $1`,
    [id]
  );
  return rows[0];
}

async function deleteMessage(id) {
  await pool.query(`DELETE FROM messages WHERE id = $1`, [id]);
}

module.exports = {
  getAllMessages,
  insertMessage,
  getMessage,
  deleteMessage,
};
