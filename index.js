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