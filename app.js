/*************************************************************
 * Objetivo: uma calculadora que realize as 
 * quatro operações matemáticas com dois valores.
 * Data: 30/01/2023
 * Autor: Clara
 * Versão 1.0
 *************************************************************/

console.log('-------Calculadora--------');
//mostrando as opções para calculo
console.log('+ = adição')
console.log('- = subtração')
console.log('* = multiplicação')
console.log('/ = divisão')
console.log('--------------------------\n')
//import da biblioteca para entrada de dados
var readline = require('readline');

//criação um objeto para manipular a entrada de daos via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// função de callback para entrada do primeiro número
entradaDados.question('Digite o primeiro número: \n', function (numero1) {

    let primeiroNumero = Number(numero1);

    //Função de callback para entrada da operação
    entradaDados.question('Digite a operação que deseja realizar: \n', function (operacao) {

        let operacaoMatematica = operacao;

        //Função de callback para entrada do segundo número
        entradaDados.question('Digite o segundo número: \n', function (numero2) {

            let segundoNumero = Number(numero2);
            let calculo = operacaoMatematica;

            let calculoAdicao = primeiroNumero + segundoNumero;
            let calculoSubtracao = primeiroNumero - segundoNumero;
            let calculoMultiplicacao = primeiroNumero * segundoNumero;
            let calculoDivisao = primeiroNumero / segundoNumero;

            if(operacaoMatematica == '+'){
                console.log('Resultado:',calculoAdicao)
            }
            if(operacaoMatematica == '-'){
                console.log('Resultado',calculoSubtracao)
            }
            if(operacaoMatematica == '*'){
                console.log('Resultado:',calculoMultiplicacao)
            }
            if(operacaoMatematica == '/'){
                console.log('Resultado',calculoDivisao)
            }

            //Validação para tratar entradas vazias
            if (primeiroNumero == '' || operacaoMatematica == '' || segundoNumero == '') {
                console.log('ERRO: É necessário digitar algum valor nas entradas');
            } else if (isNaN(primeiroNumero) || isNaN(segundoNumero)) {
                console.log('ERRO: É necessário que dois dados sejam números');
            //} else if(operacaoMatematica != '+' ||operacaoMatematica != '-' ||operacaoMatematica != '*' ||operacaoMatematica != '/' ){
             //   console.log('ERRO: essa operação não está disponível');

            }else{                
                console.log(calculo);
            }
        })
    })
})


