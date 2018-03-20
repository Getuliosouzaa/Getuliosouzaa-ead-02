function calculadora() {

var valor1 = parseInt(prompt( "Informe o primeiro número" ))
var valor2 = parseInt(prompt( "Informe o Segundo número" ))
alert('A + B: '+ somar(valor1, valor2) +'\n' 
+ ( ' A - B' + subtrair (valor1,valor2) +'\n' 
+ ( ' A X B: ' + multiplicacao ( valor1,valor2) + '\n'
+ ( ' A / B: ' + divizao ( valor1,valor2).toFixed(2)))));

}

function somar(a, b ) {
    return a + b;
  }
function subtrair (a,b){
    return a - b;
}
 
function multiplicacao (a,b){
    return a * b;
}
function divizao (a,b){
    return a/b;
}

