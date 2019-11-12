<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ page import="org.Dao.QueryInfo" %>
<%@ page import="java.text.DecimalFormat" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ChildrenStudy</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <style>
        @import url(../css/welcome.css);
    </style>
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/jquery-3.4.1.min.js"></script>
    <script src="../js/home.js"></script>
    <title>Insert title here</title>
</head>
<body>
<div style="text-align: center; margin-top: 50px;">
    <a href="#" class="mybtn">
        <h1>
            欢迎回来,
            <%=session.getAttribute("username")%>
        </h1>
    </a>
</div>
<%
    String name = session.getAttribute("username").toString();
    QueryInfo ask = new QueryInfo();
    double ratio = ask.Query_Correct(name);
    DecimalFormat df = new DecimalFormat("0.00");
    String s = df.format(ratio);
%>
<div style="text-align: center; margin-top: 50px;">
    <a href="#" class="mybtn">
        <h1>
            你当前的正确率是：
            <%=s%>
            %
        </h1>
    </a>
</div>
<div style="text-align: center; margin-top: 50px;">
    <a href="choice.jsp?uname=<%=name%>" class="mybtn">开始今天的冒险</a>
</div>
</body>
</html>