const express = require('express')
const axios = require('axios')

const app = express()
app.use(express.json())

const palavraChave = 'importante'

const funcoes = {
    ObservacaoCriada: async (observacao) => {
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
    }
}

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
app.listen(port, () => {
    console.log(`Classificacao. Porta ${port}.`)
})
