// BONUS:
// 1 - Sopra alla griglia deve esserci un contatore che conta quanti
// rossi e quanti verdi sono stati scoperti;


var contRed;
contRed = 0;
var contGreen;
contGreen = 0;


$( document ).ready(function() {


$(".col-sm:not(.red)").click(function(){
  console.log($(this).hasClass("clicked"));
  if ($(this).hasClass("clicked") === false) {
    $(this).addClass("green");
  contGreen++;
  $("#contGreen").text("Quadratini verdi : " + contGreen);
   $(this).addClass("clicked");
 };
});

$(".red").click(function(){
    if ($(this).hasClass("clicked") === false) {
  $(this).addClass("redc");
  contRed++;
  $("#contRed").text("Quadrati rossini : " + contRed);
   $(this).addClass("clicked");
 };
});



// Chiedere come mai il controllo non funziona


});
