public class Ex_18_Inheritance {
    static class Animal {
        void makeSound() {
            System.out.println("Animal sound");
        }
    }
    static class Dog extends Animal {
        @Override
        void makeSound() {
            System.out.println("Bark");
        }
    }
    public static void main(String[] args) {
        Animal animal = new Animal();
        Dog dog = new Dog();
        animal.makeSound();
        dog.makeSound();
    }
}
