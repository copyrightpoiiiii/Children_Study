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
 $(document).ready(function(){
     drawDeco();
     $(".pbbtn").click(function () {
         $("#result").css("display","block");
     })
 });

function judge(num,name) {
	var tot=0;
	for (var i = 0; i < num; i++) {
		var tex = "#problem" + i;
		var $problem = $(tex).text();
		tex = "#answer" + i;
		var $answer=$(tex).val();
		//window.alert($problem);
		//window.alert($answer);
		//window.alert("test");
		$.ajax({
			type:"post",
			async:false,
			url:"../JudgeServlet",
			//contentType:"utf-8",
			data:
				"problem="+encodeURIComponent(encodeURIComponent($problem))+"&answer="+encodeURIComponent(encodeURIComponent($answer)),
			success:function(re_data){
				var nam="#right"+i;
				if(re_data=="true"){
					$(nam).text("正确");
					tot=tot+1;
				}
				else {
					$(nam).text("错误");
				}
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){
				alert("啊哦，出错了QAQ");
			}
		});
	}
	var tex=$("#check").text();
	if(tex==" "){
		$("#check").text("  ");
		var popbox = document.getElementById("pbx1");
	    popbox.style.display ="block";
		drawCircle();
	    if(num!=0)percent(100*tot/num);
	    else percent(0);
		$.ajax({
			type:"post",
			async:false,
			url:"../UpdateServlet",
			//contentType:"utf-8",
			data:
				"total="+num+"&correct="+tot+"&name="+name,
			success:function(re_data){
				
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){
				alert("啊哦，出错了QAQ");
			}
		});
	}
}

function drawCircle(){
    var canvas = document.getElementById('acc');
    if(!canvas.getContext) return;
    var circle = canvas.getContext("2d");
    circle.lineWidth=15;
    circle.strokeStyle="rgba(180,180,180,0.65)";
    circle.beginPath();
    circle.arc(110,110,100,0,Math.PI*2,true);
    circle.stroke();
}
function percent(num){/*绘制进度条*/
    var canvas = document.getElementById('acc')
    var pct = canvas.getContext("2d");
    var rate = 0;
    pct.lineWidth=15;
    pct.strokeStyle="#FFAF00";
    pct.textAlign="center";
    pct.textBaseline = "middle";
    pct.font = "25px bold Arial";
    pct.fillStyle="#000000";
    (function animatePct() {
        if(rate >= num){return;}
        else{
            pct.clearRect(80,80,80,80);
            pct.lineWidth=15;
            rate=rate+0.5;
            window.requestAnimationFrame(animatePct);
            pct.beginPath();
            pct.arc(110,110,100,Math.PI*(-0.5),Math.PI*(rate*3.6-90)/180,false);
            pct.stroke();
            pct.restore();
            pct.lineWidth = 2;
            pct.fillText(Math.round(rate)+"%",110,110);
        }
    }());
}



/*矩形原型*/
var rects = function () {
    this.canvas;
    this.ctx;
    this.y;
    this.h;
    this.dir;
    this.max;
};
rects.prototype = {
    init:function (canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.y = 130;
        this.h = (Math.random()+Math.random())*50+20;
        this.dir = Math.round(Math.random());
        if(this.dir === 0) this.dir = -1;
        this.max = (Math.random()+Math.random())*60+30;
    },
    update:function (i) {
        this.h = this.h + this.dir*2;
        if(this.h <= 10){
            this.h=10;
            this.dir = 1;
        }
        if(this.h >= this.max){
            this.h = this.max;
            this.dir = -1;
        }
        this.ctx.fillStyle="rgba(165,214,63)";
        this.ctx.fillRect(40*i+80,this.y-this.h,20,this.h);
    }
};
/*题目下方装饰*/
function drawDeco() {
    var canvas = document.getElementById('deco'),
        ctx = canvas.getContext('2d');
    var deco = [];
    for(var i=0;i<30;i++){
        var rectangle = new rects();
        rectangle.init(canvas,i);
        deco.push(rectangle);
    }

    function drawRect() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        for(var i=0;i<30;i++){
            deco[i].update(i);
        }
        window.requestAnimationFrame(drawRect);
    }
    window.requestAnimationFrame(drawRect);
}
function closebox(obj) {
	var popbox = document.getElementById("pbx1");
    popbox.style.display="none";
    obj.parentElement.style.display ="none";
}