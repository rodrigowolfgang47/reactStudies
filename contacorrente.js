import { Conta } from "./conta.js";


export class ContaCorrente extends Conta{
    static numeroDeContas;
    constructor(cliente, agencia){
        super(0, cliente, agencia)
        ContaCorrente.numeroDeContas += 1;
    };

    saque(valor){
        let taxa = 1.1
        const valorDoSaque = valor * taxa
        if(this._saldo <= valorDoSaque){
            return
        };
        return this._saldo -= valorDoSaque;
    };
};