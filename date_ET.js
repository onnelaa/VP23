exports.dateNowET = function(){
	const monthNamesET = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
	let timeNow = new Date();
	let dateNow = timeNow.getDate();
	let monthNow = timeNow.getMonth();
	let yearNow = timeNow.getFullYear();
	let getHours = timeNow.getHours();
	let getMinutes = timeNow.getMinutes();
	let getSeconds = timeNow.getSeconds();
	let completeDate = dateNow + ". " + monthNamesET[timeNow.getMonth()] + " " + yearNow + " Kell on: " + getHours + "." + getMinutes + "." + getSeconds;
	return completeDate;
}	

//monthNamesET[0]
//monthNamesET[timeNow.getMonth()]
//console.log(yearNow);
//console.log("Täna on: " + dateNow + "." + (monthNow + 1) + "." + yearNow);
//return timeNow.getHours() + ":" + timeNow.getMinutes() + ":" + timeNow.getSeconds();