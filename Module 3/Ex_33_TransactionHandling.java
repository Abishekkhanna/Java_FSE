import java.sql.*;

public class Ex_33_TransactionHandling {
    private static final String url = "jdbc:mysql://localhost:3306/testdb";
    private static final String user = "root";
    private static final String password = "yourpassword";

    public void transferMoney(int fromAccount, int toAccount, double amount) {
        String debitSQL = "UPDATE accounts SET balance = balance - ? WHERE account_id = ?";
        String creditSQL = "UPDATE accounts SET balance = balance + ? WHERE account_id = ?";

        try (Connection con = DriverManager.getConnection(url, user, password)) {
            con.setAutoCommit(false);

            try (PreparedStatement debit = con.prepareStatement(debitSQL);
                 PreparedStatement credit = con.prepareStatement(creditSQL)) {

                debit.setDouble(1, amount);
                debit.setInt(2, fromAccount);
                debit.executeUpdate();

                credit.setDouble(1, amount);
                credit.setInt(2, toAccount);
                credit.executeUpdate();

                con.commit();
                System.out.println("Transfer successful.");

            } catch (SQLException e) {
                con.rollback();
                System.out.println("Transfer failed. Transaction rolled back.");
                e.printStackTrace();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        Ex_33_TransactionHandling transfer = new Ex_33_TransactionHandling();
        transfer.transferMoney(1, 2, 100.00);
    }
}
