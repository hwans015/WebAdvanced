var buildings = ['01.svg','02.svg','03.svg','04.svg','05.svg','06.svg','07.svg','08.svg']
var locations = []
var widths = []
var allBuildings = []

				// circle = "<div class='circle'></div>"; // create an empty array (allCircles) and a string to repeatedly add to the array
	
if(Cookies.getJSON('allBuildings')){ // check if there is a cookie named "allCircles"

	console.log("there are cookies!");
	allBuildings = Cookies.getJSON('allBuildings');
	widths = Cookies.getJSON('widths');
	locations = Cookies.getJSON('locations'); // if there is a cookie named "allCircles", update existing array to reflect this
	console.log(allBuildings);
	for (var i = 0; i < allBuildings.length; i++) {
		
		var building = $("<img>")
		building.attr('src', buildings[allBuildings[i]])
		building.css("width", widths[i]  + "px")
		building.css("position", "fixed")
		building.css("bottom", "0px")
		building.css("left", locations[i] + "px")
		$(".container").append(building); // add circle to DOM // cycle through (updated) array and populate the DOM with the circles
	}
}

$("body").click(function(){
			var building = $("<img>")
			var buildingId = Math.floor(Math.random() * 11)
			allBuildings.push(buildingId);
			building.attr('src', buildings[buildingId])
			var width = Math.floor(Math.random() * 50 + 100)
			widths.push(width)
			building.css("width", width  + "px")
			building.css("position", "fixed")
			building.css("bottom", "0px")
			var loc = Math.floor(Math.random() * 1800)
			locations.push(loc)
			building.css("left", loc + "px")
			$(".container").append(building); // add circle to DOM
			console.log(building);
			 // add circle to array 
			Cookies.set('allBuildings', allBuildings, {expires: 10});
			Cookies.set('widths', widths, {expires: 10});
			Cookies.set('locations', locations, {expires: 10}); // add array of circles to cookie
		})



if (Cookies.getJSON('star')){

			console.log("there are star!");
			star = Cookies.getJSON('star');

			for (var i = 0; i < star.length; i++) {
				$(document.body).append(star[i]);
			}
			var stars = Cookies.getJSON('star');
	        console.log(stars)

		} else {
			stars = [];
		}

	
	    var counter = 0
		document.onmousemove = function(e){
		// console.log(e["keys중에 하나 입력"])
	    counter +=1
		// var x = event["x"];
		// var y = event["y"]; 는 밑에 랑 같음 (event.x/y)
		var x = event.x;
		var y = event.y;
		// console.log (x, y);

		// var size = Math.floor(Math.random() * 30 + 5)

		var div = document.createElement("div");
		$(div).append("<img src='star.svg' id='star'></img>")
		// $(div).css("width", size  + "px")
		div.style.left = x-25 + "px";
		div.style.top = y-25 + "px";
		// div.style.width = Math.floor(Math.random() * 10 + 50) + "px";
		//console.log("<div style='left:"+ (x -25) +"px;top:"+ (y-25) +"px;'></div>")
		

		if(counter % 15 == 0){
			document.body.appendChild(div);
			stars.push("<div style='left:"+ (x -25) +"px; top:"+ (y-25) +"px;'><img src='star.svg' id='star'></img></div>")
		
			Cookies.set('star', stars);
		}
		

	}