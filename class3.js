const firstName = "Õnnela";
const lastName = "Link";
//meie enda tehtud moodul 
const dateInfo = require ("./dateTime_ET")
//lisame failisüsteemi mooduli (fs-filesystem) (see on nodejes'is olemas)
const fs = require("fs");
let folkWisdom = [];


fs.readFile("txtfiles/vanasonad.txt", "utf8", (err, data)=>{
	if(err){
		console.log(err);
	}
	else{
		//console.log(data);
		folkWisdom = data.split(";");
		//console.log(folkWisdom);
		//console.log("Vanasõnu on " + folkWisdom.length);
		onScreen();
	}
});//readFile lõppeb

const onScreen = function (){
	console.log(firstName + " " + lastName);
	console.log(dateInfo.dateNowET());
	//console.log(Math.floor(Math.random() * folkWisdom.length));
	//console.log("Tänane tarkus: " + folkWisdom[Math.floor(Math.random() * folkWisdom.length)]);
	//kõige tavalisem tsükkel (loop)
	for(let i = 0; i < folkWisdom.length; i ++){
		console.log((i + 1) +  ") " + folkWisdom [i]);
	}		
	console.log("Kell on: " + dateInfo.timeNowET());
	console.log("On " + dateInfo.timeOfDayET() + ".");
	//console.log(dateInfo.monthsET);
}