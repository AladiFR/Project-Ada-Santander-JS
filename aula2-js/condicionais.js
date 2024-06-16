const prompt = require('readline-sync')

const idade = Number(prompt.question('Qual eh a sua idade?'))

// const ehMaiorDeIdade = idade >= 18;

// Estrutura condicionais: if/else

if(idade >= 18) {
    console.log('Você eh maior de idade!');
} else {
    console.log('Você eh menor de idade'); 
}

const mediaDoAluno = 6

// Média >= 7 => Aprovado
// Média < 7 e Média >= 5 => Prova Final
// Média < 5 => Reprovado

if(mediaDoAluno >= 7){
    console.log('Aprovado!');
} else if (mediaDoAluno >= 5) {
    console.log('Prova final');
} else {
    console.log('Reprovado');
}


// 1- Preciso ser maior de idade
// 2- Preciso de CNH

const idadeDaPessoa = 18
const temCNH = false

if(idadeDaPessoa >= 18 && temCNH) {
    console.log('Você pode dirigir');
} else {
    console.log('Você não pode dirigir');
}
