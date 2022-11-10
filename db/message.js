const { Query } = require("./index.js");

/* function all() {
    Query('select * from messages');
} */
const all = () => Query('SELECT * FROM messages');

const one = (username) => Query('Select * from messages where username = ?', [username]);

const insert = (username, message) => Query('insert into messages (username, message) values (?, ?)', [username, message]);

module.exports = {
    all,
    one,
    insert
}