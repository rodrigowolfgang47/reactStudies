export class Cliente {
    #cpf;
    
    get cpf(){
        return this.#cpf
    }

    constructor(nome, sobreNome, cpf){
        this.nome = nome,
        this.sobrenome = sobreNome,
        this.#cpf = cpf;
    };
};