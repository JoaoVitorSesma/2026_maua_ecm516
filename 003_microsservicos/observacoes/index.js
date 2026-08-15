const express = require('express')
const axios = require('axios')
const { v4: uuidv4 } = require('uuid')

const app = express()
app.use(express.json())

const observacoesPorLembreteId = {}

const funcoes = {
    ObservacaoClassificada: async (observacao) => {
        const observacoes = observacoesPorLembreteId[observacao.lembreteId] || []
        const obsParaAtualizar = observacoes.find(o => o.id === observacao.id)

        if (!obsParaAtualizar) {
            return
        }

        obsParaAtualizar.status = observacao.status

        await axios.post('http://localhost:10000/eventos', {
            tipo: 'ObservacaoAtualizada',
            dados: {
                id: observacao.id,
                texto: observacao.texto,
                lembreteId: observacao.lembreteId,
                status: observacao.status
            }
        })
    }
}

app.get('/lembretes/:id/observacoes', (req, res) => {
    const observacoes = observacoesPorLembreteId[req.params.id] || []
    res.json(observacoes)
})

app.get('/health', (req, res) => {
    res.json({ servico: 'observacoes', status: 'ok' })
})

const criarObservacao = async (req, res) => {
    const idObs = uuidv4()
    const { texto } = req.body
    const observacoesDoLembrete = observacoesPorLembreteId[req.params.id] || []

    const observacao = {
        id: idObs,
        texto,
        status: 'aguardando'
    }

    observacoesDoLembrete.push(observacao)
    observacoesPorLembreteId[req.params.id] = observacoesDoLembrete

    await axios.post('http://localhost:10000/eventos', {
        tipo: 'ObservacaoCriada',
        dados: {
            id: idObs,
            texto,
            lembreteId: req.params.id,
            status: 'aguardando'
        }
    })

    console.log('Observacao criada:', observacao)

    res.status(201).json(observacao)
}

app.post('/lembretes/:id/observacoes', criarObservacao)
app.put('/lembretes/:id/observacoes', criarObservacao)

app.post('/eventos', async (req, res) => {
    try {
        const evento = req.body
        console.log('Evento recebido em observacoes:', evento)

        if (funcoes[evento.tipo]) {
            await funcoes[evento.tipo](evento.dados)
        }
    } catch (error) {
        console.error('Erro ao processar evento em observacoes:', error.message)
    }

    res.status(200).json({ msg: 'ok' })
})

const port = 4001
app.listen(port, () => {
    console.log(`Observacoes. Porta ${port}.`)
})
