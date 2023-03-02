const calculadora = require('./calculadora')
const avalia = require('./avalia')
const inquirer = require('inquirer')
const fs = require('fs')

inquirer.prompt([
    {
        name: 'nomeAluno',
        message: 'Nome do aluno:'
    },
    {
        name: 't1',
        message: 'Nota do 1o Trabalho: '
    },
    {
        name: 't2',
        message: 'Nota do 2o Trabalho: '
    },
    {
        name: 'p3',
        message: 'Nota da 3o Prova: '
    },
    {
        name: 'p4',
        message: 'Nota da 4o Prova: '
    }
]).then((answers) => {
    console.log(`Sua nota no 1o Trabalho foi: ${answers.t1}`)
    console.log(`Sua nota no 2o Trabalho foi: ${answers.t2}`)
    console.log(`Sua nota na 3a Prova foi: ${answers.p3}`)
    console.log(`Sua nota na 4a Prova foi: ${answers.p4}`)
    let media = calculadora.media(answers.t1, answers.t2, answers.p3, answers.p4)
    console.log(`Sua média foi: ${media}`)
    avalia.mensagem(media)
    fs.writeFileSync(
        `./boletins/${answers.nomeAluno}`,
        {
            nome:answers.nomeAluno,
            trab1:answers.t1,
            trab2:answers.t2,
            prov3:answers.p3,
            prov4:answers.p4,
            media:media
        }
        )
})
.catch((erro) => {console.log('Xiiii deu erro!')})