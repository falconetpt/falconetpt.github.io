$( document ).ready(function() {
  // MVC object model
  $.jStorage.set("tests", "Hello",  "https://falconetpt.github.io/isep/aprog/data/exercises.txt");
  //Funçao acordiao
  $( function() {
      $( "#accordion" ).accordion();
  } );
  var value = $.jStorage.index()
  console.log(value);
});