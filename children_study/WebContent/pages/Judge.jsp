<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="org.Dao.Judge" %>
<%@ page import="java.util.ArrayList" %>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
		String problem = request.getParameter("problem");
		String answer = request.getParameter("answer");
		Judge check = new Judge();
		String result = check.judge(problem, answer);
		if (result == true) {
			session.setAttribute("username",name);
 			pageContext.forward("welcome.jsp");
	%>

</body>
</html>