const express = require('express')
const axios = require('axios')

const app = express()
app.use(express.json())

const barramentoUrl = process.env.BARRAMENTO_URL || 'http://localhost:10000'

const baseConsulta = {}

const funcoes = {
    LembreteCriado: (lembrete) => {
        baseConsulta[lembrete.id] = lembrete
    },
    ObservacaoCriada: (observacao) => {
        if (!baseConsulta[observacao.lembreteId]) {
            baseConsulta[observacao.lembreteId] = {
                id: observacao.lembreteId,
                texto: '',
                observacoes: []
            }
        }

        const observacoes = baseConsulta[observacao.lembreteId].observacoes || []
        observacoes.push(observacao)
        baseConsulta[observacao.lembreteId].observacoes = observacoes
    },
    ObservacaoAtualizada: (observacao) => {
        const lembrete = baseConsulta[observacao.lembreteId]

        if (!lembrete || !lembrete.observacoes) {
            return
        }

        const indice = lembrete.observacoes.findIndex(o => o.id === observacao.id)

        if (indice >= 0) {
            lembrete.observacoes[indice] = observacao
        }
    }
}

app.get('/lembretes', (req, res) => {
    res.json(baseConsulta)
})

app.get('/health', (req, res) => {
    res.json({ servico: 'consulta', status: 'ok' })
})

app.post('/eventos', (req, res) => {
    try {
        const evento = req.body
        console.log('Evento recebido em consulta:', evento)

        if (funcoes[evento.tipo]) {
            funcoes[evento.tipo](evento.dados)
        }
    } catch (error) {
        console.error('Erro ao processar evento em consulta:', error.message)
    }

    res.status(200).json({ msg: 'ok' })
})

const port = 6000
app.listen(port, async () => {
    console.log('Consultas. Porta', port)

    try {
        const { data } = await axios.get(`${barramentoUrl}/eventos`)

        data.forEach((evento) => {
            if (funcoes[evento.tipo]) {
                funcoes[evento.tipo](evento.dados)
            }
        })
    } catch (error) {
        console.error('Erro ao buscar eventos do barramento:', error.message)
    }
})
