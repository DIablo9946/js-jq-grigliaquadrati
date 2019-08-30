// NOME REPO= js-jq-grigliaquadrati
// DESCRIZIONE=
// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati
// diventano rossi, gli altri diventano verdi



$( document ).ready(function() {

if ($("div").hasClass("red")) {
  $(".red").click(function(){
    $(this).css("background", "red");
  });
} else if ($("div").hasClass("col-sm")) {
  $(".col-sm").click(function(){
    $(this).css("background", "green");
  });
}



});
