const express = require('express')

const app = express()
app.use(express.json())

const observacoesPorLembrete = {}
let id = 0

app.get('/lembretes/:id/observacoes', (req, res) => {
    const observacoes = observacoesPorLembrete[req.params.id] || []
    res.json(observacoes)
})

app.post('/lembretes/:id/observacoes', (req, res) => {
    id++

    const { texto } = req.body
    const { id: lembreteId } = req.params

    const observacoesDoLembrete = observacoesPorLembrete[lembreteId] || []
    const observacao = {
        id,
        texto
    }

    observacoesDoLembrete.push(observacao)
    observacoesPorLembrete[lembreteId] = observacoesDoLembrete

    res.status(201).json(observacao)
})

const port = 4001
app.listen(port, () => {
    console.log(`Observacoes. Porta ${port}.`)
})
