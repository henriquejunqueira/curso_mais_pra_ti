package queue;
import java.util.LinkedList;
import java.util.Queue;

public class QueueExemple {

    public static void main(String[] args){
        // Cria uma fila (queue) de inteiros usando LinkedList
        Queue<Integer> queue = new LinkedList<>();

        // Adiciona elementos à fila
        queue.add(10); // Adiciona o elemento 10 à fila
        queue.add(20); // Adiciona o elemento 20 à fila
        queue.add(30); // Adiciona o elemento 30 à fila

        // Exibe o elemento da frente da fila sem removê-lo
        // Metodo peek(): Retorna o elemento da frente da fila (o primeiro a ter sido inserido) sem removê-lo.
        // Nesse caso, o elemento da frente será 10, já que foi o primeiro a ser adicionado.
        System.out.println("Elemento da frente da fila: " + queue.peek());

        // Exibe e remove o elemento da frente da fila
        // Metodo poll(): Retorna e remove o elemento da frente da fila. Após chamar queue.poll(), o elemento
        // 10 será removido da fila.
        System.out.println("Elemento removido: " + queue.poll());
    }

}
