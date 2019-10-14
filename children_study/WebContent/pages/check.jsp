<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="org.Dao.UserLogin"%>
<%@ page import="org.Dao.QueryInfo"%>
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
		UserLogin log = new UserLogin();
		boolean result = log.Login(name, pwd);
		if (result == true) {
			session.setAttribute("username",name);
 			pageContext.forward("welcome.jsp");
		} else {
	%>
	<%
			pageContext.forward("home.jsp");
		}
	%>

</body>
</html>