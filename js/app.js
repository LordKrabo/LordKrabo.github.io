//*****************************************************************************
// Show default topics
//*****************************************************************************

// trove api
var api = "http://api.trove.nla.gov.au/result?key=";
var apiKey = "u944in30nism514v";

queryTrove = function(topic, element) {
  var url = api + apiKey + "&encoding=json&zone=newspaper&sortby=relevance&q=" + topic + "&callback=?";

  // Get the results as JSON and display
  $.getJSON(url, function(data) {
      console.log(data.response);

      // clear existing list items
      $(element).empty()

      // create topic and its events
      $.each(data.response.zone[0].records.article, function(key, value) {
        console.log(value.date);

        $(element).append(
          "<li>" +
            "<h3>" + value.date + "<h3>" +
            "<p>" + value.snippet + "<p>" +
          "</li>"
        );
      });
  });
}

//*****************************************************************************
// Show default topics
//*****************************************************************************

$(document).ready(function() {

  var defaultTopics = ["death by lion", "muffin man"];

  $.each(defaultTopics, function(key, topic){
    console.log(topic);
  });

});

//*****************************************************************************
// Handle user input
//*****************************************************************************

$("#search button").bind("click", function() {
  if ($('#userInput').val().length) {
    var topic = $('#userInput').val();
  } else {
    var topic = "death AND by AND lion";
  }
  queryTrove(topic, '#topic');
});
