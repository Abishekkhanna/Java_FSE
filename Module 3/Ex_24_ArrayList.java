import java.util.ArrayList;
import java.util.Scanner;
public class Ex_24_ArrayList {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter 3 names:");
        for (int i = 0; i < 3; i++) list.add(sc.nextLine());
        System.out.println("Names:");
        for (String name : list) System.out.println(name);
        sc.close();
    }
}
