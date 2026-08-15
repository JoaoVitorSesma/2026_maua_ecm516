const express = require('express')
const axios = require('axios')

const app = express()
app.use(express.json())

const servicos = [
    { nome: 'barramento',    url: 'http://localhost:10000/health' },
    { nome: 'lembretes',     url: 'http://localhost:4000/health' },
    { nome: 'observacoes',   url: 'http://localhost:4001/health' },
    { nome: 'consulta',      url: 'http://localhost:6000/health' },
    { nome: 'classificacao', url: 'http://localhost:7000/health' }
]

app.get('/health', (req, res) => {
    res.json({ servico: 'monitoramento', status: 'ok' })
})

app.get('/monitoramento', async (req, res) => {
    const resultados = await Promise.all(servicos.map(async (servico) => {
        const inicio = Date.now()

        try {
            const resposta = await axios.get(servico.url, { timeout: 1000 })

            return {
                nome: servico.nome,
                operante: true,
                statusCode: resposta.status,
                tempoRespostaMs: Date.now() - inicio
            }
        } catch (error) {
            return {
                nome: servico.nome,
                operante: false,
                statusCode: error.response?.status,
                tempoRespostaMs: Date.now() - inicio,
                erro: error.message
            }
        }
    }))

    const statusGeral = resultados.every(resultado => resultado.operante)
        ? 'ok'
        : 'degradado'

    res.json({
        statusGeral,
        servicos: resultados
    })
})

const port = 8000
app.listen(port, () => {
    console.log(`Monitoramento. Porta ${port}.`)
})