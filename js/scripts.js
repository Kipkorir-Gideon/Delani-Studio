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
        $(this).find(".whenHover").show({opacity: 0.7});
    },
    function() {
        $(this).find(".whenHover").hide();
    });
});