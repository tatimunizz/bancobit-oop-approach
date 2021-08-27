import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0;

    set cliente(param) {
        if(param instanceof Cliente) {
            this._cliente = param;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente) {
        ContaCorrente.numeroDeContas += 1;
        this.agencia = agencia;
        this.cliente = cliente;
    }

    sacar(valor){
        if(this._saldo < valor) return;
        this._saldo -= valor;
        return valor;
    }

    depositar(valor){
        if(valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado)
    }
}
