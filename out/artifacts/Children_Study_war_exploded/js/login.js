function draw() {
    var canvas = document.getElementById("lines");
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
        ctx.strokeStyle="#ffffff";
        ctx.fillStyle="#ffffff";
        ctx.lineWidth="2";
        ctx.font="20px sans_serif";
        ctx.beginPath();
        ctx.fillText("你当前的正确率为：",300,55);
        ctx.moveTo(200,50);
        ctx.lineTo(300,50);
        ctx.stroke();
        ctx.moveTo(250,50);
        ctx.lineTo(250,250);
        ctx.lineTo(570,250);
        ctx.stroke();
        ctx.moveTo(480,50);
        ctx.lineTo(510,50);
        ctx.stroke();
        ctx.moveTo(510,120);
        ctx.lineTo(510,250);
        ctx.stroke();
        ctx.closePath();
    }
}
draw();
var Dots = function () {
    this.canvas;
    this.ctx;
    //坐标半径
    this.x;
    this.y;
    this.r;
    //移动速度
    this.sx;
    this.sy;
};
Dots.prototype = {
    init:function (canvas,x,y) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.x = x || Math.random()*canvas.width;
        this.y = y || Math.random()*canvas.height;
        this.r = Math.random()*4+1;
        this.sx = Math.random()*4-2;
        this.sy = Math.random()*4-2;
    },
    update:function () {
        this.x = this.x + this.sx;
        this.y = this.y +this.sy;
        if(this.x < 0 || this.x > this.canvas.width){
            this.init(this.canvas);
        }
        if(this.y < 0 || this.y > this.canvas.height){
            this.init(this.canvas);
        }
        this.ctx.beginPath();
        this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
        this.ctx.fillStyle = 'rgb(0,' + Math.floor(255-0.3*this.y) + ',' +
            Math.floor(255-0.6*this.y) + ')';
        this.ctx.fill();
        this.ctx.closePath();
    },
    //鼠标跟随点
    mouseDot:function (x,y) {
        this.x = x;
        this.y = y-50;
        this.r = 2;
        this.ctx.beginPath();
        this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
        this.ctx.fillStyle="rgba(255,255,255,.8)";
        this.ctx.fill();
        this.ctx.closePath();
    }
};
function main () {
    var dotsArr = [],
        dotsNum = 0,
        maxNum = 0,
        overNum = 0,
        canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        width = parseInt(document.documentElement.clientWidth),
        height = parseInt(document.documentElement.clientHeight),
        area = width * height;
    //根据面积决定点数
    dotsNum = parseInt(area / 12000);
    maxNum = Math.round(dotsNum * 1.5);
    //初始化
    for(var i=0;i<dotsNum;i++){
        var dot = new Dots();
        dotsArr.push(dot);
        dot.init(canvas);
    }
    //点击增加点
    document.addEventListener('click',createDot);
    function createDot(e) {
        var tx = e.pageX,
            ty = e.pageY-50;
        if((tx > 0 && tx < width) && (ty > 0 && ty <height)){
            for(var i = 0;i<5;i++){
                var dot = new Dots();
                dotsArr.push(dot);
                dotsNum += 1;
                dot.init(canvas,tx,ty);
            }
        }
    }
    document.addEventListener('mousemove',moveDot);
    function moveDot(e) {
        var tx = e.pageX,
            ty = e.pageY;
        if((tx > 0 && tx < width) && (ty > 0 && ty <height)){
            dot.mouseDot(tx,ty);
        }
    }
    //动态粒子效果
    var requestAnimFrame = requestAnimationFrame || webkitRequestAnimationFrame;
    requestAnimFrame(animateUpdate);
    
    function animateUpdate() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        if(dotsNum > maxNum){
            overNum = dotsNum - maxNum;
        }
        for(var i = 0; i < dotsNum;i++){
            dotsArr[i].update();
        }
        requestAnimFrame(animateUpdate);
    }
}
$(document).ready(function () {
    main();
    draw();
});