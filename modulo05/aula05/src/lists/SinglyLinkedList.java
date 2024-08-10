package lists;

public class SinglyLinkedList {

    private Node head; // primeiro nó

    private static class Node{
        int data;
        Node next;

        // esse é o construtor, ele representa o elemento
        public Node(int data){
            this.data = data;
            this.next = null;
        }
    }

    public SinglyLinkedList(){
        this.head = null;
    }

    public void add(int data){
        Node newNode = new Node(data); // cria um novo nó passando a data pra ele

        // se a cabeça do ponteiro for null a lista está vazia, então, ela recebe o novo nó
        if(this.head == null){
            this.head = newNode;
        }else{
            Node current = this.head; // cria um nó current e aponta para o ponteiro, e ele vira o último elemento
            // enquanto o current.next for diferente de null
            while(current.next != null){
                current = current.next;
            }

            current.next = newNode;
        }
    }

    public int get(int index){
        Node current = this.head; // pega o primeiro elemento da lista
        int count = 0;

        while(current != null){
            if(count  == index){
                return current.data;
            }

            count++;
            current = current.next;
        }

        throw new IndexOutOfBoundsException("Index fora dos limites/invalido");
    }

    public void remove(int index){

        Node current = this.head; // pega o primeiro elemento da lista

        // se o elemento for nulo terá uma excessão
        if(this.head == null){
            throw new IndexOutOfBoundsException("Index fora dos limites/invalido");
        }

        // se o indice for 0
        if(index == 0){
            this.head = this.head.next; // aponta para o nó
            return;
        }

        int count = 0;
        Node previous = null; // nó anterior

        while(current != null && count < index){
            previous = current; // nó anterior recebe current
            current = current.next; // current recebe o próximo valor
            count++; // incrementa a contagem
        }

        // se o current for nulo terá uma excessão
        if(current == null){
            throw new IndexOutOfBoundsException("Index fora dos limites/invalido");
        }

        previous.next = current.next;
    }

    public int size(){
        int count = 0;
        Node current = this.head;

        while (current != null){
            count++;
            current = current.next;
        }

        return count;
    }

    public boolean isEmpty(){
        return this.head == null;
    }

}
