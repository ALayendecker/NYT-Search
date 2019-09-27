
$("#search").on("click", function () {
var article = ;
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + article + "PXpYM6F0OjRxwTXHEOwko5iw6T4CsRMR"



    

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {
        var results = response.data;