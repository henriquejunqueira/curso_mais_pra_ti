import lists.CustomList01;

public class MainAula05 {
    public static void main(String[] args) {

        CustomList01 customlist = new CustomList01();
        customlist.add(1);
        customlist.add(2);
        customlist.add(3);
        customlist.add(4);
        customlist.add(10);
        customlist.add(5);
        customlist.add(20);

        System.out.println(customlist.toString());
        customlist.remove(1);
        customlist.get(2);
        System.out.println(customlist.toString());


    }
}