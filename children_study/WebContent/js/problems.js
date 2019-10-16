 type="text/javascript"
/*只允许输入数字*/
$(document).ready(function() {
	$("span").find("input").keypress(function(event) {
		return event.which >= 48 && event.which <= 57;
	});
	$("button").click(function() {
		var flag = true;
		$("input").each(function() {
			if ($(this).val().length === 0) {
				$(this).addClass("ansEmpty");
				flag = false;
			} else {
				$(this).parent().removeClass("ansEmpty")
			}
		});
	});
});

function judge(num) {
	for (var i = 0; i < num; i++) {
		var tex = "#problem" + i;
		var $problem = $(tex).text();
		tex = "#answer" + i;
		var $answer= $(tex).val();
		$.ajax({
			type:"post",
			async:false,
			url:"../JudgeServlet",
			contentType:"utf-8",
			data:
				"problem="+$problem+"&answer="+$answer,
			success:function(re_data){
				var nam="#right"+i;
				alert(re_data);
				if(re_data=="true"){
					$(nam).text("正确");
				}
				else {
					$(nam).text("错误");
				}
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){
				alert("啊哦，出错了QAQ");
				alert(XMLHttpRequest.status);
			　　alert(XMLHttpRequest.readyState);
			　　　　alert(textStatus);
			}
		});
	}
}