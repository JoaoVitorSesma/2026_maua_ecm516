const express = require('express')
const axios = require('axios')

const app = express()
app.use(express.json())

const palavraChave = 'importante'
const observacoesClassificadas = new Set()

const funcoes = {
    ObservacaoCriada: async (observacao) => {
        if (observacoesClassificadas.has(observacao.id)) {
            return
        }

        const status = observacao.texto.includes(palavraChave)
            ? 'importante'
            : 'comum'

        await axios.post('http://localhost:10000/eventos', {
            tipo: 'ObservacaoClassificada',
            dados: {
                ...observacao,
                status
            }
        })

        observacoesClassificadas.add(observacao.id)
    },
    ObservacaoClassificada: (observacao) => {
        observacoesClassificadas.add(observacao.id)
    }
}

app.get('/health', (req, res) => {
    res.json({ servico: 'classificacao', status: 'ok' })
})

app.post('/eventos', async (req, res) => {
    try {
        const evento = req.body
        console.log('Evento recebido em classificacao:', evento)

        if (funcoes[evento.tipo]) {
            await funcoes[evento.tipo](evento.dados)
        }
    } catch (error) {
        console.error('Erro ao processar evento em classificacao:', error.message)
    }

    res.status(200).json({ msg: 'ok' })
})

const port = 7000
app.listen(port, async () => {
    console.log(`Classificacao. Porta ${port}.`)

    try {
        const { data } = await axios.get('http://localhost:10000/eventos')

        data
            .filter(evento => evento.tipo === 'ObservacaoClassificada')
            .forEach(evento => funcoes.ObservacaoClassificada(evento.dados))

        for (const evento of data) {
            if (evento.tipo === 'ObservacaoCriada') {
                await funcoes.ObservacaoCriada(evento.dados)
            }
        }
    } catch (error) {
        console.error('Erro ao buscar eventos do barramento em classificacao:', error.message)
    }
})
