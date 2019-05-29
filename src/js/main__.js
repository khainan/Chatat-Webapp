var emSize = parseFloat($("html").css("font-size"));

//cover image
$(".thumb img").fillBox();

//custom mouse cursor
$(document).ready(function(){
    var el = "<div class='cursor-outline'><span></span><span></span></div><div class='cursor-dot'></div>"
    $(el).insertAfter("#main");
});
$(document).mousemove(function(e){
    $(".cursor-outline").css({
        transform: "translate3d("+e.clientX+"px,"+e.clientY+"px, 0)"
            //top: e.pageY - 20,
            //left: e.pageX - 20
    });
    $(".cursor-dot").css({
        transform: "translate3d("+e.clientX+"px,"+e.clientY+"px, 0)"
        //top: e.pageY - 20,
        //left: e.pageX - 20
    });
});
$("a,input,button,label").mouseenter(function(){
    $(".cursor-outline").addClass("hover");
    //console.log($(this));
});
$("a,input,button,label").mouseleave(function(){
    $(".cursor-outline").removeClass("hover");
});

/*
$(document).mousedown(function(e) {
    $(".cursor-outline").addClass("clicked");
});
$(document).mouseup(function(e) {
    $(".cursor-outline").removeClass("clicked");
});
*/

$(".btn-top").click(function(){
   $("html,body").animate({scrollTop:0}, 160);
});