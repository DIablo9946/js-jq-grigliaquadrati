// 2 - generazione dinamica,  random,  della griglia (anche qui potrei
// scomporre in 2 problemi, prima mi preoccupo di come generala da js e poi
// in caso, come rendere random la distribuzione dei rettangoli rossi).

var contRed, contGreen, casuale;
contRed = 0;
contGreen = 0;



$( document ).ready(function() {

// Provo a fare la generazione dei colori casuale

$(".col-sm").click(function(){
  casuale = Math.floor(Math.random() * 3) + 1;
  console.log(casuale);
});

if (casuale === 1) {
   $(".col-sm").click(function(){
    $(this).css("background", "green");
    contGreen++;
    $("#contGreen").text("Quadratini verdi : " + contGreen);
  });
}
if (casuale === 2) {
   $(".col-sm").click(function(){
    $(this).css("background", "green");
    contRed++;
    $("#contRed").text("Quadratini rossi : " + contRed);
  });
};


});
