package exercicio;

import java.util.ArrayList;
import java.util.List;

public class Empresa {

    //Funcionario - Duas subclasses uma gerente e uma desenvolvedor.
    //criem uma classe empresa calcular a folha de pagamento dos funcionários.

    private String nome;
    private List<Funcionario> funcionarios;

    public Empresa(String nome) {
        this.nome = nome;
        this.funcionarios = new ArrayList<>();
    }

    public void adicionarFuncionario(Funcionario funcionario){
        funcionarios.add(funcionario);
    }

    public double calcularFolhaPagamento(){
        double totalFolha = 0;
        for(Funcionario funcionario : funcionarios){
            totalFolha += funcionario.getSalario();
        }
        return totalFolha;
    }

    public List<Funcionario> getFuncionarios(){
        return funcionarios;
    }
}
