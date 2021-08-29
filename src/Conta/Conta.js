import {Cliente} from "./Cliente.js";
//classe abstrata
export class Conta {

    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor === Conta) throw new Error("Não deve instanciar um objeto do tipo Conta, pos essa é uma classe abstrata");

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

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

    sacar(valor){
        throw new Error("O método Sacar da Conta é abstrato. Deve ser sobrescrito definindo uma taxa e chamando o método _sacar(taxa, valor)");
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;

        if(this._saldo < valorSacado) return 0;
        this._saldo -= valorSacado;
        return valorSacado;
    }

    depositar(valor){
        if(valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
