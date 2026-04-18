//promises
// const calculoRapidinho = (n) => {
//     // 1 + 2 + 3 + ... + n = (n/2) * (n + 1)
//     // se n  for maior que zero, retorna a soma, caso contrário, propaga o erro 
//     return n > 0 ? Promise.resolve((n/2) * (n + 1)) : Promise.reject('Erro: n deve ser um número positivo')
// }
// calculoRapidinho(10)
// .then((res) => {
//     calculoRapidinho(res).then(res2 => {
//         calculoRapidinho(res2).then(res3 => {
//             calculoRapidinho(res3).then(res4 => {
//                 console.log(`Resultado: ${res4}`)
//             })
//         })
//     })
// })

// calculoRapidinho(1000)
// .then(function(resultado) {console.log(`Resulatado: ${resultado}`)})
// .catch((erro) => {console.log(`Erro: ${erro}`)})
// // .catch(erro => {console.log(`Erro: ${erro}`)})

// 1 + 2 + 3 + ... + n
// const calculoDemorado = (n) => {
//     let ac = 0
//     for(let i = 1; i<=n; i++){
//         ac += i
//     }
//     return ac
// }
// const res = calculoDemorado(1000)
// console.log(res)    
// console.log('A')

// const calculoDemorado = (n) => {
//     return new Promise((resolve, reject) => {
//         // se n for negativo, propagar um erro, caso contrário, continua como já era 
//         if (n < 0 ){
//             reject('Erro: n deve ser um número positivo')
//         }
//         let ac = 0
//         for (let i = 1; i <= n; i++) {
//             ac += i
//         }
//         resolve(ac)
//     })
// }
// const minhaPromise = calculoDemorado(1000)
// //then/catch
// minhaPromise
// .then((resultado) => {console.log(`Resulatado: ${resultado}`)})
// .catch((erro) => {console.log(`Erro: ${erro}`)})

// console.log('A')


// //JSON: JavaScript Object Notation
// // Uma pessoa que se chama maria, tem 21 anos e mora na Rua B, numero 50
// let pessoa = {
//     nome:'Maria',
//     idade:21,
//     endereco:{
//         logradouro:'Rua B',
//         numero:50
//     }
// }
// // console.log(pessoa)
// console.log(pessoa.endereco.logradouro)
// console.log(pessoa['endereco']['numero'])
// console.log(pessoa.endereco['logradouro'])
// console.log(pessoa['endereco'].numero)

// // Uma pessoa que se chama Joao e tem 17 anos

// let pessoa = {
//     nome: 'Joao',
//     idade: '17'
// }
// console.log(pessoa.nome)
// console.log(pessoa['idade'])

// ================================ //
// ========== CAPITULO 1 ========== //
// ================================ //

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
//     let nome = 'Joao'
//     function g(){
//             console.log(`Meu nome e ${nome} e tenho ${idade} anos`)
//         // g()
//     }
//     // g() // recursão infinita com o g() se chamando
//     return g
// }
// // const res = f() // undefined
// const res = f(17)
// res()

// function f(){
//     let nome = 'Joao'
//     function g(){
//         console.log(nome)
//         // g()
//     }
//     // g() // recursão infinita com o g() se chamando
//     return g
// }
// const res = f()
// res()

// // function f(funcao){
// //     funcao
// // }

// function f(funcao){
//     funcao()
// }

// // function g(){
// //     function outraFuncao(){
// //         console.log('Fui criada por g')
// //     }
// //     return outraFuncao
// // }
// // // g() // nada
// // g() ()
// // g() () () // undefined

// function g(){
//     function outraFuncao(){
//         console.log('Fui criada por g')
//         return () => console.log("A")
//     }
//     return outraFuncao() // retorna oq essa funcao executa 
// }
// // g()                 // Fui criada por g
// // console.log(g() ()) // A

// f(g())

// f(1)    // erro
// const res = g()
// f(res)
// console.log(res)
// let umaFuncao = function(){
//     console.log("Fui armazenada em uma variavel!")
//     return () => 'oi'
// }
// umaFuncao()
// function f(funcao){
//     funcao()
//     console.log(funcao())
// }
// f(umaFuncao)
// // f(umaFuncao())  // Nao retorna nada (undefined) ou retorna "oi", se houver o return 

// // listas betores/arraus/arranjs

// const numeros = [1, 2, 3, 4]
// const res = numeros.reduce((ac, v) => ac + v)
// console.log(res)

// const nomes = ['Ana MAria', 'Antonio', 'Rodrigo', 'Cristina', 'Alex']

// const res = nomes.every(n => n.startsWith("A"))
// console.log(res)
// nomes.some //(algum)

// // [A, A, R, C, A]
// const iniciais = nomes.map(function(nome){return nome.charAt(0)})
// console.log(iniciais)

// const apenasComA = nomes.filter((nome) => {return nome.startsWith('A')})
// // const apenasComa = nomes.filter(nome = >  nome.startsWith('A'))
// console.log(apenasComA)

// const f1 = () => {}
// const f2 = function() {}

// v1 = []
// console.log(v1.length)
// v1[0] = 'abc'
// console.log(v1.length)
// v1[10] = 2.5
// console.log(v1.length)
// console.log(v1)

// for(let i=0; i<v1.length; i++)
//     console.log(v1[i])

// // Funções
// // function e arrow functions

// // Arrow Function
// const falarOi = () => {console.log('Oi')} 
// falarOi()

// // Como tem so um argumento os parenteses podem ser homitidos, assim como as chaves
// const falarOi = nome => {console.log(`Oi, ${nome}`)}
// falarOi(`Maria`)

// const falarOi = nome => console.log(`Oi, ${nome}`)
// falarOi(`Maria`)

// const somar = (a, b) => {return a + b}  // ou a + b,sem os parenteses e sem o return 
// console.log(somar(4, 6))
 
// Function
// function hello(){
//     console.log(`Oi`)
// }
// hello() // ou hello(undefined) Oi, undefined

// // Redefinição e não sobrecarga(que redefine os tipos dos obejtos)
// function hello(nome){
//     console.log(`Oi, ${nome}`)
// }
// hello('Maria')  // Oi, Maria

// function soma(a, b){
//     return a+ b
// }
// const resultado = soma(2,3)
// console.log(resultado)      // 5

// const dobro = function(n){
//     return 2 * n
// }
// console.log(dobro(6))   // 12

// const triplo = function(n = 5){
//     return 3 * n
// }
// console.log(triplo())   // mantem o valor padrao (15)
// console.log(triplo(10)) // usa o valor atibuido (30)

// // List ,Object> v1 = new ArrayLost<>()
// v1 = [10, 3] // nasce com tamanho 2 e está sendo editado
// console.log(v1.length)      // 0
// v1[0] = 2
// console.log(v1.length)      // 1
// v1[1] = 'abc'
// console.log(v1.length)      // 2
// console.log(v1)             // [2, 'abc']

// v1[10] = 'João'
// console.log(v1.length)      // 11
// console.log(v1)             // [ 2, 'abc', <8 empty items>, 'João' ]

// for(let i = 0; 1 < v1.length; i++){
//     console.log(v1[i])      // undefined
// }
    

// // operadores de comparação por igualdade: == e ===
// // NÃO UTILIZAR o == e utilizar o ===
// console.log(1 == 1)     // true
// console.log(1 === 1)    // true

// console.log(1 == '1')   // true (os símbolos são os mesmos ?)
// console.log(1 === '1')  // false (os tipos e os símbolos são iguais ?)

// console.log(1 === 3)    // false

// console.log(true == 1)  // true

// console.log(4 == [4])   // true

// // null = definida e ainda não aponta para ninguem 
// // undefined = não define e não aponta para ninguem
// console.log(null == null)   // true 

// console.log(null == undefined)  // true

// console.log([] == false)    // true
// console.log([] == [])   // false

// // coerção Implícita e explícita
// const n1 = 2
// const n2 = '3'
// const n3  = n1 + n2
// console.log(n3)             // 23
// const n4 = n1 + Number(n2)
// console.log(n4)             // 5

// let a = 2
// console.log(a)
// console.log(typeof(a))
// a = "abr"
// console.log(a)
// console.log(typeof(a))


// // E o var? NÃO USA
// // içamento (hoisting)
// var c = 2
// c = 19
// console.log(c)                  // 19

// var linguagem = "JavaScript"
// console.log(`Aprendendo ` + linguagem)
// var linguagem = "Java"
// console.log(`Aprendendo ${linguagem} agora`)

// var idade = 18
// console.log(`Oi, ${nome}`)
// if(idade >= 18){
//     var nome = "João"
//     console.log("Parabéns, " + nome + ". Você pode dirigir!")
// }
// console.log('Até, ' + nome)


// // Declarando Variáveis 
// let a = 2
// console.log(a)              // 2
// let passouDeAno = true
// console.log(passouDeAno)    // true
// a = 3
// console.log(a)              // 3
// let b
// console.log(b)              // undefined
// b = 1.5
// console.log(b)              // 1.5
// b = "abc"
// console.log(typeof(b))      // String
// console.log(b)              // abc



// // Declararando Constantes 
// // em JavaScript
// const nome = "José"
// console.log(nome)            // José
// // nome = "José da Silva"    // ERRO!!!
// const idade = 17
// console.log(typeof(idade))   // Number

// se fosse Java...
// String nome = "José";
// nome = 1;



// console.log('Hello, World!') // Hello, World!