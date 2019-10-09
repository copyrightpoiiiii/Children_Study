function login() {
    var popbox = document.getElementById("pbx1");
    var poplayer = document.getElementById("poplayer");
    poplayer.style.display="block";
    popbox.style.display ="block";
}
function reg() {
    var popbox = document.getElementById("pbx2");
    var poplayer = document.getElementById("poplayer");
    poplayer.style.display="block";
    popbox.style.display="block";
}
function closebox(obj) {
    var poplayer = document.getElementById("poplayer");
    poplayer.style.display="none";
    obj.parentElement.style.display ="none";
}