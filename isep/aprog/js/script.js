$( document ).ready(function() {
  // MVC object model
  $.jStorage.set("tests", "Hello",  "https://falconetpt.github.io/isep/aprog/data/exercises.txt");
  
  var value = $.jStorage.index()
  
  console.log(value);
  
  //Funçao acordiao
  $( function() {
      $( "#accordion" ).accordion();
  } );
});