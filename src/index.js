import { Cliente } from './Cliente.js';
import {Gerente} from './Funcionario/Gerente.js'
import {Diretor} from './Funcionario/Diretor.js'
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const cliente = new Cliente("Lais", 456897, "456");

const diretor = new Diretor("Rodrigo", 10000, 1234567890);
const gerente = new Gerente("Amanda", 5000, 22244588);

gerente.cadastrarSenha("123")
diretor.cadastrarSenha("123456")

const gerenteLogado = SistemaAutenticacao.login(gerente, "123");
const diretorLogado = SistemaAutenticacao.login(diretor, "123456");
const clienteLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteLogado);
console.log(diretorLogado);
console.log(clienteLogado);
