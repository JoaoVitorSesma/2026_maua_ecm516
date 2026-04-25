const express = require('express')
const { v4: uuidv4 } = require('uuid')

const app = express()
app.use(express.json())

const observacoesPorLembreteId = {}
let id = 0

//: id é um placeholder
// exemplo: /lembretes/12/observacoes
app.get('/lembretes/:id/observacoes', (req, res) => {
    // const observacoes = observacoesPorLembreteId[req.params.id] || []
    // res.json(observacoes)
})

app.post('/lembretes/:id/observacoes', (req, res) => {
    const idObs = uuidv4()
    const { texto } = req.body

    // const { id: lembreteId } = req.params

    const observacoesDoLembrete = observacoesPorLembreteId[req.params.id] || []

    observacoesDoLembrete.push({
        id: idObs,
        texto
    })

    observacoesPorLembreteId[req.params.id] = observacoesDoLembrete

    res.status(201).json(observacao)
})

const port = 4001
app.listen(port, () => {
    console.log(`Observacoes. Porta ${port}.`)
})
