import java.util.Scanner;

public class Ex_4_LeapYear {
    public static void main(String[] args) {
        int year = new Scanner(System.in).nextInt();
        boolean leap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
        System.out.println(leap ? "Leap Year" : "Not a Leap Year");
    }
}
