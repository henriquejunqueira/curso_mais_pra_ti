package lists;

import java.util.ArrayList;
import java.util.Scanner;

public class Catalogo {

    ArrayList<String> listaProdutos = new ArrayList<>();
    Scanner entrada = new Scanner(System.in);

    public void adicionarItens(){


        char sair = 'n';

        do{
            System.out.print("Nome do produto: ");
            listaProdutos.add(entrada.next());

            System.out.print("Deseja finalizar o programa? [s/n]: ");
            sair = entrada.next().charAt(0);
        }while(sair != 's');

        sair = 'n';

        perguntaListagem();

        entrada.close();
    }

    public void listarItens(){
        for(int i = 0; i < listaProdutos.size(); i++){
            if(listaProdutos.size() <= 0){
                System.out.println("Nenhum item para listar: ");
            }else{
                System.out.println(listaProdutos.get(i));
            }
        }
    }

    public void removerItem(){
        listarItens();

        System.out.print("Digite o número do item que deseja remover: ");
        int indice = entrada.nextInt();

        perguntaListagem();

        listaProdutos.remove(indice);
    }

    public void perguntaListagem(){
        System.out.println("Deseja listar ou itens? s/n");
        char listar = entrada.next().charAt(0);

        if(listar == 's'){
            listarItens();
        }
    }
}
