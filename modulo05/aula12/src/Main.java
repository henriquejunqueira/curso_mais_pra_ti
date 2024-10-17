import polymorphism.Animal;
import polymorphism.Cat;
import polymorphism.Dog;
import threads.MyRunnable;
import threads.MyThread;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ForkJoinPool;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Cria uma instância de MyThread
        //MyThread myThread = new MyThread();

        // Executa o metodo run() diretamente em vez de usar start()
        //myThread.run();

        // Cria uma nova Thread com uma instância de MyRunnable
        //Thread t1 = new Thread(new MyRunnable());
        // Inicia a execução da thread
        //t1.start();

        // Cria um ExecutorService com um pool de 2 threads
        //ExecutorService  executor = Executors.newFixedThreadPool(2);

        // Exemplo de expressão lambda para definir uma tarefa Runnable
        /*Runnable task1 = () -> {
            for (int i = 1; i <= 5; i++){
                System.out.println("Task 1 - Number: " + i);

                try{
                    Thread.sleep(1000);
                }catch(InterruptedException error){
                    error.printStackTrace();
                }
            }
        };*/

        // Exemplo de outra expressão lambda para definir uma tarefa Runnable
        /*Runnable task2 = () -> {
            for (int c = 'A'; c <= 'E'; c++){
                System.out.println("Task 2 - Number: " + c);

                try{
                    Thread.sleep(1000);
                }catch(InterruptedException error){
                    error.printStackTrace();
                }
            }
        };*/

        // Exemplo de uma terceira expressão lambda para definir uma tarefa Runnable
        /*Runnable task3 = () -> {
            for (int f = 'F'; f <= 'K'; f++){
                System.out.println("Task 2 - Number: " + f);

                try{
                    // Pausa a execução por 1 segundo
                    Thread.sleep(1000);
                }catch(InterruptedException error){
                    error.printStackTrace();
                }
            }
        };*/

        // Submete as tarefas task1 e task2 ao executor
        //executor.submit(task1);
        //executor.submit(task2);

        // Encerra o executor e aguarda a conclusão das tarefas
        //executor.shutdown();

        // Exemplo de paralelismo usando ForkJoinPool
        //List<Integer> numbers = List.of(1, 2, 3, 4, 5);

        // Cria um ForkJoinPool com o número de processadores disponíveis
        //ForkJoinPool forkJoinPool = new ForkJoinPool(Runtime.getRuntime().availableProcessors());

        // Submete uma tarefa ao ForkJoinPool para processamento paralelo
        /*forkJoinPool.submit(() -> {
            // Processa cada número na lista em paralelo usando parallelStream
            numbers.parallelStream().forEach(number -> {
                // Exibe o número sendo processado e o nome da thread atual
                System.out.println("Número sendo processado: " + number + " - " + Thread.currentThread().getName());

                try{
                    // Pausa a execução por 1 segundo
                    Thread.sleep(1000);
                }catch(InterruptedException error){
                    error.printStackTrace();
                }

            });
        }).join();*/ // Aguarda a conclusão da tarefa

        //Animal animal = new Animal();
        //Dog dog = new Dog();
        //Cat cat = new Cat();

        //animal.makeSound();
        //dog.makeSound();
        //cat.makeSound();

        // Cria uma lista de números inteiros de 1 a 10
        //List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        // Processa a lista usando a API de Streams
        /*List<Integer> evenNumbers = numbers.stream() // Cria um Stream a partir da lista 'numbers'
                .filter(n -> n % 2 == 0) // Filtra apenas os números pares (n % 2 == 0)
                .map(n -> n * 2) // Multiplica cada número par por 2
                .collect(Collectors.toList()); // Coleta os resultados em uma nova lista */

        // Imprime a lista resultante de números pares multiplicados por 2
        //System.out.println(evenNumbers); // Saída esperada: [4, 8, 12, 16, 20]

        // Cria uma lista de nomes como Strings
        //List<String> names = Arrays.asList("Sherlock", "Tony", "Bruce", "Murdock", "Aang", "Logan", "Bilbo");

        // Processa a lista usando a API de Streams
        /*names.stream() // Converte a lista 'names' em um Stream
                .map(String::toUpperCase) // Converte cada nome para letras maiúsculas
                .forEach(System.out::println); // Imprime cada nome convertido no console */

        // Peguem um parágrafo de texto e usem streams para contar o número de palavras únicas, ignorarem maiúsculas,
        // miniúsculas e removam pontuações.

        // Um parágrafo de texto
        String frase = "Essa é uma frase comum!";

        // Converte o texto em uma lista de palavras
        List<String> palavras = Arrays.asList(frase.split("\\s+")); // Divide o texto por espaços

        // Conta o número de palavras únicas, ignorando maiúsculas, minúsculas e removendo pontuações
        long palavraContada = palavras.stream()
                .map(palavra -> palavra.replaceAll("[^a-zA-Z]", "")) // Remove pontuações
                .map(String::toUpperCase) // Converte para maiúsculas
                .filter((palavra -> !palavra.isEmpty())) // Filtra palavras vazias resultantes da remoção de pontuações
                .distinct() // Remove palavras duplicadas
                .count(); // Conta o número de palavras únicas

        // Imprime o resultado
        System.out.println("Número de palavras únicas: " + palavraContada);

    }
}