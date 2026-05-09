const express = require('express');
const bodyParser = require('body-parser');

// para enviar eventos para os demais microsserviços
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(express.json());

// definir um endpoint POST/eventos
app.post('/eventos', async function(req, res) {
    // extrai o evento da requisição
    const evento = req.body;
    
    // enviar o evento o microsserviço (lembretes)
    try {
        await axios.post('http://localhost:4000/eventos', evento);
    } catch (error) {
        console.error('Erro ao enviar evento de lembretes:', error);
    }
    // enviar o evento o microsserviço (observações)
    try {
        await axios.post('http://localhost:4001/eventos', evento);
    } catch (error) {
        console.error('Erro ao enviar evento de observacoes:', error);
    }

    res.end();

    // retornar um status 200 para o remetente do evento
    res.status(200).json({ msg: 'ok' });
});

// colocar o barramento de eventos em funcionamento na porta 10000
const port = 10000;
app.listen(port, () => {
    console.log(`Barramento de eventos. Porta ${port}.`);
});