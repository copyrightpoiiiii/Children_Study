import java.sql.*;
import java.util.ArrayList;

public class GetProblem {
	String drv = "com.mysql.cj.jdbc.Driver";
	String url = "jdbc:mysql://localhost:3306/childrenstudy";
	String usr = "copyright";
	String pwd = "949462395";

	public ArrayList<String> Query(int grade) {
		ArrayList<String> problem = new ArrayList<String>();
		String sql = "SELECT * FROM `problem` WHERE  level = "+grade+""+" ORDER BY Rand() LIMIT 30";
		try {
			Class.forName(drv).newInstance();
			Connection connect = DriverManager.getConnection(url, usr, pwd);
			Statement stm = connect.createStatement();
			ResultSet rs = stm.executeQuery(sql);
			while(rs.next()) {
				problem.add(rs.getString(1));
			}
			rs.close();
			stm.close();
			connect.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return problem;
	}
}
