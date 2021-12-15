import { Conta } from "./conta.js"

export class ContaPolpanca extends Conta{
    constructor(SaldoInicial, cliente, agencia){
        super(SaldoInicial, cliente, agencia)
    }
}