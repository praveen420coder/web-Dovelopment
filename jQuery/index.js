// $("button").click(function(){
//     $("h1").css("color","purple");
// });
// $("input").keypress(function(event){
//     $("h1").html(event.key);
// });
// $("h1").on("mouseover",function(){
//     $("h1").css("color","red");
// });
$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});