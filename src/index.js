import express from 'express';
import productRouter from './products.js';
import streamRouter from './stream.js';
import channelRouter from './channel.js';

const PORT = 3000;

const server = express();

server.use(express.json());
server.use('/products/', productRouter);
server.use('/stream/', streamRouter);
server.use('/channel/', channelRouter);

server.post('/login', (req, res) =>{
    console.log("Seu usuario e "+req.body.credenciais.login);
    console.log("Seu usuario e "+req.body.credenciais.senha);
});

server.post('/echo', (req, res) =>{
    console.log(req.body);
    res.send('ok');
});

// server.get('/', (request, response) => {
//    console.log('Página carregada');
//    response.sendFile(path.join(__dirname+'/teste.html'));
// });
// server.get('/', (request, response) => {
//     console.log('Página carregada');
//     const obj = {
//         status: "ok",
//         data: {
//             nome: "Breno",
//             age: "21",
//         }
//     };
//     response.json(obj)
// }); 

server.listen(PORT, () => {
    console.log(`Server on in ${PORT}!`);
});
