import { Cliente } from "./cliente.js";

export class ContaCorrente{

    static numeroDeContas = 0
    #saldo = 0;
    #cliente;

    constructor(agencia, saldo, cliente){
        this.#cliente = cliente,
        this.agencia = agencia,
        this.#saldo = saldo;
        ContaCorrente.numeroDeContas += 1;
    };

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this.#cliente = novoValor;
        }
    }

    get cliente(){
        return this.#cliente
    }

    get saldo(){
        return this.#saldo
    }
    
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
};