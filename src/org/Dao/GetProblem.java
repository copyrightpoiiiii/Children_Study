package org.Dao;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

public class GetProblem {
    String drv = "com.mysql.cj.jdbc.Driver";
    String url = "jdbc:mysql://localhost:3306/children_study?useSSL=false&serverTimezone=UTC";
    String usr = "root";
    String pwd = "949462395";

    public ArrayList<String> Query(int grade, int type1, int type2, int type3, int type4) {
        /*
         * 返回一个包含30条String的数组
         * 每道题目为一个String
         * 保证难度为grade
         */
        ArrayList<String> problem = new ArrayList<String>();
        String fsql = "";
        int pre = 0;
        if (type1 == 1) {
            fsql += "type1=" + type1 + "";
            pre = 1;
        }
        if (type2 == 1) {
            if (pre == 1) fsql += " OR ";
            fsql += "type2=" + type2 + "";
            pre = 1;
        }
        if (type3 == 1) {
            if (pre == 1) fsql += " OR ";
            fsql += "type3=" + type3 + "";
            pre = 1;
        }
        if (type4 == 1) {
            if (pre == 1) fsql += " OR ";
            fsql += "type4=" + type4 + "";
            pre = 1;
        }
        String sql = "SELECT * FROM `problem` WHERE  level = " + grade + "" + " AND (" + fsql + ") ORDER BY Rand() LIMIT 30";
        try {
            Class.forName(drv);
            Connection connect = DriverManager.getConnection(url, usr, pwd);
            Statement stm = connect.createStatement();
            ResultSet rs = stm.executeQuery(sql);
            while (rs.next()) {
                problem.add(rs.getString("problem"));
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
