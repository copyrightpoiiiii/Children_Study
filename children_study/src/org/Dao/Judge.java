package org.Dao;
import java.sql.*;

public class Judge{
	String drv = "com.mysql.cj.jdbc.Driver";
	String url = "jdbc:mysql://localhost:3306/children_study?useSSL=false&serverTimezone=UTC";
	String usr = "root";
	String pwd = "949462395";

	public boolean Query(String problem,int answer) {
		/*
		 * 传入题面problem和用户的答案answer
		 * 判断答案是否正确
		 * 正确时返回true
		 */
		boolean existance=false;
		String sql = "select * from problem where problem='" + problem + "' and answer='" + answer +""+ "'";
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
		return existance;
	}
}
