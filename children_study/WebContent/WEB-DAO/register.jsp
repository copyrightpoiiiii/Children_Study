<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="org.Dao.Register" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src="../js/bootstrap.min.js"></script>
    <script src="../js/jquery-3.4.1.min.js"></script>
    <script src="../js/home.js"></script>
<title>Insert title here</title>
</head>
<body>
	<%
		String name = request.getParameter("regname");
		int grade=Integer.parseInt(request.getParameter("grade"));
		String pwd = request.getParameter("upw1");
		String pwd_c = request.getParameter("upw2");
		Register new_user=new Register();
		if(!pwd.equals(pwd_c)){
			out.print(pwd);
			out.print(pwd_c);
			out.print("can't match two passwords!");
		}
		else{
			boolean result=new_user.new_user_register(name, pwd, grade);
			if(result == true){
				out.print("success!");
			}
			else {
				out.print("failed!");
			}
		}
		
	%>

</body>
</html>