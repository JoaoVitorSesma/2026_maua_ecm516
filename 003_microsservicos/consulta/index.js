const express = require("express");
const app = express();
app.use(express.json());

const baseConsulta = {};

const funcoes = {
    "LembreteCriado": (lembrete) => {
        baseConsulta[lembrete.id] = lembrete;
    },
    "ObservacaoCriada": (observacao) => {
        const observacoes = baseConsulta[observacao.lembreteId]["observacoes"] || [];   
        observacoes.push(observacao);
        baseConsulta[observacao.lembreteId]["observacoes"] = observacoes;
    }
}

app.get("/lembretes", (req, res) => {
    res.json(baseConsulta);
});

app.post("/eventos", (req, res) => {
    try{
        const evento = req.body;
        console.log(evento);
        funcoes[evento.tipo](evento.dados);
    } catch (e) {
        console.error('Erro ao processar evento:', e);
    }
    res.status(200).json({ msg: 'ok' });
});

app.listen(6000, () => console.log("Consultas. Porta 6000"));