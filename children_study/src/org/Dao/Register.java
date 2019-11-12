package org.Dao;
import java.sql.*;

public class Register {
	String drv = "com.mysql.cj.jdbc.Driver";
	String url = "jdbc:mysql://localhost:3306/children_study?useSSL=false&serverTimezone=UTC";
	String usr = "root";
	String pwd = "949462395";

	public boolean new_user_register(String id, String password,int grade) {
		/*
		 * 传入用户的id，password和grade
		 * 如果没有重复id，则注册成功
		 * 返回true时表示注册成功，false表示用户名已存在
		 */
		boolean existance=false;
		String sql = "select * from userinfo where username='" + id + "'";
		try {
			Class.forName(drv).newInstance();
			Connection connect = DriverManager.getConnection(url, usr, pwd);
			Statement stm = connect.createStatement();
			ResultSet rs = stm.executeQuery(sql);

			if (!rs.next()) {
				sql = "insert into userinfo(username,password,grade) values('"+id+"','"+password+"','"+grade+"')";
				stm.execute(sql);
				existance = true;
			}
			rs.close();
			stm.close();
			connect.close();

		} catch (Exception e) {
			e.printStackTrace();
		}
		if(existance) {
			return true;
		}
		else return false;
	}
}
