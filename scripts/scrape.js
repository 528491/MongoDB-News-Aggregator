var cheerio = require("cheerio");
var request = require("request");

var webScraper = {
    
    scrapedData: [],
    scrapeNYTimes: function(){
        var results = [];
        request("https://www.nytimes.com/", function(error, response, html){
            var $ = cheerio.load(html);

            $("a").each(function(i, element){
                //console.log(element);
                var headlineInfo = {};

                headlineInfo.title = $(element).text();
                headlineInfo.link = $(element).attr("href");

                this.scrapedData.push(headlineInfo);
            }); 
        });
    }
}

module.exports = webScraper;