// 2 - generazione dinamica,  random,  della griglia (anche qui potrei
// scomporre in 2 problemi, prima mi preoccupo di come generala da js e poi
// in caso, come rendere random la distribuzione dei rettangoli rossi).

var contRed, contGreen, casuale;
contRed = 0;
contGreen = 0;



$( document ).ready(function() {

// Provo a fare la generazione dei colori casuale

$(".col-sm").click(function(){
  casuale = Math.floor(Math.random() * 2) + 1;
  console.log(casuale);

  if ($(this).hasClass("clicked") === false) {

  if (casuale === 1) {
      $(this).css("background", "green");
      contGreen++;
      $("#contGreen").text("Quadratini verdi : " + contGreen);
  }
  if (casuale === 2) {
      $(this).css("background", "red");
      contRed++;
      $("#contRed").text("Quadratini rossi : " + contRed);
  };
  $(this).addClass("clicked");
};
});




});
