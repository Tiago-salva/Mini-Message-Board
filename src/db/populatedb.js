require("dotenv").config();

const { Client } = require("pg");

const SQL = `CREATE TABLE IF NOT EXISTS messages(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(20),
    text VARCHAR(100),
    added DATE
);

INSERT INTO messages (username, text, added)
VALUES ('Amando', 'Hi there!', NOW()),
       ('Charles', 'Hello world!', NOW());
`;

async function main() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
}

main();
