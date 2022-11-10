const mysql = require("mysql");

const connection = mysql.createPool({
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
});

module.exports.Query = (query, values) => {
    return new Promise((resolve, reject) => {
        connection.query(query, values, (err, results) => {
            if (err) throw err;
            resolve(results);
        });
    });
}

/* async function query(sql, params) {
    const connectionDb = await mysql.createConnection(connection);
    const [results, ] = await connectionDb.execute(sql, params);

    return results;
} */

const message = require("./message.js");

module.exports = { message };