function secondsToString(seconds) {
  var numyears = Math.floor(seconds / 31536000);
  var numdays = Math.floor((seconds % 31536000) / 86400);
  var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
  var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
  var numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;
  return numyears + " years " +  numdays + " days " + numhours + " hours " + numminutes + " minutes " + numseconds + " seconds";
}

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
      var firstDate = new Date(sorted[0].date).getFullYear();
      var lastDate = new Date(sorted[sorted.length - 1].date).getFullYear();
      var average = (lastDate - firstDate) / sorted.length;
      console.log(sorted[0].date);
      console.log(sorted[sorted.length - 1].date);
      console.log(firstDate);
      console.log(lastDate);
      console.log(average);

      $('#history-repeats').html('History repeats itself on average every ' + average + ' years');

      // clear existing list items
      $(element).empty()

      // create topic and its events
      $.each(sorted, function(key, value) {
        console.log(value.date);

        var displayDate = new Date(value.date);

        $(element).append(
          "<li>" +
            "<strong class='year'>" + displayDate.getFullYear() + "</strong>" +
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
    var topic = "death by lion";
  }
  queryTrove(topic, '#topic');
});
