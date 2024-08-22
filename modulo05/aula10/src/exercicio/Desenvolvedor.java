package exercicio;

public class Desenvolvedor extends Funcionario{

    public String nivel;
    public double adicional;

    public Desenvolvedor(int id, String nome, String telefone, String endereco, double salario, String funcao, String nivel, double adicional) {
        super(id, nome, telefone, endereco, salario, funcao, 0); // Bonus é 0 para desenvolvedores
        this.nivel = nivel;
        this.adicional = adicional;
    }

    @Override
    public double getSalario() {
        return getSalarioBase() + adicional; // Adicional é somado ao salário base
    }

    public String getNivel() {
        return nivel;
    }

    public void setNivel(String nivel) {
        this.nivel = nivel;
    }

    public double getAdicional() {
        return adicional;
    }

    public void setAdicional(double adicional) {
        this.adicional = adicional;
    }
}
