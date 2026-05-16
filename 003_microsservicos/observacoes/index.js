const express = require('express')
const axios = require('axios')
const { v4: uuidv4 } = require('uuid')

const app = express()
app.use(express.json())

const observacoesPorLembreteId = {}
let id = 0

//: id é um placeholder
// exemplo: /lembretes/12/observacoes
app.get('/lembretes/:id/observacoes', (req, res) => {
    const observacoes = observacoesPorLembreteId[req.params.id] || []
    res.json(observacoes)
})

app.post('/lembretes/:id/observacoes', async (req, res) => {
    const idObs = uuidv4()
    const { texto } = req.body

    // const { id: lembreteId } = req.params

    const observacoesDoLembrete = observacoesPorLembreteId[req.params.id] || []

    const observacao = {
        id: idObs,
        texto
    }

    observacoesDoLembrete.push(observacao)

    observacoesPorLembreteId[req.params.id] = observacoesDoLembrete

    await axios.post('http://localhost:10000/eventos', {
        tipo: 'ObservacaoCriada',
        dados: {
            id: idObs, 
            texto,
            lembreteId: req.params.id,
        },
    })

    console.log('Observacao criada:', observacao)

    res.status(201).json(observacao)
})

app.post('/eventos', (req, res) => {
    const evento = req.body

    console.log('Evento recebido em observacoes:', evento)

    res.status(200).json({ msg: 'ok' })
})

const port = 4001
app.listen(port, () => {
    console.log(`Observacoes. Porta ${port}.`)
})
