var txt = '<p>只要你有想法，我们来帮你实现只要你有想法，我们来帮你实现只要你有想法，我们来帮你实现只要你有想法，我们来帮你实现只要你有想法，我们来帮你实现只要你有想法，我们来帮你实现只要你有想法，我们来帮你实现只要你有想法，我们来帮你实现只要你有想法，我们来帮你实现只要你有想法，我们来帮你实现只要你有想法，我们来帮你实现</p>';
        $("button.showMore").click(function() {
            $(".alert-content").append(txt);
            $("#mask").css('display', 'block');
            $("#alert-container").css("display", "block");
        });
    
        $("#close-alert-container").click(function() {
            $("#mask").css('display', 'none');
            $("#alert-container").css('display', 'none');
            $(".alert-content p").remove();
        })