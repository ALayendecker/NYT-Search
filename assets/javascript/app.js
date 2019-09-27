var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + article + "PXpYM6F0OjRxwTXHEOwko5iw6T4CsRMR"
var article

$("#search").on("click", function () {
    var article = ;
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";


    

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {
        var results = response.data;