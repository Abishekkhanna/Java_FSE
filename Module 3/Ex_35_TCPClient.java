import java.io.*;
import java.net.*;

public class Ex_35_TCPClient {
    public static void main(String[] args) throws IOException {
        Socket socket = new Socket("localhost", 12345);

        BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        PrintWriter out = new PrintWriter(socket.getOutputStream(), true);

        BufferedReader console = new BufferedReader(new InputStreamReader(System.in));

        String serverMsg, clientMsg;
        while (true) {
            clientMsg = console.readLine();
            out.println(clientMsg);
            if ("bye".equalsIgnoreCase(clientMsg)) break;
            serverMsg = in.readLine();
            System.out.println("Server: " + serverMsg);
        }

        socket.close();
    }
}
