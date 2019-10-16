package org.Dao;

import java.sql.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Judge{
	String drv = "com.mysql.cj.jdbc.Driver";
	String url = "jdbc:mysql://localhost:3306/children_study?useSSL=false&serverTimezone=UTC";
	String usr = "root";
	String pwd = "949462395";

	public boolean doPost(String problem,String answer) {
		boolean right=false;
		String sql = "select * from problem where problem='" + problem + "' and answer='" + answer + "';";
		try {
			Class.forName(drv);
			Connection connect = DriverManager.getConnection(url, usr, pwd);
			Statement stm = connect.createStatement();
			ResultSet rs = stm.executeQuery(sql);
			if (rs.next()) {
				right=true;
			}
			rs.close();
			stm.close();
			connect.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		if(right) {
			return true;
		}
		else {
			return false;
		}
	}

}
