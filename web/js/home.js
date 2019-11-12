type = "text/javascript";

function login() {
    var popbox = document.getElementById("pbx1");
    var poplayer = document.getElementById("poplayer");
    poplayer.style.display = "block";
    popbox.style.display = "block";
}

function reg() {
    var popbox = document.getElementById("pbx2");
    var poplayer = document.getElementById("poplayer");
    poplayer.style.display = "block";
    popbox.style.display = "block";
}

function closebox(obj) {
    var poplayer = document.getElementById("poplayer");
    poplayer.style.display = "none";
    obj.parentElement.style.display = "none";
}

function judge1() {
    var $username = $("#username").val();
    $username = encodeURIComponent($username);
    var $password = $("#passwd").val();
    $password = encodeURIComponent($password);
    $.ajax({
        type: "post",
        async: false,
        url: "../LoginServlet",
        //contentType:"utf-8",
        data:
            "uname=" + $username + "&upwd=" + $password,
        success: function (re_data) {
            var nam = "#loginfo";
            if (re_data == "true") {
                $(nam).text("登录成功");
                window.location.replace("check.jsp" + "?username=" + $username);
            } else {
                $(nam).text("用户名或密码错误!");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status + XMLHttpRequest.readyState + textStatus);
            // 状态
            // 错误信息   
            //alert("啊哦，出错了QAQ");
        }
    });
}


function reg1() {
    var $username = $("#regname").val();
    $username = encodeURIComponent($username);
    var $pwd1 = $("#pw1").val();
    var $pwd2 = $("#pw2").val();
    var $grade = $("#grade").val();
    $pwd1 = encodeURIComponent($pwd1);
    $grade = encodeURIComponent($grade);
    $pwd2 = encodeURIComponent($pwd2);
    if ($pwd1 == $pwd2) {
        $.ajax({
            type: "post",
            async: false,
            url: "../RegServlet",
            //contentType:"utf-8",
            data:
                "regname=" + $username + "&grade=" + $grade + "&upw=" + $pwd1,
            success: function (re_data) {
                var nam = "#regInfo";
                if (re_data == "true") {
                    $(nam).text("注册成功");
                    window.location.replace("check.jsp" + "?username=" + $username);
                } else {
                    $(nam).text("用户名已被使用!");
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(XMLHttpRequest.status + XMLHttpRequest.readyState + textStatus);
                // 状态
                // 错误信息
                //alert("啊哦，出错了QAQ");
            }
        });
    } else {
        var nam = "#regInfo";
        $(nam).text("两次密码输入不一致!");
    }
}


