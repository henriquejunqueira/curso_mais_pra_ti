package queue;

import java.util.List;

public class Atendimento {

    private Node primeiroElemento;
    private Node ultimoElemento;

    public Atendimento(){
        this.primeiroElemento = null;
        this.ultimoElemento = null;
    }

    private static class Node{
        String dados;
        Node proximo;

        public Node(String dados){
            this.dados = dados;
            this.proximo = null;
        }
    }

    public Atendimento(List<String> clientes){
        for (String cliente : clientes) {
            enfileirar(cliente);
        }
    }

    public void enfileirar(String dados){
        Node novoNo = new Node(dados);

        if(this.ultimoElemento == null){
            this.primeiroElemento = novoNo;
            this.ultimoElemento = novoNo;
        }else{
            this.ultimoElemento.proximo = novoNo;
            this.ultimoElemento = novoNo;
        }
    }

    public String desenfilerar(){
        if(this.primeiroElemento == null){
            throw new IllegalStateException("Fila vazia!");
        }

        String dados = this.primeiroElemento.dados;
        this.primeiroElemento = this.primeiroElemento.proximo;

        if(this.primeiroElemento == null){
            this.ultimoElemento = null;
        }

        return dados;
    }

    public boolean estaVazio(){
        return this.primeiroElemento == null;
    }

}
