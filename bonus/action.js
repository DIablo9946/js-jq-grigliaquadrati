// BONUS:
// 1 - Sopra alla griglia deve esserci un contatore che conta quanti
// rossi e quanti verdi sono stati scoperti;


var contRed;
contRed = 0;
var contGreen;
contGreen = 0;


$( document ).ready(function() {



$(".col-sm:not(.red)").click(function(){
  $(this).css("background", "green");
  contGreen++;
  $("#contGreen").text("Quadratini verdi : " + contGreen);
});

$(".red").click(function(){
  $(this).css("background", "red");
  contRed++;
  $("#contRed").text("Quadrati rossini : " + contRed);
});


});
