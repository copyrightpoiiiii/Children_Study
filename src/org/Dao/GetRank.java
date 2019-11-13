package org.Dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

public class GetRank {
    String drv = "com.mysql.cj.jdbc.Driver";
    String url = "jdbc:mysql://localhost:3306/children_study?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true";
    String usr = "root";
    String pwd = "949462395";

    public ArrayList<String> QueryTot() {
        /*
         * 返回一个包含30条String的数组
         * 每道题目为一个String
         * 保证难度为grade
         */
        ArrayList<String> problem = new ArrayList<String>();
        String sql = "SELECT * FROM userinfo  ORDER BY total_prob DESC LIMIT 10";
        try {
            Class.forName(drv);
            Connection connect = DriverManager.getConnection(url, usr, pwd);
            Statement stm = connect.createStatement();
            ResultSet rs = stm.executeQuery(sql);
            while (rs.next()) {
                problem.add(rs.getString("username"));
                problem.add(rs.getInt("total_prob") + "");
            }
            rs.close();
            stm.close();
            connect.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return problem;
    }

    public ArrayList<String> QueryRat() {
        /*
         * 返回一个包含30条String的数组
         * 每道题目为一个String
         * 保证难度为grade
         */
        ArrayList<String> problem = new ArrayList<String>();
        String sql = "SELECT * FROM userinfo  ORDER BY (correct_prob/total_prob) DESC LIMIT 10";
        try {
            Class.forName(drv);
            Connection connect = DriverManager.getConnection(url, usr, pwd);
            Statement stm = connect.createStatement();
            ResultSet rs = stm.executeQuery(sql);
            while (rs.next()) {
                problem.add(rs.getString("username"));
                problem.add(rs.getInt("total_prob") + "");
                problem.add(rs.getInt("correct_prob") + "");
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
