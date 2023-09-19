const sqlite3 = require("sqlite3");

const conexaoDB = new sqlite3.Database("./db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Conexão bem-sucedida ao banco de dados SQLite.");
});

module.exports = { conexaoDB };
