//promises
// const calculoRapidinho = (n) => {
//     return n >= 0 ? Promise.resolve((n / 2) * (n + 1)) : Promise.reject('Apenas valores maiores ou iguais a zero, por favor')
// }

// calculoRapidinho(10)
// .then((res) => {
//     calculoRapidinho(res).then(res2 => {
//         calculoRapidinho(res2).then(res3 => {
//             calculoRapidinho(res3).then(res4 => {
//                 console.log(res4)
//             })
//         })
//     })
// })


// calculoRapidinho(10000)
// .then(function(resultado){console.log('Resultado: ' + resultado)})
// .catch(erro => console.log(`Erro: ${erro}`))

//1 + 2 + 3 + ... + n
// const calculoDemorado = (n) => {
//     let ac = 0
//     for(let i = 1; i <= n; i++)
//         ac += i
//     return ac
// }
// const calculoDemorado = (n) => {
//     return new Promise((resolve, reject) => {
//         //se n for negativo, propagar um erro
//         //caso contrário, continua como já era
//         if (n >= 0){
//             let ac = 0
//             for(let i = 1; i <= n; i++)
//                 ac += i
//             resolve(ac)
//         }
//         else{
//             reject('Apenas valores maiores ou iguais a zero')
//         }
//     })
// }
// const minhaPromise = calculoDemorado(-1000)
// //then/catch
// minhaPromise
// .then((resultado) => { console.log(`Resultado: ${resultado}`)})
// .catch((erro) => { console.log(`Erro: ${erro}`)})

// console.log('A')




















//1 + 2 + 3 + ... + n
//demorando...
// const calculoDemorado = (n) => {
//     let cont = 0
//     for(let i = 1; i <= n; i++)
//         cont += i
//     return cont
// }
// const res = calculoDemorado(1000)
// console.log(res)


// //CPU Bound: predominantemente caracterizada por ciclos de cpu
// //IO Bound: predominantemente caracterizada por operações de entrada e saída
// const fs = require('fs')
// const nomeArquivo = 'arquivo.txt'
// //função callback
// const exibirConteudo = (erro, conteudo) => {
//     console.log("A")
//     if(erro){
//         console.log(`Deu erro: ${erro}`)
//     }
//     else{
//         console.log(`Conteúdo: ${conteudo}`)
//         const dobro = Number(conteudo.toString()) * 2
//         //mais uma função callback
//         const finalizar = (erro) => {
//             console.log(erro ? "Deu erro ao escrever o dobro" : "Ok, escreveu o dobro")
//             console.log('C')
//             const exibirDobro = (erro, conteudo) => {
//                 console.log("E")
//                 console.log(erro ? "Deu erro lendo o dobro": `Dobro: ${conteudo.toString()}`)
//             }
//             fs.readFile('dobro.txt', exibirDobro)
//             console.log('F')
//         }
//         fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//         console.log('D')
//     }
// }
// fs.readFile(nomeArquivo, exibirConteudo)
// console.log("B")
// function demorada(tempo){
//     const dataAtualMaisTempo = new Date().getTime() + tempo
//     while(new Date().getTime() <= dataAtualMaisTempo);
//     const d = 8 + 2 * 6
//     console.log(`Demorada com tempo: ${tempo}`)
//     return d
// }
// setTimeout(() => {
//     demorada(5000)
// }, 5000)

// setTimeout(() => {
//     demorada(1000)
// }, 1000)

// console.log('Fim do script principal')



// setTimeout(() => {
//     console.log("Agendada pela setTimeout")
// }, 0)
// const dataAtualMais5Segundos = new Date().getTime() + 5000
// while(new Date().getTime() <= dataAtualMais5Segundos);
// console.log("Terminando o script principal...")

// const a = 2 + 3
// const b = 6 * 1

// setTimeout(() => {
//     const d = demorada()
//     console.log(`d: ${d}`)
// }, 500)

// const e = a + b * 2
// console.log(`e: ${e}`)
// const a = 5 + 6
// const b = 9 * 4
// console.log(a + b)

// console.log('Eu primeiro...')
// console.log('Agora eu...')
// console.log("Sempre serei a última...:(")


//Uma calculadora realiza as quatro operações fundamentais
//soma: representada por uma arrow function que faz return
//subtração: representa por uma arrow function sem return
//multiplicação: function regular
//divisão: você escolhe
//todas elas operam com dois operandos

// const calculadora = {
//     operacoes: {
//         soma: (a, b) => {return a + b},
//         subtracao: (a, b) => a - b,
//         multiplicacao: function (a, b){
//             return a * b
//         },
//         divisao: (a, b) => a / b
//     }
// }
// console.log(calculadora.operacoes.soma(2, 3))
// console.log(calculadora['operacoes']['subtracao'](4, 5))


//Uma concessionária tem nome, CNPJ e endereço (logradouro, numero e bairro). Ela também seu estoque de veículos. A quantidade de veículos é arbitrária. A qualquer instante, ela pode ter 2 ou 5 ou 17 veículos. Cada veículo modelo, marca e placa.
// const concessionaria = {
//     cnpj: '000000000/0001-12',
//     nome: 'Nome qualquer',
//     endereco: {
//         logradouro: 'Rua A',
//         numero: 12,
//         bairro: {
//             nome: "Vija J",
//         }
//     },
//     estoque: [
//         {
//             modelo: "Ka",
//             marca: "Ford",
//             placa: "ABC-1234"
//         },
//         {
//             modelo: "Fusca",
//             marca: "VW",
//             placa: "ADD-4455"
//         },
//     ]
// }
// console.log(concessionaria.estoque[0].modelo)
// console.log(concessionaria['estoque'][1]['modelo'])





//JSON: JavaScript Object Notation
//Uma pessoa se chama Maria, tem 21 anos e mora na Rua B, número 50
// const pessoa = {
//     nome: 'Maria',
//     idade: 21,
//     endereco: {
//         logradouro: 'Rua B',
//         numero: 50
//     }
// }
// console.log(pessoa.endereco.logradouro)
// console.log(pessoa['endereco']['numero'])
// console.log(pessoa.endereco['logradouro'])
// console.log(pessoa['endereco'].numero)
// console.log(pessoa.endereco)



//Uma pessoa que se chama João e tem 17 anos
// let pessoa = {
//     nome: 'João',
//     idade: 17
// }
// console.log(pessoa.nome)
// console.log(pessoa['idade'])
// const eAgora = () => {
//     let cont = 1
//     const f1 = () => console.log(cont)
//     cont++
//     const f2 = () => console.log(cont)
//     cont++
//     return {f1, f2}
// }
// const res = eAgora()
// res.f1()
// res.f2()

// function f(idade){
//     let nome = 'João'
//     function g(){
//         console.log(`Meu nome é ${nome} e tenho ${idade} anos.`)
//     }
//     return g
// }
// const res = f(17)
// res()

// function f (funcao){
//     funcao()
// }
// function g(){
//     function outraFuncao(){
//         console.log('Fui criada por g')
//         return () => "A"
//     }
//     return outraFuncao()
// }
// f(1)
// const res = g()
// f(res)
// console.log(res())


// let umaFuncao = function(){
//     console.log('Fui armazenada em uma variável')
//     return () => 'oi'
// }

// umaFuncao()
// function f(funcao){
//     console.log(funcao())
// }
// f(umaFuncao())
//listas/vetores/arrays/arranjos
// const numeros = [1, 2, 3, 4]
// const res = numeros.reduce((ac, v) => ac + v)
// // console.log(res)
// const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Cristina', 'Alex']
// const res = nomes.every(n => n.startsWith("A"))
// const res2 = nomes.some(n => n.startsWith("A"))
// console.log(res)
//[A, A, R, C, A]
// const iniciais = nomes.map(function(nome){return nome.charAt(0)})
// console.log(iniciais)
// const apenasComA = nomes.filter(nome => nome.startsWith('A'))
// console.log(apenasComA)


// const f1 = () => {}
// const f2 = function(){}
// v1 = []
// console.log(v1.length)
// v1[0] = 'abc'
// console.log(v1.length)
// v1[10] = 2.5
// console.log(v1.length)
// console.log(v1)
// for(let i = 0; i < v1.length; i++)
//     console.log(v1[i])
// funções
//function e arrow function
// const eAgora = () => {1}
// const somar = (a, b) =>  a + b


// console.log(somar(2, 3))
// const falarOi = nome => console.log(`Oi, ${nome}` )
// falarOi('Maria')
// const falarOi = () => {console.log('oi')}
// falarOi()
// const triplo = function(n = 5){
//   return 3 * n
// }
// console.log(triplo())
// console.log(triplo(10))
// const dobro = function (n){
//   return 2 * n
// }
// console.log(dobro(6))
// function soma(a, b){
//   return a + b
// }
// const resultado = soma(2, 3)
// console.log(resultado)
// function hello(){
//   console.log(`Oi`)
// }
// hello(undefined)
// function hello(nome){
//   console.log(`Oi, ${nome}`)
// }
// hello('Maria')

//coleções
// v1 = [10, 3] // List <Object> v1 = new ArrayList <>();
// console.log(v1.length)
// v1[0] = 2
// console.log(v1.length)
// v1[1] = "abc"
// console.log(v1.length)
// v1[10] = "João"
// console.log(v1.length)
// console.log(v1)
// for(let i = 0; i < v1.length; i++){
//   console.log(v1[i])
// }


//operadores de comparação por igualdade: == e ===
//null e undefined
// console.log([] == [])
// console.log([] == false)
// console.log(null == undefined)
// console.log(null == null)
// console.log(1 == [1])
// console.log(true == 1)
// console.log(1 === 1)
// console.log(1 === '1')
// console.log(1 == '1')
// console.log(1 === 1)
// console.log(1 == 1)

//coerção implícita e explícita
// const n1 = 2
// const n2 = '3'
// const n3 = n1 + n2
// console.log(n3)
// const n4 = n1 + Number(n2)
// console.log(n4)


// matriz = [[], []]

// List  <List <String > > matriz = new ArrayList <ArrayList <String>>();

// a = 2



// a.concat("b")
// console.log(a)
// console.log(typeof(a))
// String a = "abc";
// console.log(a)
// console.log(typeof(a))
//e o var?
//não use
//içamento (hoisting)
// var idade = 18
// console.log(`Oi, ${nome}`)
// if(idade >= 18){
//   let nome = 'João'
//   console.log("Parabéns, " + nome + ". Você pode dirigir")
// }
// console.log('Até, ' + nome)
// var linguagem = 'Javascript'
// console.log('Aprendendo ' + linguagem)
// var linguagem = 'Java'
// console.log(`Aprendendo ${linguagem}`)


// var c = 2
// c = 3
// console.log(c)
//declarando variáveis
// let a = 2
// console.log(a)
// let passouDeAno = true
// console.log(passouDeAno)
// a = 3
// console.log(a)
// let b
// console.log(b)
// b = 1.5
// console.log(typeof(b))
// console.log(b)
// b = "abc"
// console.log(typeof(b))
// console.log(b)


//declarando constantes
//em Javascript
// const nome = 'José'
// console.log(nome)
// // nome = 'José Silva'
// const idade = 17
// console.log(typeof(idade))

//se fosse Java...
// String nome = "José";
//nome = 1;

// console.log('Hello, World')
