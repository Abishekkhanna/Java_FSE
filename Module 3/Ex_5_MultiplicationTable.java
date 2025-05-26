import java.util.Scanner;

public class Ex_5_MultiplicationTable {
    public static void main(String[] args) {
        int num = new Scanner(System.in).nextInt();
        for (int i = 1; i <= 10; i++) System.out.println(num + " x " + i + " = " + (num * i));
    }
}
