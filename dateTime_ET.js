const monthNamesET = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];

const dateNowET = function(){
	let timeNow = new Date();
	let dateNow = timeNow.getDate();
	let monthNow = timeNow.getMonth();
	let yearNow = timeNow.getFullYear();
	let getHours = timeNow.getHours();
	let getMinutes = timeNow.getMinutes();
	let getSeconds = timeNow.getSeconds();
	let completeDate = dateNow + ". " + monthNamesET[timeNow.getMonth()] + " " + yearNow;
	return completeDate;
}	

const timeNowET = function(){
	let timeNow = new Date();
	return timeNow.getHours() + ":" + timeNow.getMinutes() + "." + timeNow.getSeconds();
}

const timeOfDayET = function(){
	let dayPart = "suvaline aeg";
	const hourNow = new Date ().getHours();
	if(hourNow > 6 && hourNow <= 11){
		dayPart = "hommik";
	}
	if(hourNow >= 12 && hourNow < 14){
		dayPart = "keskpäev";
	}
	if(hourNow >= 14 && hourNow < 18){
		dayPart = "pärastlõuna";
	}
	if(hourNow >= 18){
		dayPart = "õhtu";	
	}
	return dayPart;
}

//moodul ekspordib need asjad
module.exports = {dateNowET: dateNowET, timeNowET: timeNowET, monthsET: monthNamesET, timeOfDayET: timeOfDayET};