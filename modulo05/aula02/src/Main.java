import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Locale.setDefault(Locale.US);

//        Exercício 01: Celcius para Fahrenheit
        // F = C x 1,8 + 32
//        Scanner scanner = new Scanner(System.in);

//        System.out.println("Entre com o valor de celsius (ºC): ");
//        double c = scanner.nextDouble();
//        double f = c * 1.8 + 32;
//
//        System.out.println(c + "ºC equivale à " + f + "ºF");

//        int idade = 17;
//
//        if(idade >= 18){
//            System.out.println("Você é menor de idade!");
//        }else{
//            System.out.println("Você é menor de idade!");
//        }

//      Exercício 02: Par ou Ímpar

//        Scanner scanner = new Scanner(System.in);
//
//        System.out.println("Digite um número inteiro: ");
//        int numero = scanner.nextInt();
//
//        if(numero % 2 == 0){
//            System.out.println("O número "+ numero +" é par");
//        }else{
//            System.out.println("O número "+ numero +" é ímpar");
//        }

        // De para de dias com switch case
//        Scanner scanner = new Scanner(System.in);
//
//        System.out.println("Digite o dia da semana: ");
//        int dia = scanner.nextInt();
//
//        switch(dia){
//            case 1:
//                System.out.println("Domingo!");
//                break;
//            case 2:
//                System.out.println("Segunda-feira!");
//                break;
//            case 3:
//                System.out.println("Terça-feira!");
//                break;
//            case 4:
//                System.out.println("Quarta-feira!");
//                break;
//            case 5:
//                System.out.println("Quinta-feira!");
//                break;
//            case 6:
//                System.out.println("Sexta-feira!");
//                break;
//            case 7:
//                System.out.println("Sábado!");
//                break;
//            default:
//                System.out.println("Dia inválido!");
//                break;
//        }

//      Exercício 03: Ano bissexto

//        Scanner scanner = new Scanner(System.in);
//
//        System.out.println("Digite o ano: ");
//        int ano = scanner.nextInt();
//
//        if((ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0)){
//            System.out.println("É ano bissexto!");
//        }else{
//            System.out.println("Não é ano bissexto!");
//        }

//      Exercício 04: Calculadora Simples!
//        Scanner scanner = new Scanner(System.in);
//
//        System.out.println("Digite o primeiro número: ");
//        double primeiroValor = scanner.nextDouble();
//
//        System.out.println("Digite o segundo número: ");
//        double segundoValor = scanner.nextDouble();
//
//        System.out.println("Digite o símbolo do cálculo (+, -, *, /: ");
//        char tipoCalculo = scanner.next().charAt(0);
//        double resultado = 0;
//
//        switch (tipoCalculo){
//            case '+':
//                resultado = primeiroValor + segundoValor;
//                System.out.println("O resultado da conta é: " + resultado);
//                break;
//            case '-':
//                resultado = primeiroValor - segundoValor;
//                System.out.println("O resultado da conta é: " + resultado);
//                break;
//            case '*':
//                resultado = primeiroValor * segundoValor;
//                System.out.println("O resultado da conta é: " + resultado);
//                break;
//            case '/':
//                resultado = primeiroValor + segundoValor;
//                System.out.printf("O resultado da conta é: %.2f" + resultado);
//                break;
//            default:
//                System.out.println("Símbolo inválido!");
//        }
//
//        scanner.close();

//      Exercício 05: Simulem um login básico que permita somente trẽs tentativas de login antes de bloquear o usuário

//        Scanner scanner = new Scanner(System.in);
//
//        String usuarioOriginal = "Henrique";
//        String senhaOriginal = "teste123";
//
//        for(int tentativas = 3; tentativas > 0; tentativas--){
//            System.out.println("Digite o usuário: ");
//            String usuario = scanner.nextLine();
//
//            System.out.println("Digite a senha: ");
//            String senha = scanner.nextLine();
//
//            if((usuario.equals(usuarioOriginal)) && (senha.equals(senhaOriginal))){
//                System.out.println("Bem vindo(a) ao sistema!");
//                break;
//            }else {
//                if(tentativas == 0){
//                    System.out.println("Conta bloqueada! Entre em contato com o suporte para desbloquear sua conta!");
//                    break;
//                }else{
//                    System.out.println("Você tem " + (tentativas - 1) + " tentativas. Errando 3 vezes a conta será bloqueada!");
//                }
//            }
//
//        }
//
//        scanner.close();

        // estrutura de Repetição
        // inicialização; condição; incremento
//        for(int i = 0; i < 10; i++){
//            System.out.println("Valor de i é: " + i);
//        }

//        int i = 0;
//
//        while (i < 10) {
//
//            System.out.println("Valor de i é: " + i);
//            i++;
//        }

//        int i = 0;
//
//        do{
//            System.out.println("Valor de i é: " + i);
//            i++;
//        }while(i < 10);


//        Trabalhando com strings
//        String texto = "Java é melhor que aquela linguagem";
//
//        int comprimento = texto.length();
//        System.out.println(comprimento);
//
//        String maiusculas = texto.toUpperCase();
//        System.out.println(maiusculas);
//
//        String minusculas = texto.toLowerCase();
//        System.out.println(minusculas);

//        boolean contem = texto.contains("Java");
//        boolean contem = texto.toLowerCase().contains("Java");
//        System.out.println(contem);
//
//        String substituto = texto.replace("Java", "Python");
//        System.out.println(substituto);
//
//        String substring = texto.substring(0, 4);
//        System.out.println(substring);

//        Biblioteca Math
//        double num = 50.30;
//
//        double arredondado = Math.round(num);
//        System.out.println(arredondado);
//
//        double arredondadoPracima = Math.ceil(num);
//        System.out.println(arredondadoPracima);
//
//        double arredondadoPraBaixo = Math.floor(num);
//        System.out.println(arredondadoPraBaixo);
//
//        double raizQuadrada = Math.sqrt(num);
//        System.out.println(raizQuadrada);
//
//        double absoluto = Math.abs(num);
//        System.out.println(absoluto);
//
//        double aleatorio = Math.random();
//        System.out.println(aleatorio);

        Scanner scanner = new Scanner(System.in);
//        Exercício 06: Fatorial de um número
        System.out.println("Digite um número para saber seu fatorial: ");
        int n = scanner.nextInt();


//        Exercício 07: Sequência de Fibonacci (sem recursão)

        scanner.close();
    }
}