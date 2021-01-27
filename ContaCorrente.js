export class ContaCorrente{
    agencia;
    cliente;

    _saldo = 0;
    //#saldo https://github.com/tc39/proposal-class-fields#private-fields

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;   
            return valor;
        }  
    }

    depositar(valor){
        if (valor <= 0){
            return;
        }  
        this._saldo += valor;
            //console.log(this.#saldo)        
    }
    tranferir(valor, conta){
        const valorSacado =this.sacar(valor);
        conta.depositar(valorSacado);
    }
}