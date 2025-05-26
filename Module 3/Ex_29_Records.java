import java.util.List;

public class Ex_29_Records {
    public record Person(String name, int age) {}
    
    public static void main(String[] args) {
        Person p1 = new Person("Alice", 25);
        Person p2 = new Person("Bob", 17);
        Person p3 = new Person("Charlie", 30);
        
        System.out.println(p1);
        System.out.println(p2);
        System.out.println(p3);
        
        List<Person> people = List.of(p1, p2, p3);
        people.stream()
              .filter(person -> person.age() >= 18)
              .forEach(System.out::println);
    }
}
