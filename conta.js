// Classe Abstrata
import { Cliente } from "./cliente.js";

export class Conta{

    constructor(SaldoInicial, cliente, agencia){
        if (this.constructor == Conta){
            throw new Error("You do not create a instance from Conta");
        }
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
        let taxa = 1;
        return this._saque(valor, taxa)
    };

    //sobreescrevendo o metodo da classe mãe
    _saque(valor, taxa){
        const valorDoSaque = valor * taxa
        if(this._saldo <= valorDoSaque){
            return
        };
        return this._saldo -= valorDoSaque;
    }

    transferir(valor, contaCorrente){
        var valoSaque = this.saque(valor)
        contaCorrente.deposito(valoSaque)
    }
}