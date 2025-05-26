interface Playable {
    void play();
}
class Guitar implements Playable {
    public void play() { 
        System.out.println("Playing Guitar"); 
    }
}
class Piano implements Playable {
    public void play() { 
        System.out.println("Playing Piano"); 
    }
}
public class Ex_19_Interface {
    public static void main(String[] args) {
        Playable guitar = new Guitar();
        Playable piano = new Piano();
        guitar.play();
        piano.play();
    }
}
