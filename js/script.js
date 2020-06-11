$(document).ready(


  function(){
// Se passo con il mouse su un elemento con dropdown (non visibile) questo appare.
$(".with-dropdown").mouseenter(
  function(){

$(this).children(".dropdown").addClass("active");


});

// Se sposto  il mouse da un elemento con dropdown visibile  questo si chiude

$(".with-dropdown").mouseleave(

  function () {
  $(this).children(".dropdown").removeClass("active");

});


// Con un doppio click chiudo il menu a comparsa se è aperto,
// altrimenti lo apro.

$(".with-dropdown").dblclick(

  function(){

  if( $(".dropdown").hasClass("active") ) {
    $(this).children(".dropdown").removeClass("active");

  } else {
    $(this).children(".dropdown").addClass("active");

  }
})

// Se "IT" è attivo l'icona freccia punta verso l'alto, altrimenti verso il basso





});
