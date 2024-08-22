package abstraction;

public class Carro {

    private String marca;
    private String cor;
    private int porta;
    private int ano;

    public String getMarca(){
        return this.marca;
    }

    public void setMarca(String marca){
        this.marca = marca;
    }

    public String getCor(){
        return this.cor;
    }

    public void setCor(String cor){
        this.cor = cor;
    }

    public int getPorta(){
        return this.porta;
    }

    public void setPorta(int porta){
        this.porta = porta;
    }

    public int getAno(){
        return this.ano;
    }

    public void setAno(int ano){
        this.ano = ano;
    }

}
