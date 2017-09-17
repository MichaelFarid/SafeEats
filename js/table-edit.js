/*$(document).ready(function(){
    var i=1;
    $("#add_row").click(function(){
		$('#addr'+i).html("<td>"+ (i+1) +"</td><td><text>Placeholder</text></td>" + 
		"<td><text>Placeholder</text></td><td><text>Not Critical</text></td><td><text>*</text></td>")
		$('#tab_logic').append('<tr id="addr'+(i+1)+'" onclick="updateInformation"></tr>');
		i++; 
	});
    $("#delete_row").click(function(){
    	if(i>0){
			$("#addr"+(i-1)).html('');
			i--;
*/
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
	ZipCode:"10014"},
	{City:"MANHATTAN",
	Code:"08A",
	Cuisine:"American",
	Date:"4/11/2014",
	Description:"Facility not vermin proof. Harborage or conditions conducive to attracting vermin to the premises and/or allowing vermin to exist.",
	ID:"40536280",
	Name:"TRINITY PUB",
	PhoneNumber:"2123274450",
	Score:"23",
	Severity:"Not Critical",
	StreetName:"EAST 84 STREET",
	StreetNum:"229",
	ZipCode:"10028"},
	{City:"BROOKLYN",
	Code:"20A",
	Cuisine:"American",
	Date:"11/17/2014",
	Description:"Food allergy information poster not conspicuously posted where food is being prepared or processed by food workers.",
	ID:"41372258",
	Name:"EDDIE'S HERO PLACE",
	PhoneNumber:"7187451350",
	Score:"",
	Severity:"Not Critical",
	StreetName:"4 AVENUE",
	StreetNum:"6917",
	ZipCode:"11209"}];

function redrawTable() {
	var query = document.getElementById("search-bar").value;
	var rowNum = 0;
	// Reset table
	$("#violations-list").html("<tr id='addr0'></tr>");
	// Reset infobox
	$("#inspection-info").html("");
	// Add table rows
	for (var i = 0; i < arr.length; i++) {
		var name = arr[i].Name;
		if (name == query) {
			$('#addr'+rowNum).html("<td><button type='button'" +
			"class='btn btn-primary' id=" + i + ">" +
			(rowNum+1) + "</button></td>"+
			"<td>" + arr[i].Date +"</td><td><text>"+ arr[i].Name + "</text></td>" + 
			"<td><text>"+arr[i].StreetNum + " " + arr[i].StreetName + "</text></td>" + 
			"<td><text>" + arr[i].Severity + "</text></td>")
			$('#tab_logic').append('<tr id="addr'+(rowNum+1)+'"></tr>');
			rowNum++;
		}
	}
}

function redrawInfoBox(event) {
	var elementIdStr = event.target.id;
	var i = parseInt(elementIdStr);
	$('#inspection-info').html(
		"<p>ID: " + arr[i].ID + "</p>" +
		"<p>Restaurant: " + arr[i].Name + "</p>" +
		"<p>Cuisine: " + arr[i].Cuisine + " </p>" +
		"<p>Violation Severity: "+ arr[i].Severity + "</p>" +
		"<p>Address: " + arr[i].StreetNum + " " + arr[i].StreetName + "</p>" +
		"<p>Borough: " + arr[i].City + "</p>" +
		"<p>Zip Code: " + arr[i].ZipCode + "</p>" +
		"<p>Phone Number: " + arr[i].PhoneNumber + "</p>" +
		"<p>Inspection Date: " + arr[i].Date + "</p>" +
		"<p>Violation Code: " + arr[i].Code + "</p>" +
		"<p>Violation: " + arr[i].Description + "</p>" +
		"<p>Total Inspection Score: " + arr[i].Score + "</p>"
	)
}

$(document).ready(function() {
	$(this).on('keypress', function(event) {
		if (event.keyCode == 13) {
			redrawTable();
		}
	});
});

$(document).on('click','.btn', function(){
	redrawInfoBox(event);
});


