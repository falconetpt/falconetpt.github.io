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
            }
    };
    
    //Ler file txt
    
    
    $("#accordion").accordion({
        active: false,
        collapsible: true,
        heightStyle: 'content',
        create: function( event, ui ) {mvc.reader("https://falconetpt.github.io/isep/aprog/data/exercises.txt");}
    });
    
    /*Funçao acordiao
    $( function() {
        $( "#accordion" ).accordion();
    } );*/
});