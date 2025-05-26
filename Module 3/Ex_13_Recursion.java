import java.util.Scanner;
public class Ex_13_Recursion {
    static int fibonacci(int n) {
        if (n <= 1) return n;
        return fibonacci(n-1) + fibonacci(n-2);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter positive integer n: ");
        int n = sc.nextInt();
        System.out.println("Fibonacci number: " + fibonacci(n));
        sc.close();
    }
}
