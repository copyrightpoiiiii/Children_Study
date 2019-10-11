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
$(document).ready(function(){
    drawCircle();
    percent(50);
});