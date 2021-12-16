import {ContaCorrente} from './contacorrente.js';
import {Cliente} from './cliente.js';
import { Conta } from './conta.js';

let 
rodrigo = new Cliente('Rodrigo', 'Costa', 45432903806),
thiago = new Cliente('Thiago', 'Vilão', 57210632034),
contaRodrigo = new ContaCorrente(1001, rodrigo),
contaThiago = new ContaCorrente(1002, thiago);

let testeConta = new Conta(10,'Rodrigo', 1001)


contaRodrigo.deposito(500);
contaRodrigo.consultarSaldo()

contaRodrigo.saque(100)
contaRodrigo.consultarSaldo()
