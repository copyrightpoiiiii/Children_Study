package org.Dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class Judge {
    String drv = "com.mysql.cj.jdbc.Driver";
    String url = "jdbc:mysql://localhost:3306/children_study?useSSL=false&serverTimezone=UTC";
    String usr = "root";
    String pwd = "949462395";

    public boolean doPost(String problem, String answer) {
        boolean right = false;
        String sql = "select * from problem where problem='" + problem + "' and answer='" + answer + "';";
        try {
            Class.forName(drv);
            Connection connect = DriverManager.getConnection(url, usr, pwd);
            Statement stm = connect.createStatement();
            ResultSet rs = stm.executeQuery(sql);
            if (rs.next()) {
                right = true;
            }
            rs.close();
            stm.close();
            connect.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return right;
    }

}
