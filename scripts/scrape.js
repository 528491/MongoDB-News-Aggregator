var cheerio = require("cheerio");
var request = require("request");
var mongoose = require("mongoose");
var headline = require("../models/headline")

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/mongoDBHW";
mongoose.connect(MONGODB_URI);

var webScraper = {

    scrapedData: [],
    scrapeNYTimes: function() {
        var results = [];
        request("https://www.nytimes.com/", function(error, response, html){
            var $ = cheerio.load(html);

            $("a").each(function(i, element){
                //console.log(element);
                var headlineInfo = {};

                headlineInfo.title = $(element).text();
                headlineInfo.link = $(element).attr("href");

                //console.log(headlineInfo);

                headline.create(headlineInfo)
                    .then(function(dbHeadline){
                        //console.log(dbHeadline);
                    })
                    .catch(function(error){
                        console.log(error);
                    });

                results.push(headlineInfo);
            }); 
        });
        this.scrapedData = results;
    }
}

module.exports = webScraper;