package exercicio;

public class Gerente extends Funcionario{

    private double bonus;

    public Gerente(int id, String nome, String telefone, String endereco, double salario, String funcao, double bonus) {
        super(id, nome, telefone, endereco, salario, funcao, bonus);
    }

    @Override
    public double getSalario() {
        return super.getSalario();
    }

    public double getBonus(){
        return bonus;
    }

    public void setBonus(double bonus){
        this.bonus = bonus;
    }
}
