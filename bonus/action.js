// BONUS:
// 1 - Sopra alla griglia deve esserci un contatore che conta quanti
// rossi e quanti verdi sono stati scoperti;


var contRed;
contRed = 0;
var contGreen;
contGreen = 0;


$( document ).ready(function() {

if ($("div").hasClass("red")) {
  $(".red").click(function(){
    $(this).css("background", "red");
    contRed++;
    $("#contRed").text("Quadrati rossini : " + contRed);
  });
} else if ($("div").hasClass("col-sm")) {
  $(".col-sm").click(function(){
    $(this).css("background", "green");
    contGreen++;
    $("#contGreen").text("Quadratini verdi : " + contGreen);
  });
}



});
