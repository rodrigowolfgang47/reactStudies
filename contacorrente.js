import { Conta } from "./conta.js";


export class ContaCorrente extends Conta{
    static numeroDeContas;
    constructor(cliente, agencia){
        super(0, cliente, agencia)
        ContaCorrente.numeroDeContas += 1;
    };
};