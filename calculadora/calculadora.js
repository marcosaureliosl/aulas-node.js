// calculadora.js
export function calcularExpressao(expressao) {
  const partes = expressao.split(' ').filter(part => part.trim());

  if (partes.length !== 3) {
    console.log('Expressão inválida.');
    return;
  }

  const num1 = parseFloat(partes[0]);
  const operador = partes[1];
  const num2 = parseFloat(partes[2]);

  switch (operador) {
    case '+':
      console.log(num1 + num2);
      break;
    case '-':
      console.log(num1 - num2);
      break;
    case '*':
      console.log(num1 * num2);
      break;
    case '/':
      if (num2 !== 0) {
        console.log(num1 / num2);
      } else {
        console.log('Não é possível dividir por zero.');
      }
      break;
    default:
      console.log('Operador inválido.');
  }
}
