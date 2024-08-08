import util.Utilitarios;

public class Main {
    public static void main(String[] args) {
        
        Geometria geo = new Geometria();
        ContaBancaria contaBancaria = new ContaBancaria();

        contaBancaria.depositar(1000);
        System.out.println(contaBancaria.consultaSaldo());

        double areaRetangulo = geo.calcularAreaRetangulo(5.0, 3.0);

        System.out.println(Geometria.multiplicar(10, 10));
        System.out.println(areaRetangulo);

        Utilitarios.print("Olá, mundo!");
    }
}