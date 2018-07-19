var cheerio = require("cheerio");
var request = require("request");



module.exports.index = function(req, res){
    var results = [];
    request("https://www.nytimes.com/", function(error, response, html){
        var $ = cheerio.load(html);

        $("a").each(function(i, element){
            //console.log(element);
            var headlineInfo = {};

            headlineInfo.title = $(element).text();
            headlineInfo.link = $(element).attr("href");

            results.push(headlineInfo);
        });
        console.log(results);
        res.render('home', {results});
    });
}