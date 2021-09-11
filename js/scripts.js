$(document).ready(function(){
    $(".shown").click(function(){
        $(this).toggle();
        $(this).siblings().toggle();
    });
    $(".hidden").click(function(){
        $(this).siblings().toggle();
        $(this).toggle();
    });
    $(".toHover").hover(function(){
        $(this).find(".whenHover").fadeIn();
    },
    function() {
        $(this).find(".whenHover").fadeOut();
    });
});