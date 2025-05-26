import java.util.Scanner;
public class Ex_14_Arrays {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of elements: ");
        int n = sc.nextInt();
        int[] arr = new int[n];
        System.out.println("Enter elements:");
        for(int i=0; i<n; i++) arr[i] = sc.nextInt();
        int sum = 0;
        for(int num : arr) sum += num;
        double avg = (double) sum / n;
        System.out.println("Sum: " + sum);
        System.out.println("Average: " + avg);
        sc.close();
    }
}
