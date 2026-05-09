const express = require('express')
const axios = require('axios')

const app = express()
app.use(express.json())

const lembretes = {}
let id = 0

app.get('/lembretes', (req, res) => {
    res.json(lembretes)
})

app.post('/lembretes', (req, res) => {
    id++

    const { texto } = req.body

    lembretes[id] = {
        id,
        texto
    }

    res.status(201).json(lembretes[id])
})

app.put('/lembretes', async function(req, res) {
    id++;
    const { texto } = req.body;
    lembretes[id] = {
        id,
        texto
    };
    await axios.post('http://localhost:10000/eventos', {
        tipo: 'LembreteCriado',
        dados: {
            id, 
            texto,
        },
    });
    res.status(201).json(lembretes[id]);
});

const port = 4000
app.listen(port, () => {
    console.log(`Lembretes. Porta ${port}.`)
})
