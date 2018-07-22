var scrape = require("../scripts/scrape");

module.exports.index = function(req, res){
    scrape.scrapeNYTimes();
    var headlines = scrape.scrapedData;
    console.log(scrape.scrapedData);

    res.render('home', {headlines});
};