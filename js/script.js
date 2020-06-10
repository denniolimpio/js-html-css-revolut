$(document).ready(

  function(){

// DEBUG
$(".with-dropdown").mouseenter(
  function(){

$(this).children(".dropdown").addClass("active");


});

$(".with-dropdown").mouseleave(

  function () {
  $(this).children(".dropdown").removeClass("active");

});


// Con un doppio click chiudo il menu se è aperto, altrimenti lo chiudo.

$(".with-dropdown").dblclick(

  function(){

  if( $(".dropdown").hasClass("active") ) {
    $(this).children(".dropdown").removeClass("active");

  } else {
    $(this).children(".dropdown").addClass("active");

  }
})



});
