import java.util.HashMap;
import java.util.Scanner;

public class Ex_25_HashMap {
    public static void main(String[] args) {
        HashMap<Integer, String> students = new HashMap<>();
        Scanner sc = new Scanner(System.in);
        
        System.out.println("Enter number of student entries:");
        int n = sc.nextInt();
        sc.nextLine();  
        
        for (int i = 0; i < n; i++) {
            System.out.print("Enter student ID (integer): ");
            int id = sc.nextInt();
            sc.nextLine();
            System.out.print("Enter student name: ");
            String name = sc.nextLine();
            students.put(id, name);
        }
        
        System.out.print("Enter student ID to retrieve name: ");
        int searchId = sc.nextInt();
        
        String result = students.get(searchId);
        if (result != null) {
            System.out.println("Student name: " + result);
        } else {
            System.out.println("No student found with ID " + searchId);
        }
        
        sc.close();
    }
}
