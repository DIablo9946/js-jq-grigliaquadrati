// BONUS:
// 1 - Sopra alla griglia deve esserci un contatore che conta quanti
// rossi e quanti verdi sono stati scoperti;
// 2 - generazione dinamica,  random,  della griglia (anche qui potrei
// scomporre in 2 problemi, prima mi preoccupo di come generala da js e poi
// in caso, come rendere random la distribuzione dei rettangoli rossi).
// NOTE=
// faccio come sempre la versione BASE dell’ex in una cartella,
// se poi ho concluso e ho capito tutto quello che ho fatto, allora provo
// i bonus in un’altra cartella

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
