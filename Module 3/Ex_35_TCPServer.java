import java.io.*;
import java.net.*;

public class Ex_35_TCPServer {
    public static void main(String[] args) throws IOException {
        ServerSocket server = new ServerSocket(12345);
        System.out.println("Server started, waiting for client...");
        Socket client = server.accept();
        System.out.println("Client connected.");

        BufferedReader in = new BufferedReader(new InputStreamReader(client.getInputStream()));
        PrintWriter out = new PrintWriter(client.getOutputStream(), true);

        BufferedReader console = new BufferedReader(new InputStreamReader(System.in));

        String clientMsg, serverMsg;
        while ((clientMsg = in.readLine()) != null) {
            System.out.println("Client: " + clientMsg);
            serverMsg = console.readLine();
            out.println(serverMsg);
            if ("bye".equalsIgnoreCase(serverMsg)) break;
        }

        client.close();
        server.close();
    }
}
