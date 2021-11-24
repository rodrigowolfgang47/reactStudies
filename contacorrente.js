export class ContaCorrente{
    #saldo;

    constructor(agencia, saldo, cliente){
        this.cliente = cliente
        this.agencia = agencia,
        this.#saldo = saldo;
    };
    
    deposito(valor){
        if(valor < 0){
            return
        }
        return this.#saldo =+ valor;
    };

    saque(valor){
        if(this.#saldo <= valor){
            return
        };
        return this.#saldo -= valor;
    };

    transferir(valor, contaCorrente){
        var valoSaque = this.saque(valor)
        contaCorrente.deposito(valoSaque)
    }
    
    get saldo(){
        return this.#saldo
    }
};