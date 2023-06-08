function getStuff() {
	console.log("Clicked!");
  $.ajax({
    url: "https://catfact.ninja/fact",
    type: "GET",
    data: {},
  })
  .done(function(data) {
 		// console.log(data);
    console.log(data.fact);
    $("#output").html(data.fact);
  })
}

$("button").click(getStuff);