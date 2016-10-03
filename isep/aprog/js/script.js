$( document ).ready(function() {
  // MVC object model
  var mvc = {
	sampleCode: {
		"1B": 
		`
		import java.util.Scanner; 

		public class exercicio1B
		{
			public static void codigo()
			{
			   // Define a funcao de prompt
				Scanner scan = new Scanner(System.in);
				
				//Pede ao user as suas notas
				System.out.println("Introduza a nota 1:");
				int nota1 = scan.nextInt();
				System.out.println("Introduza a nota 2:");
				int nota2 = scan.nextInt();
				System.out.println("Introduza a nota 3:");
				int nota3 = scan.nextInt();
				
				//Pede ao user as ponderacoes
				System.out.println("Introduza ponderação 1:");
				double peso1 = scan.nextDouble();
				System.out.println("Introduza ponderação 2:");
				double peso2 = scan.nextDouble();
				System.out.println("Introduza ponderação 3:");
				double peso3 = scan.nextDouble();
				
				//Calcula a nota
				double mediaPesada = ((nota1*peso1+ nota2*peso2+ nota3*peso3) /(peso1+peso2+peso3));
				System.out.println(mediaPesada);
				
				//Avalia se a media e maior que a nota 8.00
				if ( mediaPesada >= 8.00 ) {
					System.out.println("Cumpre nota mínima");
				} else {
					System.out.println("Nao cumpre nota mínima");
				}
				
			}
		}

		`
	},
    struture: [["1A", "data/1A.png"], 
      ["1B", "data/1B.txt", "1B"], 
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
      ["9", "data/9.txt"],],
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
        htmlStr +=    "</p><hr>";
	     
	//evaluates if code has sample code file and fetch that text
	if(mvc.struture[i].length > 2) {
		htmlStr += 	  "<pre><code class='java'>" + mvc.sampleCode[mvc.struture[i][2]] + "</code></pre>"
	}
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
      $( "#accordion" ).accordion({ autoHeight: false });
  } );

});
