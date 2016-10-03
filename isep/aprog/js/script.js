$( document ).ready(function() {
  // MVC object model
  var mvc = {
    exempleCode: {"9": "import math \
                        def hourCalc(hPartida, mPartida, sPartida, hDuracao, mDuracao, sDuracao): \
                          sChegada = 0 \
                          mChegada = 0 \
                          hChegada = 0 \

                          sChegada = int(math.ceil(( (sPartida + sDuracao) / 60.0 - int((sPartida + sDuracao) / 60) ) * 60)) \
                          mChegada =  int(math.ceil(( ( (mPartida + mDuracao) / 60.0 ) - int((mPartida + mDuracao)/60 ) + int((sPartida + sDuracao) / 60) ) * 60)) \
                          hChegada =  (hPartida + hDuracao) + int((mPartida + mDuracao) / 60) \

                          if (hChegada >= 24): \
                            hChegada = hChegada - 24 \

                          return hChegada, mChegada, sChegada" \
                 },
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
      ["9", "data/9.txt", mvc.exempleCode["9"]],],
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
        htmlStr +=      "<hr>"
        
        if(mvc.struture[i].length > 2) {
          htmlStr +=    "<pre><code class=\"python\">"
          htmlStr +=    mvc.struture[i][3] 
          htmlStr +=    "</code></pre>"
        }
        
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
      $( ".accordion" ).accordion();
  } );

});
