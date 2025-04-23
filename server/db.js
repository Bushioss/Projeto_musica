const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('musicas.db');

//criando a tabela

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS musicas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT NOT NULL,
            artista TEXT NOT NULL,  
            album TEXT NOT NULL,
            duracao INTEGER NOT NULL,
            url TEXT NOT NULL
        )
    `);
});

module.exports = db;