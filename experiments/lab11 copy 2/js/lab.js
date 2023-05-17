// Add buttons to challenge, problems, and results sections
$(document).ready(function() {
  addButtonToSection("challenge", "Add Challenge Button");
  addButtonToSection("problems", "Add Problems Button");
  addButtonToSection("results", "Add Results Button");
});

function addButtonToSection(sectionId, buttonText) {
  var section = $("#" + sectionId);
  var button = $("<button>").text(buttonText);
  section.append(button);
}
