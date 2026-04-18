// const fatorial = (n) => {
//     if (n <= 0)  
//         return Promise.reject('Valor não pode ser negativo')
//     let res = 1
//     for (let i = 2; i <= n; i++){
//         res *= i
//     }
//     return Promise.resolve(res)
// }

// const chamadaComThenCatch = () => {
//     fatorial(5)
//     .then(res => console.log(`Res: ${res}`))
//     .catch(function(erro){console.log(`Erro: ${erro}`)})

//     fatorial(-5)
//     .then(res => console.log(`Res: ${res}`))
//     .catch(function(erro){console.log(`Erro: ${erro}`)})
// }

// // chamadaComThenCatch()

// const chamadaComAsyncAwait = async () => {
//     try{
//         const f1 = await fatorial(5)
//         console.log(`f1: ${f1}`)
//     }
//     catch(erro){
//         console.log(`Erro: ${erro}`)
//     }

//     try{
//         const f2 = await fatorial(-1)
//         console.log(`f2: ${f2}`)
//     }
//     catch(erro){
//         console.log(`Erro: ${erro}`)
//     }

//     // const f1 = await fatorial(5)
//     // console.log(`f1: ${f1}`)
//     // const f2 = await fatorial(-1)
//     // console.log(`f2: ${f2}`)
    
// } 

// chamadaComAsyncAwait()

// async function hello(nome){
//    return `Olá ${nome}`
// }

// const res = hello('Ana')
// res.then((texto) => console.log(texto))

// console.log("A")


const axios = require('axios')

const appid = 'c9c345d60e91a27d5f1e1bfbd05684b3'
const appid2 = 'ef0b0973b783e0614ac87612ec04344b'

const baseURL = 'https://api.openweathermap.org/data/2.5/forecast'
const q = 'Itu'
const cnt = 1
const units = 'metric'
const lang = 'pt_br'

const url = `${baseURL}?q=${q}&cnt=${cnt}&units=${units}&lang=${lang}&appid=${appid2}`
// axios.get(url)
// .then(res => {
//     console.log(res.data)
//     return res.data
// })
// .then(res => {
//     console.log(res.list)
//     return res.list
// })
// .then (res => {
//     // mostrar temperatura máxima da primeira previsão do tempo
//     console.log(res[0].main.temp_max)
//     return res
// })
// .then(previsoes =>{
//     for(let previsao of previsoes){
//         console.log(previsao.weather[0].description)
//     }
// })
// // .catch(err => console.error(err))
// console.log('A') 

// Conversar com a API de previsão do tempo usando aync/await
const previsaoDoTempo = async () => {
    try{
        const res = await axios.get(url)
        const dados = res.data
        console.log(dados)

        const previsoes = dados.list
        console.log(previsoes)

        // mostrar temperatura máxima da primeira previsão do tempo
        console.log(previsoes[0].main.temp_max)

        for(let previsao of previsoes){
            console.log(previsao.weather[0].description)
        }
    }
    catch(erro){
        console.log(`Erro: ${erro}`)
    }
}

previsaoDoTempo()