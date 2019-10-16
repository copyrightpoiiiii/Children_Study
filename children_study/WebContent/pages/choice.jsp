<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>题目选择</title>
<link rel="stylesheet" href="../css/choice.css">
<script src="../js/choice.js"></script>
<link rel="stylesheet"
	href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet"
	href="http://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
<link rel="stylesheet" href="../css/star-rating.min.css" media="all"
	type="text/css" />
<script
	src="https://lib.sinaapp.com/js/jquery/2.0.2/jquery-2.0.2.min.js"></script>
<script src="../js/star-rating.js" type="text/javascript"></script>
</head>
<body>
	<div class="title">
		<img src="../pics/title2.png" height="60" width=400 />
	</div>
	<form action="problems.jsp" method="post">
		<ul>
			<li>难度</li>
		</ul>
		<div id="pblevel" style="margin-left: 15px; padding-left: 20%">
			<input id="grade" type="text" name="grade" class="rating"
				data-size="xl" />
		</div>
		<ul> 
			<li>类型</li>
		</ul>
		<div id="pbtype" style="margin-left: 15px; padding-left: 20%">
			<input type="checkbox" id="type1" name="type1" hidden> 
			<label for="type1" class="pbtype">＋</label> 
			<input type="checkbox" id="type2" name="type2" hidden> 
			<label for="type2" class="pbtype">－</label> 
			<input type="checkbox" id="type3" name="type3" hidden> 
			<label for="type3" class="pbtype">×</label>
			<input type="checkbox" id="type4" name="type4" hidden> 
			<label for="type4" class="pbtype">÷</label>
		</div>
		<button class="mybtn" type="submit">GO!</button>
	</form>
	<div id="usergreet">
		<%
			if (request.getParameter("uname") != null)
				out.print(request.getParameter("uname"));
			else
				out.print("下一个天才儿童");
		%>，你醒了？<br></br>该做题了！
		<!--根据用户名进行打招呼233-->
	</div>
</body>
</html>