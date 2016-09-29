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
                        $("#accordion").text(allText);
                    }
                }
            
                rawFile.send();
            }
    };
    
    //Funçao acordiao
    $( function() {
        $( "#accordion" ).accordion();
    } );
    
    //Ler file txt
    mvc.reader("../data/exercises.txt");
});