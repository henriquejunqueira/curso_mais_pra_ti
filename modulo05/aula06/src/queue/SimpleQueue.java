package queue;

public class SimpleQueue {

    private Node first; // Referencia o primeiro elemento da fila.
    private Node last; // Referencia o último elemento da fila.

    // Construtor: Inicializa a fila como vazia, definindo first e last como null.
    public SimpleQueue(){
        this.first = null;
        this.last = null;
    }

    private static class Node{
        int data; // Armazena o dado do nó.
        Node next; // Referencia o próximo nó na fila.

        // Inicializa um nó com o dado passado e define o próximo nó (next) como null.
        // A classe Node é estática (static), o que significa que ela não precisa acessar
        // os membros da instância da classe SimpleQueue.
        public Node(int data){
            this.data = data;
            this.next = null;
        }
    }

    // Esse metodo adiciona um novo elemento à fila, sempre no final dela.
    public void enqueue(int data){
        Node newNode = new Node(data);

        // Se o último elemento (last) for null, isso significa que a fila está vazia.
        if (this.last == null){
            // Se a fila estiver vazia, tanto o first quanto o last apontam para o novo nó.
            // Isso acontece porque o primeiro nó inserido é também o último (e único) nó na fila.
            this.first = newNode;
            this.last = newNode;
        }else{
            // Se a fila não estiver vazia, o next do nó atual last aponta para o novo nó,
            // e last é atualizado para o novo nó.
            // Isso adiciona o novo nó ao final da fila.
            this.last.next = newNode;
            this.last = newNode;
        }
    }

    public int dequeue(){

        // Verifica se a fila está vazia.
        // Se this.first for null, significa que não há nenhum elemento na fila. Neste caso, o
        // metodo lança uma exceção IllegalStateException com a mensagem "Fila vazia!", pois não
        // há elementos para remover.
        if(this.first == null){
            throw new IllegalStateException("Fila vazia!");
        }

        int data = this.first.data; // Armazena o valor do dado (data) do primeiro nó da fila em uma variável data.
        this.first = this.first.next; // Atualiza a referência first para apontar para o próximo nó na fila.

        // Verifica se a fila ficou vazia após a remoção do elemento.
        if (this.first == null){
            this.last = null;
        }

        return data; // Retorna o valor armazenado anteriormente do nó removido da fila.
    }

    // Se first for null, significa que não há nenhum nó na fila, ou seja, a fila está vazia.
    public boolean isEmpty(){
        return this.first == null;
    }

}
