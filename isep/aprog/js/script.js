$( document ).ready(function() {
  // MVC object model

    var mvc = {
        reader: function readTextFile(filePath)
            {
                var rawFile = new XMLHttpRequest();
                rawFile.open("GET", filePath, true);
                rawFile.onreadystatechange = function ()
                {
                    if(rawFile.readyState === 4)
                    {
                        var allText = rawFile.responseText;
                        $("#accordion").html(allText);
                    }
                }
            
                rawFile.send();
            },
    };
      
    $.getJSON("https://falconetpt.github.io/isep/aprog/data/exercises.json", function(data) {
        var outputHTML = "";
        for(var i = 0; i < data.length; i++) {
          outputHTML += data[i];
        }
        $('#accordion').html(outputHTML)
    });
    
    //Funçao acordiao
    $( function() {
        $( "#accordion" ).accordion();
    } );
});