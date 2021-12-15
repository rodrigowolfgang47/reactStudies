import {ContaCorrente} from './contacorrente.js';
import {Cliente} from './cliente.js';

let 
rodrigo = new Cliente('Rodrigo', 'Costa', 45432903806),
thiago = new Cliente('Thiago', 'Vilão', 57210632034),
contaRodrigo = new ContaCorrente(1001, rodrigo),
contaThiago = new ContaCorrente(1002, thiago);


contaRodrigo.deposito(1500);
contaRodrigo.transferir(750, contaThiago);


contaRodrigo.consultarSaldo()
contaThiago.consultarSaldo()
