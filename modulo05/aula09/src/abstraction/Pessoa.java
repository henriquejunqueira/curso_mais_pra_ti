package abstraction;

public class Pessoa {
    public String nome;
    public String CPF;
    public String nascimento;
    public double altura;
    public double peso;
    public int idade;
    public char genero;

//    void caminha(){
//        System.out.println("Estou caminhando");
//    }
//
//    void desenvolve(){
//        System.out.println("Estou crescendo");
//    }
//
//    void estuda(){
//        System.out.println("Estou estudando");
//    }
//
//    void programa(){
//        System.out.println("Estou programando");
//    }

//    {
//        this.nome = "Henrique";
//    }

    public Pessoa(String nome, int idade){

        {
            //this.nome = "Henrique";
            if(nome != "Henrique"){
                this.nome = nome;
            }
            System.out.println(getNome());
        }

        this.nome = nome;
        this.idade = idade;
    }

    public String getNome(){
        return this.nome;
    }

    public void setNome(String nome){
        this.nome = nome;
    }
}
