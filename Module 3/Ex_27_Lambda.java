import java.util.Arrays;
import java.util.List;
import java.util.Collections;

public class Ex_27_Lambda {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("banana", "apple", "pear", "orange");
        Collections.sort(list, (a, b) -> a.compareToIgnoreCase(b));
        System.out.println("Sorted list: " + list);
    }
}
