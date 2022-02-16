
$(document).ready(function(){
    var a = 0;
    $("#btnHamburgerJs").click(function(){
        $("#btnHamburgerJs").toggleClass("open");
        if(a == 0){
            a = 1;
            $("#behindJs").css("display", "block"); 
        }else{
            a = 0;
            $("#behindJs").css("display", "none"); 
        }
    });
});

// Navigation Link Mobile Hide navigation Link

$(document).ready(function(){
    var a = 0;
    $("#uBtnHamburgerJs").click(function(){
        $("#uBtnHamburgerJs").toggleClass("uOpen");
        if(a == 0){
            a = 1;
            $("#uNavIconsExtendJs").css("display","block");
            $("#uSeperatorHamburgerAndUnavExtendJs").css("display","block");
            $(".uHamburger").css("margin-left","5px");
        }else{
            a = 0;
            $("#uNavIconsExtendJs").css("display","none");
            $("#uSeperatorHamburgerAndUnavExtendJs").css("display","none");
            $(".uHamburger").css("margin-left","0px");
        }
    });
});
