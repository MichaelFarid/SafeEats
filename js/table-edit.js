$(document).ready(function(){
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
		}
	 });

});