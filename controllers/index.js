var scrape = require("../scripts/scrape");
var headline = require("../models/headline")

module.exports.index = function(req, res){
    scrape.scrapeNYTimes();
    var headlines = scrape.scrapedData;
    console.log(scrape.scrapedData);

    res.render('home', {headlines});
};