import exercicio.Desenvolvedor;
import exercicio.Empresa;
import exercicio.Funcionario;
import exercicio.Gerente;

public class Main {
    public static void main(String[] args) {
        //Carro meuCarro = new Carro(true, "4x4", 4, "Azul");

        //meuCarro.cor = "Laranja";
        //meuCarro.anoFabricacao = "2020";
        //meuCarro.ligar();

        // Exercicio 01
        Empresa empresa = new Empresa("Empresa Teste");

        Gerente gerente = new Gerente(10, "Ana", "35988776655", "Rua zero", 8000, "gerente", 2000);
        Desenvolvedor dev1 = new Desenvolvedor(15, "João", "35977665544", "Rua um", 5000, "desenvolvedor", "pleno", 1000);
        Desenvolvedor dev2 = new Desenvolvedor(20, "Pedro", "35966554433", "Rua dois", 4500, "desenvolvedor", "junior", 800);

        empresa.adicionarFuncionario(gerente);
        empresa.adicionarFuncionario(dev1);
        empresa.adicionarFuncionario(dev2);

        double totalFolha = empresa.calcularFolhaPagamento();
        System.out.println("Total da folha de pagamento R$" + totalFolha);

        for(Funcionario funcionario : empresa.getFuncionarios()){
            System.out.printf("Nome: " + funcionario.getNome() + " - Salário: R$ " + funcionario.getSalario() + "\n\n");
        }

        //Livro livro = new Livro();
        //livro.ler();

    }
}