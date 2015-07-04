//var url = "http://api.trove.nla.gov.au/result?q=death%20AND%20by%20AND%20lion&zone=newspaper&encoding=json&callback=?";
//var query = "death%20AND%20by%20AND%20lion&zone=newspaper&encoding=json&key=u944in30nism514v";

// trove api
var api = "http://api.trove.nla.gov.au/result?key=";
var apiKey = "u944in30nism514v";

// default input
var defaultTopic = "death AND by AND lion";

queryTrove = function(topic) {
  var url = api + apiKey + "&encoding=json&zone=newspaper&sortby=relevance&q=" + topic + "&callback=?";

  // Get the results as JSON and display
  $.getJSON(url, function(data) {
      console.log(data.response);

      // create topic and its events
      $.each(data.response.zone[0].records.article, function(key, value) {
        console.log(value.date);

        $('#output').append(
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

$("#searchbutton").bind("click", function() {
  if ($('#topic').val().length) {
    var topic = $('#topic').val();
  } else {
    var topic = defaultTopic;
  }
  queryTrove(topic);
});
