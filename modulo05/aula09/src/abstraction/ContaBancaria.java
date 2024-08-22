package abstraction;

import java.util.ArrayList;
import java.util.Date;

public class ContaBancaria {

    //Desenvolvam classe ContaBancaria com constructor, getters, setters, depositar, sacar, transferir,
    // exibirExtrato, registrarExtrato
    //validações, exceções, arrayList

    private String numeroConta;
    private String titular;
    private double saldo;
    private String tipoConta;
    private String agencia;
    private String dataAbertura;
    private ArrayList<String> extrato;

    public ContaBancaria(String numeroConta, String titular, double saldo, String tipoConta, String agencia, String dataAbertura){
        this.numeroConta = numeroConta;
        this.titular = titular;
        this.saldo = saldo;
        this.tipoConta = tipoConta;
        this.agencia = agencia;
        this.dataAbertura = dataAbertura;
        this.extrato = new ArrayList<>();
    }

    public String getNumeroConta() {
        return numeroConta;
    }

    public void setNumeroConta(String numeroConta) {
        this.numeroConta = numeroConta;
    }

    public String getTitular() {
        return titular;
    }

    public void setTitular(String titular) {
        this.titular = titular;
    }

    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public String getTipoConta() {
        return tipoConta;
    }

    public void setTipoConta(String tipoConta) {
        this.tipoConta = tipoConta;
    }

    public String getAgencia() {
        return agencia;
    }

    public void setAgencia(String agencia) {
        this.agencia = agencia;
    }

    public String getDataAbertura() {
        return dataAbertura;
    }

    public void setDataAbertura(String dataAbertura) {
        this.dataAbertura = dataAbertura;
    }

    public void depositar(double valor){
        if(valor > 0){
            this.saldo += valor;
            registrarExtrato("Depósito: R$" + valor);
        }
    }

    public boolean sacar(double valor){
        if(valor > 0 && valor <= saldo){
            saldo -= valor;
            registrarExtrato("Saque: R$" + valor);
            return true;
        }
        return false;
    }

    public boolean transferir(ContaBancaria contaDestino, double valor){
        if(sacar(valor)){
            contaDestino.depositar(valor);
            registrarExtrato("Transferência: R$" + valor + " para a conta " + contaDestino.getNumeroConta());
            return true;
        }
        return false;
    }

    public void exibirExtrato(){
        System.out.println("Extrato da conta " + numeroConta + ":");
        for(String registro : extrato){
            System.out.println(registro);
        }
        System.out.println("Saldo atual: R$" + saldo);
    }

    private void registrarExtrato(String transacao){
        extrato.add(new Date() + " - " + transacao);
    }
}
