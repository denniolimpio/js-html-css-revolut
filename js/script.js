$(document).ready( function()

{

// DEBUG
$(".with-dropdown").mouseenter(
  function(){

$(this).children(".dropdown").addClass("active");


});

$(".with-dropdown").mouseleave( function () {
  $(this).children(".dropdown").removeClass("active");

});


});
