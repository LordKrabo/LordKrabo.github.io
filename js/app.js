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
      console.log(url);
      console.log(data.response);

      // sort by year
      var sorted = _.sortBy(data.response.zone[0].records.article, function(value) {
        return value.date;
      });

      // unique by year
      var uniques = _.map(_.groupBy(sorted,function(doc) {
        return new Date(doc.date).getFullYear();
      }),function(grouped) {
      	return grouped[0];
      });

      // find the average
      var firstDate = new Date(uniques[0].date).getFullYear();
      var lastDate = new Date(uniques[uniques.length - 1].date).getFullYear();
      var average = (lastDate - firstDate) / uniques.length;

      $('#history-repeats').html('History repeats itself on average every ' + parseFloat(average).toFixed(2) + ' years');

      // clear existing list items
      $(element).empty()

      // create topic and its events
      $.each(uniques, function(key, value) {
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

  console.log("I suggest...");

  var defaultTopics = ["death by lion", "man public naked", "death by aeroplane", "heart attack", "man eats muffin"];

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
  $('#topic').html('Loading...');

  queryTrove(topic, '#topic');
});

$('#search input').keypress(function(ev) {
  if (ev.which === 13) {
    $('#search button').click();
  }
});
