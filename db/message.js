const { Query } = require("./index.js");

const all = () => Query('SELECT * FROM messages');

const one = (username) => Query('Select * from messages where username = ?', [username]);

const reply = (replyid) => Query('Select * from replies where replyid = ?', [replyid]);

const allReply = () => Query('Select * from replies');

const insert = (username, message) => Query('insert into messages (username, message) values (?, ?)', [username, message]);

const insertReply = (replyid, username, message) => Query('insert into replies (replyid, username, message) values (?, ?, ?)', [replyid, username, message]);

module.exports = {
    all,
    one,
    reply,
    allReply,
    insert,
    insertReply
}