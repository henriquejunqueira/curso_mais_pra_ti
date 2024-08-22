package Stack;

import java.util.Arrays;

// Classe Node representa um nó na pilha
class Node{
    int data; // Armazena o valor do nó
    Node next; // Referência para o próximo nó na pilha

    // Construtor da classe Node que inicializa o valor do nó e define a referência para o próximo nó como null
    public Node(int data){
        this.data = data;
        this.next = null;
    }

}

// Classe StackExample representa a estrutura da pilha em si
public class StackExample {
    private Node top; // Referência para o nó que está no topo da pilha

    // Construtor da classe StackExample que inicializa a pilha como vazia (topo é null)
    public StackExample(){
        this.top = null;
    }

    // Metodo push adiciona um novo elemento no topo da pilha
    public void push(int data){
        Node newNode = new Node(data); // Cria um novo nó com o valor fornecido
        newNode.next = this.top; // Aponta o novo nó para o nó atualmente no topo da pilha
        this.top = newNode; // Atualiza o topo da pilha para ser o novo nó
    }

    public int pop(){
        if(isEmpty()){
            throw new RuntimeException("Stack is empty");
        }

        int poppedData = this.top.data;
        this.top = this.top.next;

        return poppedData;
    }

    public int peek(){
        if(isEmpty()){
            throw new RuntimeException("Stack is empty");
        }

        return this.top.data;
    }

    public boolean isEmpty(){
        return top == null;
    }

}
