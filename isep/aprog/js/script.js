$( document ).ready(function() {
  // MVC object model
  var mvc = {
    struture: [["1", "data/APROG_1151888_1160766_ex1.txt"], 
      ["2", "data/APROG_1151888_1160766_ex1.txt"]],
    init: function() {
      mvc.render();
    },
    render: function () {
      var htmlStr = "";
      
      for (var i = 0, n = mvc.struture.length; i < n; i++) {
        htmlStr += "<h3>Exercicio " + mvc.struture[i][0]  + "</h3>";
        htmlStr +=  "<div>";
        htmlStr +=    "<p>"
        htmlStr +=    "<div>";
        htmlStr +=    "<p>";
        htmlStr +=      "<iframe src=\"" + mvc.struture[i][1] + "\" frameborder=0 >";
        htmlStr +=      "</iframe>";
        htmlStr +=    "</p>";
        htmlStr +=    "</div>";
        htmlStr +=    "</p>";
        htmlStr +=  "</div>";
      }
      
      $("#accordion").append(htmlStr);
    }
  };
  
  //initializes the rendering functions
  mvc.init();
  
  //Acordion Function
  $( function() {
      $( "#accordion" ).accordion();
  } );

});
