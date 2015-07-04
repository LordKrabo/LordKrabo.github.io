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

      // create topic

      // create events


      //var displayJSON = function( index, item ) {

      $('#output').append(
        "<li>" + ". " +
        JSON.stringify(item, null, 4) +
        "</li>"
      );
      //$('#output').empty();
      //if (data.response.zone[0].records.work){
      //    $.each(data.response.zone[0].records.work, displayJSON);
      //} else if (data.response.zone[0].records.article){
      //    $.each(data.response.zone[0].records.article, displayJSON);
      //} else if (data.response.zone[0].records.list){
      //    $.each(data.response.zone[0].records.list, displayJSON);
      //}
  });
}

// action that occurs when the 'Search' button is clicked
$("#searchbutton").bind("click", function() {
  if ($('#searchTerm').val().length) {
    var topic = $('#searchTerm').val();
  } else {
    var topic = defaultTopic;
  }
  queryTrove(topic);
});
