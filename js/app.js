//*****************************************************************************
// Show default topics
//*****************************************************************************

// trove api
var api = "http://api.trove.nla.gov.au/result?key=";
var apiKey = "u944in30nism514v";

queryTrove = function(topic, element) {
  var url = api + apiKey + "&encoding=json&zone=newspaper&sortby=relevance&q=" + topic + "&callback=?";

  $('h1').html('"' + topic + '"');

  //url = "json/death-by-lion.json";

  // Get the results as JSON and display
  $.getJSON(url, function(data) {
      console.log(url);
      console.log(data.response);

      var sorted = _.sortBy(data.response.zone[0].records.article, function(value) {
        return value.date;
      });

      // find the average
      date = new Date();
      var firstDate = date.getTime(sorted[0].date);
      var lastDate = date.getTime(sorted[sorted.length - 1]);
      var average = firstDate - lastDate / sorted.length;
      console.log(average);

      // clear existing list items
      $(element).empty()

      // create topic and its events
      $.each(sorted, function(key, value) {
        console.log(value.date);

        $(element).append(
          "<li>" +
            "<strong class='year'>" + value.date + "</strong>" +
            "<p class='snippet'>" + value.snippet + "<p>" +
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
