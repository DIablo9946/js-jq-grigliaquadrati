// 2 - generazione dinamica,  random,  della griglia (anche qui potrei
// scomporre in 2 problemi, prima mi preoccupo di come generala da js e poi
// in caso, come rendere random la distribuzione dei rettangoli rossi).

var contRed, contGreen, casuale;
contRed = 0;
contGreen = 0;
casuale = Math.floor(Math.random() * 3) + 1;


$( document ).ready(function() {

if ($("div").hasClass("red")) {
  $(".red").click(function(){
    $(this).css("background", "red");
    contRed++;
    $("#contRed").text("Quadrati rossini : " + contRed);
  });
} else if ($("div").hasClass("green")) {
  $(".green").click(function(){
    $(this).css("background", "green");
    contGreen++;
    $("#contGreen").text("Quadratini verdi : " + contGreen);
  });
}

// Provo a fare la generazione dei colori casuale

$("div").click(function{
  casuale;
});

if (casuale == 1) {

} else if (casuale == 2) {

}


});
