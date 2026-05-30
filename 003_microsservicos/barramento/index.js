const express = require('express')
const axios = require('axios')

const app = express()
app.use(express.json())

const eventos = []

app.post('/eventos', async (req, res) => {
    const evento = req.body

    eventos.push(evento)

    console.log('Evento recebido no barramento:', evento)

    const destinos = [
        { nome: 'lembretes', url: 'http://localhost:4000/eventos' },
        { nome: 'observacoes', url: 'http://localhost:4001/eventos' },
        { nome: 'consulta', url: 'http://localhost:6000/eventos' },
        { nome: 'classificacao', url: 'http://localhost:7000/eventos' }
    ]

    for (const destino of destinos) {
        try {
            await axios.post(destino.url, evento)
        } catch (error) {
            console.error(`Erro ao enviar evento para ${destino.nome}:`, error.message)
        }
    }

    res.status(200).json({ msg: 'ok' })
})

app.get('/eventos', (req, res) => {
    res.json(eventos)
})

const port = 10000
app.listen(port, () => {
    console.log(`Barramento de eventos. Porta ${port}.`)
})
