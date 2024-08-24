import encapsulation.BankAccount;
import encapsulation.BankTransaction;
import encapsulationII.Circle;
import encapsulationII.Point;
import encapsulationII.Rectangle;
import encapsulationII.Shape;
import singleton.ConfigurationManager;

public class Main {
    public static void main(String[] args) {
        //BankAccount account = new BankAccount("12345", 1000);

        //BankTransaction depositTransaction = new BankTransaction(account, 15000, BankTransaction.TransactionType.DEPOSIT);

        //depositTransaction.execute();

        //System.out.println(depositTransaction.getDetails());

        //Shape circle = new Circle(5.0);

        //System.out.printf("Área do círculo: %.2f", circle.area());

        //Shape rectangle = new Rectangle(4.0, 5.0);
        //System.out.printf("Área do Retângulo: %.2f", rectangle.area());

        //Point point = new Point(3, 5);
        //Point anotherPoint = new Point(5, 8);

        //System.out.println("X: " + point.x());

        //System.out.println("Ponto: " + anotherPoint);

        //System.out.println("Os pontos são iguais? " + point.equals(anotherPoint));

        ConfigurationManager configurationManager = ConfigurationManager.getInstance();

        String dbUser = configurationManager.getProperty("db.user");
        System.out.println("Usuário do banco de dados " + dbUser);
    }
}