import { Conta } from "./conta.js";


export class ContaCorrente extends Conta{
    static numeroDeContas;
    constructor(cliente, agencia){
        super(0, cliente, agencia)
        ContaCorrente.numeroDeContas += 1;
    };

    saque(valor){
        let taxa = 1.1
        return super._saque(valor, taxa);
    };
};