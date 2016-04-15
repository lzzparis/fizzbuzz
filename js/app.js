$(document).ready(function(){
	
	for(count=1; count <=100; count++){
		$("body").append("<p>");

		var printNum = true;
		if(!(count%3)) {
			$("body").append("Fizz");	
			printNum =false;		
		}
		if(!(count%5)){
			$("body").append("Buzz");
			printNum = false;
		}
		if(printNum){
			$("body").append(count);
		}
		$("body").append("</p>");
	}


});



