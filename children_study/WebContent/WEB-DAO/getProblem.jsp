<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="org.Dao.GetProblem" %>
<%@ page import="java.util.ArrayList" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
		int grade =  Integer.parseInt(request.getParameter("grade"));
		GetProblem getP=new GetProblem();
		ArrayList<String> problem=getP.Query(grade);
	%>
</body>
</html>