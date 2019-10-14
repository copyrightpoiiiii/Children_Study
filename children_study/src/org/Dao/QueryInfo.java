package org.Dao;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

public class QueryInfo {
	String drv = "com.mysql.cj.jdbc.Driver";
	String url = "jdbc:mysql://localhost:3306/children_study?useSSL=false&serverTimezone=UTC";
	String usr = "root";
	String pwd = "949462395";

	public double Query_Correct(String username) {
		/*
		 * 返回一个包含30条String的数组
		 * 每道题目为一个String
		 * 保证难度为grade
		 */
		String sql = "SELECT * FROM `userinfo` WHERE  username = "+username+ "'";
		double ratio=0;
		try {
			Class.forName(drv);
			Connection connect = DriverManager.getConnection(url, usr, pwd);
			Statement stm = connect.createStatement();
			ResultSet rs = stm.executeQuery(sql);
			if(rs.next()) {
				int tot=rs.getInt("total_prob");
				int cor=rs.getInt("correct_prob");
				if(tot!=0)
				ratio=(double)cor/tot;
				
			}
			rs.close();
			stm.close();
			connect.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ratio;
	}
	
	/*public ArrayList<String> Query_Wrong_Problem(String username) {
		String sql = "SELECT * FROM `userinfo` WHERE  username = "+username+ "'";
		try {
			Class.forName(drv);
			Connection connect = DriverManager.getConnection(url, usr, pwd);
			Statement stm = connect.createStatement();
			ResultSet rs = stm.executeQuery(sql);
			if(rs.next()) {
				
			}
			rs.close();
			stm.close();
			connect.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return problem;
	}*/
}
