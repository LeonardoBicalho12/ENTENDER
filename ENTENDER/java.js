let frutas = ['maça', 'banana', 'laranja', 'manga','abacaxi', 'pitaya', 'kiwi', 'pêssego', 'uva', 'goiaba','ameixa','amora']
/* console.table(frutas)
frutas.splice(1,1,'melancia')
console.table(frutas)
let posicao = frutas.indexOf('melancia')
console.log('posição da fruta:'+ posicao) */
let posicao = frutas.indexOf('banana')
console.table(frutas)
frutas.splice(posicao, 2)
console.table(frutas)
console.log("tamanho da matriz:" + frutas.length)