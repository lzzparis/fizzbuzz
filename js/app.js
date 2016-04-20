$(document).ready(function(){
	var userNumber;
	do{
	userNumber= prompt("Please enter a number");
	}	while (!parseInt(userNumber)) 
	
	
fizzBuzz(parseInt(userNumber));

});

function fizzBuzz(maxNum) {
		for(count=1; count <= maxNum ; count++){
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


}

