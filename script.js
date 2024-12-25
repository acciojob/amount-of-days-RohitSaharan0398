//your JS code here. If required.
function daysOfAYear(num){
	let isLeapYear=false;
	if(num%4==0){
		if(num%100==0){
			if(num%400==0){
				isLeapYear=true;
			}
		}
		else
		isLeapYear=true;
	}

	
	if(isLeapYear)
		return 366;
	return 365
}
let year =prompt("Please enter your year:");
alert(daysOfAYear(year));