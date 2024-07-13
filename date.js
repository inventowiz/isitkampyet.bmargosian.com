$(function () {
	var now = new Date();
	var kampMonth = 7,kampDay = 26,kampYear = 0;
	if((now.getMonth() == (kampMonth-1) && now.getDate() > 28) ||
		(now.getMonth() > (kampMonth-1))){
		// use next year
		kampYear = now.getFullYear()+1;
	}else{
		// use this year
		kampYear = now.getFullYear();		
	}
	var kamp = new Date(kampYear,kampMonth-1,kampDay,9,0,0,0);
	console.log("Kamp is on: " + kamp);
	$('#defaultCountdown').countdown({until: kamp});
});

