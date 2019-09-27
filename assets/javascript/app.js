
$("#search").on("click", function () {
var article = ;
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + query + articleLimit + startYear + endYear+ "&api-key=PXpYM6F0OjRxwTXHEOwko5iw6T4CsRMR"

    var query = $("#search-term").val().trim()


    //var articleLimit = $("#number-of-records").val().trim() 
    // we are going to use a loop for article limits



    var startYear = $("#start-year").val().trim()
    var endYear = $("#end-year").val().trim()



    

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {
        console.log()
        var results = response.data;