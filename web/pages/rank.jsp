<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ page import="org.Dao.GetRank" %>
<%@ page import="java.text.DecimalFormat" %>
<%@ page import="java.util.ArrayList" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>children study</title>
    <script src="../js/jquery-3.4.1.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/problems.css">
    <script src="../js/rank.js"></script>
    <script
            src="https://lib.sinaapp.com/js/jquery/2.0.2/jquery-2.0.2.min.js"
            type="text/javascript">
    </script>
</head>
<body>
<ul>
    <li><a href="home.jsp">返回首页</a></li>
</ul>
<div class="title">
    <img src="../pics/title2.png" height="60" width=400
         alt="Children Study"/>
</div>

<div id="problems">
    <br></br>

    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;总题数排行榜</li>
    <%
        GetRank new_get = new GetRank();
        ArrayList<String> problem = new_get.QueryTot();
    %>
    <div>
        <%
            for (int i = 0; i < problem.size(); i += 2) {
        %>
        <span class="pb" id="name<%=i%>"><%=problem.get(i)%></span>
        <span class="pb2" id="tot<%=i%>"><%=problem.get(i + 1)%></span>
        <br></br>
        <%
            }
        %>
    </div>
    <br></br>
    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正确率排行榜</li>
    <%
        problem = new_get.QueryRat();
    %>
    <div>
        <%
            for (int i = 0; i < problem.size(); i += 3) {
                Double a = Double.parseDouble(problem.get(i + 1));
                Double b = Double.parseDouble(problem.get(i + 2)) * 100.0;
                Double c = b / a;
                DecimalFormat df = new DecimalFormat("0.00");
                String s = df.format(c);
        %>
        <span class="pb" id="name<%=i%>"><%=problem.get(i)%></span>
        <span class="pb2" id="tot<%=i%>"><%=s + "%"%></span>
        <br></br>
        <%
            }
        %>
    </div>
</div>
</body>
</html>