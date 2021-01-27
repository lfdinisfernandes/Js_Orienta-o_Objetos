//(import) pra pegar  arqui de onde pra ca (from "./ nome da pasta"
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Luiz Felipe";
cliente1.cpf = 11122233009;

const cliente2 = new Cliente();
cliente2.nome = "Eveline";
cliente2.cpf = 88822233009;

const contaCorretenLuiz = new ContaCorrente();
contaCorretenLuiz.agencia = 1001;
contaCorretenLuiz.cliente = cliente1;
contaCorretenLuiz.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102

contaCorretenLuiz.tranferir(200, conta2)

//const valorSacado = contaCorretenLuiz.sacar(50);
console.log(conta2);
console.log(contaCorretenLuiz);
