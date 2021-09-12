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



function sendMessage() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    if(name.length === 0){
        alert("Enter your name!");
        break;
    }
    else if(email.length === 0){
        alert("Enter your email!");
        break;
    }
    else if(message.length === 0){
        alert("Write your message!");
        break;
    }
    else{
        alert("Hey" + name + ", We have receiived your message. Thank you for reaching out to us.")
    }
}