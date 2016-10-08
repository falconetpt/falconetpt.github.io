$( document ).ready(function() {
  // MVC object model
  var mvc = {
    struture: [["1A", "data/1A.png"], 
      ["1B", "data/1B.txt"], 
      ["2A", "data/2A.png"], 
      ["2B", "data/2B.txt"], 
      ["3", "data/3.txt"], 
      ["4", "data/4.txt"],
      ["5A", "data/5A.txt"],
      ["5B", "data/5B.txt"],
      ["6", "data/6.txt"],
      ["7A", "data/7A.txt"],
      ["7B", "data/7B.txt"],
      ["7C", "data/7C.txt"],
      ["8A", "data/8A.txt"],
      ["8B", "data/8B.txt"],
      ["8C", "data/8C.txt"],
      ["9", "data/9.txt"],
      ["10", "data/10.txt"],
      ["11A", "data/11A.txt"],
      ["11B", "data/11B.txt"],
      ["12", "data/12.txt"],
      ["13A", "data/13A.txt"],
      ["13B", "data/13B.txt"],
      ["14", "data/14.txt"],
      ["15", "data/15.txt"],
      ["16A", "data/16A.txt"],
      ["16B", "data/16B.txt"],],
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
        htmlStr +=      "<iframe src=\"" + mvc.struture[i][1] + "\" frameborder=0 width='100%' height='100%'>";
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
