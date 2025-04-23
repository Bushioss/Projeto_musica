const express = require('express'); //Api
const cors = require('cors'); //Permite requisições de outros domínios
const db = require('./db'); //Banco de dados

// Iniciando o projeto e permitindo arquivos Json
const app = express();
app.use(cors());
app.use(express.json());

//Musicas

app.post('/api/musicas', (req, res) => {
    const { titulo, artista, album, duracao, url } = req.body;
db.run(`
    INSERT INTO musicas (titulo, artista, album, duracao, url)
    VALUES (?, ?, ?, ?, ?)
`, [titulo, artista, album, duracao, url], (err) => {
    if (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao inserir música' });
    } else {
        res.status(201).json({ message: 'Música inserida com sucesso' });
    }
});
});

app.listen(5500, () => {
    console.log('Servidor rodando na porta 5500');
});