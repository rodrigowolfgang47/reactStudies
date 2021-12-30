import { Conta } from "./conta.js"

export class ContaPolpanca extends Conta{
    constructor(SaldoInicial, cliente, agencia){
        super(SaldoInicial, cliente, agencia)
    }

    saque(valor){
        const taxa = 1.02;
        return this._saque(valor,taxa);
    }
}