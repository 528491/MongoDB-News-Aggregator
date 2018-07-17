var cheerio = require("cheerio");
var request = require("request");



module.exports.index = function(req, res){
    
    request("https://www.cnn.com/", function(error, response, html){
        var $ = cheerio.load(html);
        var results = [];

        $("span").each(function(i, element){
            console.log(element);
        });
    });
    
    
    
    
    
    
    res.render('home');
}