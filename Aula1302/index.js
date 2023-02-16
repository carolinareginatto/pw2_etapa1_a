const calculadora = require("./calculadora")
const avalia = require("./avalia")
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
var aluno = calculadora.media(6, 10, 9, 5)
avalia.mensagem(aluno)