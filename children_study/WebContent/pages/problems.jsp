<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="org.Dao.GetProblem"%>
<%@ page import="org.Dao.Judge"%>
<%@ page import="java.util.ArrayList"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>children study</title>
<script src="../js/jquery-3.4.1.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
<link rel="stylesheet" href="../css/bootstrap.min.css">
<link rel="stylesheet" href="../css/problems.css">
<script src="../js/problems.js"></script>
</head>
<body>
	<div class="title">
		<img src="../pics/title2.png" height="60" width=400
			alt="Children Study" />
	</div>
	<div id="problems">
		<%
			
			int grade = Integer.parseInt(request.getParameter("grade"));
			GetProblem new_get = new GetProblem();
			ArrayList<String> problem = new_get.Query(grade);
		%>
		<form action="Judge.jsp" method="post">
			<%
				for (String prob : problem) {
			%>
			<span class="pb" id="problem"><%=prob%></span>
			 <span class="pb" id="answer"><input type="text" /></span><br></br>
			<%
				}
			%>
			<button class="pbbtn" type="button">提交</button>
		</form>
	</div>

</body>
</html>