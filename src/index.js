const express = require('express');
const path = require('path');

const PORT = 3000;

const server = express();

server.use(express.json())

server.post('/login', (req, res) =>{
    console.log("Seu usuario e "+req.body.credenciais.login)
    console.log("Seu usuario e "+req.body.credenciais.senha)
});

server.post('/echo', (req, res) =>{
    console.log(req.body);
    res.send('ok');
});

server.get('/', (request, response) => {
   console.log('Página carregada');
   response.sendFile(path.join(__dirname+'/teste.html'));
});

/* server.get('/', (request, response) => {
    console.log('Página carregada');
    const obj = {
        status: "ok",
        data: {
            nome: "Breno",
            age: "21",
        }
    };
    response.json(obj)
}); */

server.listen(PORT, () => {
    console.log(`Server on in ${PORT}!`);
});
