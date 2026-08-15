const express = require('express')
const axios = require('axios')

const app = express()
app.use(express.json())

const barramentoUrl = process.env.BARRAMENTO_URL || 'http://localhost:10000'

const lembretes = {}
let id = 0

app.get('/lembretes', (req, res) => {
    res.json(lembretes)
})

app.get('/health', (req, res) => {
    res.json({ servico: 'lembretes', status: 'ok' })
})

app.post('/lembretes', async (req, res) => {
    id++

    const { texto } = req.body

    lembretes[id] = {
        id,
        texto
    }

    await axios.post(`${barramentoUrl}/eventos`, {
        tipo: 'LembreteCriado',
        dados: {
            id,
            texto,
        },
    })

    console.log('Lembrete criado:', lembretes[id])

    res.status(201).json(lembretes[id])
})

app.post('/eventos', (req, res) => {
    const evento = req.body

    console.log('Evento recebido em lembretes:', evento)

    res.status(200).json({ msg: 'ok' })
})

const port = 4000
app.listen(port, () => {
    console.log(`Lembretes. Porta ${port}.`)
})
