import java.sql.*;

public class Query {
	String drv = "com.mysql.cj.jdbc.Driver";
	String url = "jdbc:mysql://localhost:3306/childrenstudy";
	String usr = "copyright";
	String pwd = "949462395";

	public String[] GetProblem(int grade) {
		String[] problem;
		String sql = "select * from userinfo where username='" + id + "' and password='" + password + "'";
		try {
			Class.forName(drv).newInstance();
			Connection connect = DriverManager.getConnection(url, usr, pwd);
			Statement stm = connect.createStatement();
			ResultSet rs = stm.executeQuery(sql);

			
			rs.close();
			stm.close();
			connect.close();

		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
}
