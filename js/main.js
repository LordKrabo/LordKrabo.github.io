//var url = "http://api.trove.nla.gov.au/result?q=death%20AND%20by%20AND%20lion&zone=newspaper&encoding=json&callback=?";
//var query = "death%20AND%20by%20AND%20lion&zone=newspaper&encoding=json&key=u944in30nism514v";

// user input
var searchTerm = "death AND by AND lion";

// trove api
var api = "http://api.trove.nla.gov.au/result?key=";
var apiKey = "u944in30nism514v";
var url = api + apiKey + "&encoding=json&zone=newspaper&sortby=relevance&q=" + searchTerm + "&callback=?";

// action that occurs when the 'Search' button is clicked
$("#searchbutton").bind("click", function() {

    // Get the results as JSON and display
    $.getJSON(url, function(data) {
        console.log(data);

        //var displayJSON = function( index, item ) {

        //    $('#output').append("<li>" + (index + 1) + ". "
        //      // display link to record
        //      +"<a target='_blank' href='" + item.troveUrl +"'>"
        //      + (item.title.value || item.title || item.name)
        //      + "</a><br/>"

        //      // display JSON response (formatted)
        //      + "<pre>" + JSON.stringify(item,null,4) + "</pre>"
        //      + "</li>");

        //};
        //$('#output').empty();
        //if (data.response.zone[0].records.work){
        //    $.each(data.response.zone[0].records.work, displayJSON);
        //} else if (data.response.zone[0].records.article){
        //    $.each(data.response.zone[0].records.article, displayJSON);
        //} else if (data.response.zone[0].records.list){
        //    $.each(data.response.zone[0].records.list, displayJSON);
        //}
    });
});
