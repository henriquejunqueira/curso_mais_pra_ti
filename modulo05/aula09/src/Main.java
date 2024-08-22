import abstraction.ContaBancaria;
import abstraction.Pessoa;
import abstraction.Carro;

public class Main {
    public static void main(String[] args) {
        //Pessoa minhaPessoa = new Pessoa();

        //minhaPessoa.nome = "João";
        //minhaPessoa.altura = 1.60;
        //System.out.println(minhaPessoa.nome);
        //System.out.println(minhaPessoa.altura);

        //Pessoa segundaPessoa = new Pessoa();
        //Pessoa segundaPessoa = new Pessoa("Henrique", 30);
        //segundaPessoa.nome = "Maria";
        //segundaPessoa.altura = 1.70;
        //System.out.println(segundaPessoa.nome);
        //System.out.println(segundaPessoa.altura);

        //Carro carro1 = new Carro();

        //carro1.setMarca("Fiat");
        //carro1.setCor("Vermelho");
        //carro1.setPorta(4);
        //carro1.setAno(2020);

        //System.out.println(carro1.getMarca());
        //System.out.println(carro1.getCor());
        //System.out.println(carro1.getPorta());
        //System.out.println(carro1.getAno());
        try{

            ContaBancaria contaBancaria1 = new ContaBancaria("12345", "Henrique", 1000, "Corrente", "Caixa", "26/05/2020");

            contaBancaria1.depositar(1000);
            contaBancaria1.sacar(800);
            contaBancaria1.transferir(contaBancaria1, 100.0);

            contaBancaria1.exibirExtrato();
            contaBancaria1.exibirExtrato();
        }catch(Exception error){
            System.out.println(error.getMessage());
        }

    }
}