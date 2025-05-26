import java.util.Scanner;

public class Ex_3_OddorEven {
    public static void main(String[] args) {
        int num = new Scanner(System.in).nextInt();
        System.out.println(num % 2 == 0 ? "Even" : "Odd");
    }
}
