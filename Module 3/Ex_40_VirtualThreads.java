public class Ex_40_VirtualThreads {
    public static void main(String[] args) throws InterruptedException {
        Runnable task = () -> System.out.println("Thread: " + Thread.currentThread());

        for (int i = 0; i < 100; i++) { 
            Thread thread = new Thread(task);
            thread.start();
        }

        Thread.sleep(1000); 
    }
}
