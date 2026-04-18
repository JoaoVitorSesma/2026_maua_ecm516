const express = require('express')
const app = express()
const app.use(express.json()) //middleware
const lembretes = {}
let id = 0
/* 
{
    "1": {
        "id": 1,
        "texto": "Fazer café"
    },
    "2": {
        "id": 2,
        "texto": "Natação"
    }
}
*/
app.get('/lembretes', (req, res) => {
    res.json(lembretes)
})

app.post('/lembretes', (req, res) => {
    // incrementar id
    id++

    // extrair a propriedade texto do corpo da requisição
    const { texto } = req.body

    // cadastrar na base, tal qual mostra o exemplo
    lembretes[id] = {
        id,
        texto
    }

    //responder trocando o status para 201 e, no corpo, incluir o lembrete criado
    res.status(201).json(lembretes[id])
})

const port = 4000
app.listen(port, () => {
    console.log(`Lembretes. Porta ${port}`)
})