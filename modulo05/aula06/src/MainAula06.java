import queue.Atendimento;

import java.util.LinkedList;

public class MainAula06 {
    public static void main(String[] args) {
        //ArrayList<Integer> list = new ArrayList<>();

        //list.add(89);
        //list.add(90);
        //list.add(92);

        //System.out.println(list.get(0));
        //System.out.println(list.remove(1));
        //System.out.println(list.size());

        //LinkedList<Integer> linkedList = new LinkedList<>();

        //linkedList.add(10);
        //linkedList.add(20);
        //linkedList.add(30);

        //System.out.println(linkedList.get(0));
        //System.out.println(linkedList.remove(1));
        //System.out.println(linkedList.size());

        // Exercicio01
        //Catalogo catalogo = new Catalogo();
        //Scanner scanner = new Scanner(System.in);

        //System.out.println("1 - Inserir itens");
        //System.out.println("2 - Lista itens");
        //System.out.println("3 - Remover itens");
        //System.out.println("Digite o número da opção do menu: ");
        //int opcao = scanner.nextInt();

        //switch (opcao){
        //    case 1:
        //        catalogo.adicionarItens();
        //        break;
        //    case 2:
        //        catalogo.listarItens();
        //        break;
        //    case 3:
        //        catalogo.removerItem();
        //        break;
        //    default:
        //        System.out.println("Opção inválida!");
        //}

        //SimpleQueue queue = new SimpleQueue();

        //queue.enqueue(10);

        // Imagine um sistema de atendimento ao cliente onde temos uma lista de clientes aguardando para serem atendidos.
        // Cada cliente é adicionado á lista e, em seguida, é atendido na ordem em que chegou (fila)
        LinkedList<String> listaClientes = new LinkedList<>();

        listaClientes.add("João");
        listaClientes.add("Pedro");
        listaClientes.add("Antônio");
        listaClientes.add("Ana");
        Atendimento atendimento = new Atendimento(listaClientes);

        while(!atendimento.estaVazio()){
            String clienteAtendido = atendimento.desenfilerar();
            System.out.println("Atendimento: " + clienteAtendido);
        }

        System.out.println("Todos os clientes foram atendidos.");

    }
}