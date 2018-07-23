var scrape = require("../scripts/scrape");
var Headline = require("../models/headline");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mongoDBHW");

module.exports.index = function(req, res){
    scrape.scrapeNYTimes();
    var headlines = scrape.scrapedData;
    console.log(scrape.scrapedData);

    //When loading this page, obtain all the article headings and accompanying notes
    //from the database
    Headline.find({})
        .then(function(articleHeadlines){
            res.render('home', {articleHeadlines});
            console.log(articleHeadlines);
        })
        .catch(function(err){
            console.log(err);
        });
    
};