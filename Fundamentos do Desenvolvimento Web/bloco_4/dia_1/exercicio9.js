//programa que retorna true na existência de números impares em alguma das variáveis.


let x = 6;
let y = 2;
let z = 4;
let resultado = false;

if (x % 2 != 0|| y % 2 != 0 || z % 2 != 0) {
  resultado = true;
}

console.log(resultado);