import { Cliente } from "./cliente.js";

export class Conta{

    constructor(SaldoInicial, cliente, agencia){
        this._saldo = SaldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente
    }

    get saldo(){
        return this._saldo
    }

    consultarSaldo(){
        console.log(this._saldo)
    }
    
    deposito(valor){
        if(valor < 0){
            return
        }
        return this._saldo =+ valor;
    };

    saque(valor){
        if(this._saldo <= valor){
            return
        };
        return this._saldo -= valor;
    };

    transferir(valor, contaCorrente){
        var valoSaque = this.saque(valor)
        contaCorrente.deposito(valoSaque)
    }
}