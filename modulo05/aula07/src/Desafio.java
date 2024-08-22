class Node{
    String dado;
    Node proximo;

    public Node(String dado){
        this.dado = dado;
        this.proximo = null;
    }
}

public class Desafio {
    private Node topo;

    public Desafio() {
        this.topo = null;
    }

    public void push(String dado){
        Node novoNo = new Node(dado);
        novoNo.proximo = this.topo;
        this.topo = novoNo;
    }

    public String pop(){
        if(isEmpty()){
            throw new RuntimeException("Stack is empty");
        }

        String poppedDado = this.topo.dado;
        this.topo = this.topo.proximo;

        return poppedDado;
    }

    public String peek(){
        if(isEmpty()){
            throw new RuntimeException("Stack is empty");
        }

        return this.topo.dado;
    }

    public boolean isEmpty(){
        return topo == null;
    }
}
