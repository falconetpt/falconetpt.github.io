$( document ).ready(function() {
  // MVC object model
  var mvc = {
    struture: [/*["1B", "data/1B.txt"], 
      ["3", "data/3.txt"], 
      ["4", "data/4.txt"],
      ["5", "data/5.txt"],
      ["6", "data/6.txt"]*/],
    init: function() {
      mvc.getFolder("data/");
      mvc.render();
    },
    getFolder: function (dir) {
        fileList = [];

        var files = fs.readdirSync(dir);
        for(var i in files){
            if (!files.hasOwnProperty(i)) continue;
            var name = dir+'/'+files[i];
            if (!fs.statSync(name).isDirectory()){
                fileList.push(name);
            }   
        }
        return fileList;
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
