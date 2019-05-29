var emSize = parseFloat($("html").css("font-size"));

//onload
$(window).on("load",function() {
	"use strict";
	setTimeout(loader, 600);
	function loader(){
		$("body").addClass("load");
	}
});
$("a[href]:not([href='#!'],[href='javascript:;'],[data-toggle='modal'])").click(function(e){
    e.preventDefault();
	linkDelay();
	var url = $(this).attr("href");
    function linkDelay(){
        setTimeout(function() {
            window.location.href = url;
        }, 900);
    }
    $("body").addClass("page-load");
    console.log($(this));
});

//cover image
$(".thumb img").fillBox();

//show password
$(".show-pass").click(function(){
    $(this).parent().toggleClass("show");
    if($(this).parent().hasClass("show")){
        $(this).parent().find("input").attr("type","text");
    } else {
        $(this).parent().find("input").attr("type","password");
    }
});

//selectpicker
$("select").selectpicker({
    style: "btn-select",
    size: 5
});

//perfect scrollbar
$("[scroll],.selectric-scroll,.bootstrap-select .dropdown-menu > .inner[role='listbox']").perfectScrollbar({
    wheelSpeed: .3,
    wheelPropagation: true
});

//tooltip
$("[data-toggle='tooltip']").tooltip();

//onload modal
$(window).on("load",function(){
    setTimeout(function(){
        $(".auto-modal").modal("show");
    },1450);
});

/*
//when element visible on screen
$.fn.visible = function(partial){
    var $t              = $(this),
        $w              = $(window),
        viewTop         = $w.scrollTop(),
        viewBottom      = viewTop + $w.height(),
        _top            = $t.offset().top,
        _bottom         = _top + $t.height(),
        compareTop      = partial === true ? _bottom : _top,
        compareBottom   = partial === true ? _top : _bottom;
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
}
$(document).ready(function(e){
    checkVisible();
});
$(window).scroll(function(e){
    checkVisible();    
});
function checkVisible(){
    $(".anim").each(function(i,k){
        if($(this).visible()){
            $(k).addClass('visible');
        }
    });
}

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
$("a,input,button,select,.checkbox label,.checkbox-btn label").mouseenter(function(){
    $(".cursor-outline").addClass("hover");
    //console.log($(this));
});
$("a,input,button,select,.checkbox label,.checkbox-btn label").mouseleave(function(){
    $(".cursor-outline").removeClass("hover");
});

$("select").selectpicker({
    style: "btn-select",
    size: 5
});

//modal
$(".modal").on("shown.bs.modal", function() {
	if($("body").hasClass("modal-open")){
		$(this).find(".container").append("<div class='backdrop'></div>");
	}
    
    $(document).keyup(function(e) {
        //if (e.keyCode === 13) $('.save').click();     // enter
        if(e.keyCode === 27){
            $(".backdrop").remove();
            $(".modal").modal("hide");
        }  // esc
    });
	
	$(".backdrop").click(function(){
		$(this).parents(".modal").modal("hide");
		$(".backdrop").remove();
	});
});

//close alert
$("[data-dismiss='banner-alert']").click(function(){
    $(".banner-alert").addClass("hidden");
});
$(".banner-toggle").click(function(){
    $(".banner-alert").removeClass("hidden");
});
*/

// get current date
    var date = new Date();
    var months = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    var val = date.getDate()+" "+months[date.getMonth()]+", "+date.getFullYear();
    $("#current-date").text(val);

$(".step-btn-next").click(function() {
    event.preventDefault();
    $(".step-content").animate({
        scrollLeft: "+=60px"
    },200);
    console.log($(".step-content").animate)
});

$(".step-btn-prev").click(function() {
    event.preventDefault();
    $(".step-content").animate({
        scrollLeft: "-=60px"
    },200);
});

//split dots
    function reverseNumber(input) {
    return [].map.call(input, function(x) {
        return x;
    }).reverse().join(''); 
    }
    function plainNumber(number) {
        return number.split('.').join('');
    }
    function splitInDots(input) {
        var value = input.value,
            plain = plainNumber(value),
            reversed = reverseNumber(plain),
            reversedWithDots = reversed.match(/.{1,3}/g).join('.'),
            normal = reverseNumber(reversedWithDots);
        //console.log(plain,reversed, reversedWithDots, normal);
        input.value = normal;
    }

var sHeader = $(".section-header").outerHeight() + 84;
                        $("#underconstruction").css({
                            "height": "calc(100vh - "+sHeader+"px)",
                        });