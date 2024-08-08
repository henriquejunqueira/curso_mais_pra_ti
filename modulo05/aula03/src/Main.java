import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.IntStream;

public class Main {
    public static void main(String[] args) {

//        int[] vetor = new int[5];
//
//        vetor[0] = 10;
//        vetor[1] = 20;
//        vetor[2] = 30;
//        vetor[3] = 40;
//        vetor[4] = 50;
//
//        vetor[4] = 100;

        //System.out.println(vetor);
//        System.out.println("Elementor do array 'vetor': ");
//        for(int i = 0; i < vetor.length; i++){
//            System.out.println("Elemento na posição " + i + ":" + vetor[i]);
//        }

//        int[] vetorInicializado = {1, 2, 3, 4, 5, 6, 7};

        //String[] palavras = {"teste"};

//        System.out.println("Soma do array 'vetor': ");
//        int sum = 0;
//        for(int i = 0; i < vetor.length; i++){
//            sum += vetor[i];
//        }

        //System.out.println(sum);

//        int max = vetor[0];

//        for(int i = 0; i < vetor.length; i++){
//            if(vetor[i] > max){
//                max = vetor[i];
//            }
//        }

//        for(int value : vetor){
//            if(value > max){
//                max = value;
//            }
//        }

        // Exercício 1: inverter array
//        int start = 0;
//        int end = vetorInicializado.length - 1;
//
//        while(start < end){
//            int temp = vetorInicializado[start];
//            vetorInicializado[start] = vetorInicializado[end];
//            vetorInicializado[end] = temp;
//
//            start++;
//            end--;
//        }
//
//        for(int i = 0; i < vetorInicializado.length; i++){
//            System.out.println("Elemento na posição: " + i + ":" + vetorInicializado[i]);
//        }

        //Exercício 02: Adicionar elementos à um array
//        int[] arrayOriginal = {1, 2, 3, 4, 5, 6, 7};
//        int[] novoArray = new int[arrayOriginal.length + 3];
//
//        for(int i = 0; i < arrayOriginal.length; i++){
//            novoArray[i] = arrayOriginal[i];
//        }
//
//        novoArray[arrayOriginal.length] = 8;
//        novoArray[arrayOriginal.length + 1] = 9;
//        novoArray[arrayOriginal.length + 1] = 10;
//
//        for(int i : novoArray){
//            System.out.println(i + " ");
//        }

        //Exercício 03: Excluir elementos de um array

        //Exercício 04: Pesquisar elementos em um array

        // Matriz
//        int[][] matrix = {
//                {1, 2, 3},
//                {3, 5, 6},
//                {10, 11, 10}
//        };

//        for (int[] row : matrix){
//            for (int value : row){
//                System.out.println(value + "");
//            }
//            System.out.println();
//        }

        // Exercício 05: Somar a diagonal da matriz
//        int[][] matrix = {
//                {10, 20, 30},
//                {40, 50, 60},
//                {70, 80, 90}
//        };
//
//        int somaDiagonal = 0;
//
//        for(int i = 0; i < matrix.length; i++){
//            somaDiagonal += matrix[i][i];
//        }
//
//        System.out.println("Resultado da soma diagonal: " + somaDiagonal);

        // Exercício 06: Rotacionar a matriz

        // Exercício 07: Buscar todas as ocorrências de um elemento de um array
        int[] vetor = new int[] {10, 20, 30, 40, 50, 10, 40, 60, 10, 70, 80, 90};
        int ocorrencia = 0;


        for(int i = 0; i < vetor.length; i++){
            if(IntStream.of(vetor).anyMatch(a -> a == 10)){

            }
        }

    }
}