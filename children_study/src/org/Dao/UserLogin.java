package org.Dao;
import java.sql.*;

public class UserLogin {
	String drv = "com.mysql.cj.jdbc.Driver";
	String url = "jdbc:mysql://localhost:3306/children_study?useSSL=false&serverTimezone=UTC";
	String usr = "root";
	String pwd = "949462395";

	public boolean Login(String id, String password) {
		boolean existance = false;
		String sql = "select * from userinfo where username='" + id + "' and password='" + password + "';";
		try {
			Class.forName(drv);
			Connection connect = DriverManager.getConnection(url, usr, pwd);
			Statement stm = connect.createStatement();
			ResultSet rs = stm.executeQuery(sql);

			if (rs.next()) {
				existance = true;
			}
			rs.close();
			stm.close();
			connect.close();

		} catch (Exception e) {
			e.printStackTrace();
		}
		if (existance) {
			return true;
		} else
			return false;
	}
}
