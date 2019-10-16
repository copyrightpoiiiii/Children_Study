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
<script
	src="https://lib.sinaapp.com/js/jquery/2.0.2/jquery-2.0.2.min.js"
	type="text/javascript">
</script>
</head>
<body>
	<div class="title">
		<img src="../pics/title2.png" height="60" width=400
			alt="Children Study" />
	</div>
	<%
			String name="";
			if (request.getParameter("uname") != null)
				name=request.getParameter("uname").toString();
		%>
	<div id="problems">
		<%
			int grade = Integer.parseInt(request.getParameter("grade"));
			int type1=0,type2=0,type3=0,type4=0;
			if(request.getParameter("type1")!=null&&request.getParameter("type1").equals("on"))
				type1=1;
			if(request.getParameter("type2")!=null&&request.getParameter("type2").equals("on"))
				type2=1;
			if(request.getParameter("type3")!=null&&request.getParameter("type3").equals("on"))
				type3=1;
			if(request.getParameter("type4")!=null&&request.getParameter("type4").equals("on"))
				type4=1;
			GetProblem new_get = new GetProblem();
			ArrayList<String> problem = new_get.Query(grade,type1,type2,type3,type4);
		%>
		<div>
			<%
				for (int i = 0; i < problem.size(); i++) {
			%>
			<span class="pb" id="problem<%=i%>"><%=problem.get(i)%></span> <input
				class="pb" id="answer<%=i%>" type="text" style="width: 100px">
			<span class="pb" id="right<%=i%>"></span> <br></br>
			<%
				}
			%>
			<% 
				if(problem.size()==0){
			%>
				<script type="text/javascript" language="javascript">
					alert("啊哦，没有满足要求的题目呢TAT");
					window.history.back(-1);
				</script> 
			<%
				//session.setAttribute("uname",name);
 				//pageContext.forward("choice.jsp");
				}
			%>
			<button class="pbbtn" type="button"
				onclick="judge(<%=problem.size()%>)">提交</button>
		</div>
	</div>

</body>
</html>