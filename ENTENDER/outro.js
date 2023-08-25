/* Somando os valores de uma matriz */

/* criando a função com o nome soma */
/* 
function somaArray(val1, val2, val3){
let resp = val1+val2+val3;
return resp;
}
let x = somaArray(65,3,236)
console.log("Resposta da soma:" + x) */
/* function mediaNota(val1, val2, val3, val4){
    r = (val1+val2+val3+val4)/4
    return r.toFixed(2);
}
console.log("Sua média é:" + mediaNota(5.5,6.5,8.8,9.5)) */

/* calcular a soma dos números de um array */
/* function somarArray(x){
    let soma = 0;
    for (let a = 0; a<x.lenght; a++){
        soma += x[a];
    }
        return soma; */
    /* while()
       for()
       do while()
       switch()
       case: */
/* } */

/* Passando os valores para o array[] */

/* let pezinho = [23,23,12,12,13,2,3,4,5,6,7]
let resultado = somarArray(pezinho)
console.log('Resultado:' + resultado) */

function mediaArray(x) {
    let soma = 0;

    for (let a = 0; a < x.length; a++){
    soma += x[a];
    }
}
    return soma/x.length
    let azideia = [3.4, 9.4, 3.2, 4.3, 5.9, 8.2]
    let resultado = mediaArray(azideia)
    console.log('Resultado:' + resultado)
    
