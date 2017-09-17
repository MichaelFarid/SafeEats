// Firebase turned out to be a dud, so we demo with a 
// client-side array.
var arr = [{
	City:"BROOKLYN",
	Code:"06C",
	Cuisine:"American",
	Date:"2/14/2017",
	Description:"Food not protected from potential source of contamination during storage, preparation, transportation, display or service.",
	ID:"50041578",
	Name:"33",
	PhoneNumber:"9179874073",
	Score:"17",
	Severity:"Critical",
	StreetName:"LAFAYETTE AVE",
	StreetNum:"33",
	ZipCode:"11217"},
	{City:"BROOKLYN",
	Code:"10F",
	Cuisine:"American",
	Date:"10/17/2016",
	Description:"Non-food contact surface improperly constructed. Unacceptable material used. Non-food contact surface or equipment improperly maintained and/or not properly sealed, raised, spaced or movable to allow accessibility for cleaning on all sides, above and underneath the unit.",
	ID:"50041578",
	Name:"33",
	PhoneNumber:"9179874073",
	Score:"3",
	Severity:"Not Critical",
	StreetName:"LAFAYETTE AVE",
	StreetNum:"33",
	ZipCode:"11217"},
	{City:"BROOKLYN",
	Code:"04L",
	Cuisine:"American",
	Date:"2/14/2017",
	Description:"Evidence of mice or live mice present in facility's food and/or non-food areas.",
	ID:"50041578",
	Name:"33",
	PhoneNumber:"9179874073",
	Score:"17",
	Severity:"Critical",
	StreetName:"LAFAYETTE AVE",
	StreetNum:"33",
	ZipCode:"11217"},
	{City:"MANHATTAN",
	Code:"02G",
	Cuisine:"American",
	Date:"10/25/2016",
	Description:"Cold food item held above 41� F (smoked fish and reduced oxygen packaged foods above 38 �F) except during necessary preparation.",
	ID:"50051527",
	Name:"50",
	PhoneNumber:"2125244104",
	Score:"12",
	Severity:"Critical",
	StreetName:"COMMERCE ST",
	StreetNum:"50",
	ZipCode:"10014"}];

function redrawTable() {
	var query = document.getElementById("search-bar").value;
	console.log(query);
    var rowNum = 0;
	// Reset table
	$("#violations-list").html("<tr id='addr0'></tr>");
	// Add table rows
	for (var i = 0; i < arr.length; i++) {
		var name = arr[i].Name;
		if (name == query) {
			$('#addr'+rowNum).html("<td><button type='button'" +
			"class='btn btn-primary' id='1'>" +
			(rowNum+1) + "</button></td>"+
			"<td>" + arr[i].Date +"</td><td><text>"+ arr[i].Name + "</text></td>" + 
			"<td><text>"+arr[i].StreetNum + " " + arr[i].StreetName + "</text></td>" + 
			"<td><text>" + arr[i].Severity + "</text></td>")
			$('#tab_logic').append('<tr id="addr'+(rowNum+1)+'"></tr>');
			rowNum++;
		}
	}
}

$(document).ready(function() {
	$(this).on('keypress', function(event) {
		if (event.keyCode == 13) {
			redrawTable();
		}
	});
});

$(document).ready(function() {
	$("btn btn-primary").click(function(event) {
		var elementIdStr = event.target.id;
		var arrIndex = parseInt(elementIdStr);
	});
});