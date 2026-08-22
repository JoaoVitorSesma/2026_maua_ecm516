const express = require('express')
const axios = require('axios')

const app = express()
app.use(express.json())

const lembretesUrl = process.env.LEMBRETES_URL || 'http://localhost:4000'
const observacoesUrl = process.env.OBSERVACOES_URL || 'http://localhost:4001'
const consultaUrl = process.env.CONSULTA_URL || 'http://localhost:6000'
const classificacaoUrl = process.env.CLASSIFICACAO_URL || 'http://localhost:7000'

const eventos = []

app.post('/eventos', async (req, res) => {
    const evento = req.body

    eventos.push(evento)

    console.log('Evento recebido no barramento:', evento)

    const destinos = [
        { nome: 'lembretes', url: `${lembretesUrl}/eventos` },
        { nome: 'observacoes', url: `${observacoesUrl}/eventos` },
        { nome: 'consulta', url: `${consultaUrl}/eventos` },
        { nome: 'classificacao', url: `${classificacaoUrl}/eventos` }
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

app.get('/health', (req, res) => {
    res.json({ servico: 'barramento', status: 'ok' })
})

const port = 10000
app.listen(port, () => {
    console.log(`Barramento de eventos. Porta ${port}.`)
})
