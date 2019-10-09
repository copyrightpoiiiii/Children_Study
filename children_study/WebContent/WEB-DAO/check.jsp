<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="org.Dao.UserLogin" %>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
		String name = request.getParameter("uname");
		String pwd = request.getParameter("upwd");
		UserLogin log=new UserLogin();
		boolean result = log.Login(name, pwd);
		if(result == true){
			out.print("success!");
		}
		else {
			out.print("failed!");
		}
		
	%>

</body>
</html>