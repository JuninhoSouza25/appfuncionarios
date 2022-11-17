const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const upload = require("multer")();

app.use(require("cors")());
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.json({message: "Tudo ok por aqui"});
})

app.post('/send', upload.single('anexo'), (req, res, next) => {
    const nome = req.body.nome;
    const assunto = req.body.assunto;
    const mensagem = req.body.mensagem;
    const anexo = req.file;
    require("./nodemail")(nome, assunto, mensagem, anexo)
    .then(response => res.json(response))
    .then(error => res.json(error))
})

const server = http.createServer(app);
server.listen(3030);
console.log("Servidor escutando na porta 3030...")