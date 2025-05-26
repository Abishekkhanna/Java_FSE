class MyThread extends Thread {
    private String message;
    public MyThread(String message) {
        this.message = message;
    }
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(message + " - " + i);
            try { Thread.sleep(100); } catch (InterruptedException e) {}
        }
    }
}

public class Ex_26_ThreadCreation {
    public static void main(String[] args) {
        MyThread t1 = new MyThread("Thread 1 running");
        MyThread t2 = new MyThread("Thread 2 running");
        t1.start();
        t2.start();
    }
}
