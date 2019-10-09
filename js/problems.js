/*只允许输入数字*/
$(document).ready(function(){
   $("span").find("input").keypress(function(event){
       return event.which >= 48 && event.which <= 57;
       });
   $("button").click(function () {
       var flag=true;
       $("input").each(function () {
           if($(this).val().length===0){
               $(this).addClass("ansEmpty");
               flag=false;
           }
           else{$(this).parent().removeClass("ansEmpty")}
       });
   });
});
