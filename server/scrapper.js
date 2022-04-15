const axios = require('axios');
const cheerio = require('cheerio');

async function scrape()
{
    axios.get("https://www.reddit.com/r/wallstreetbets/search/?q=flair%3ADD&include_over_18=on&sort=new").then((res) => {
    const $ = cheerio.load(res.data);
    let info = {content: [], url: []};
    
   
    $(`._eYtD2XCVieq6emjKBH3m`).each(function(i, elm) {
        //console.log(i);
        console.log($(elm).text()); // for testing do text() 
        info.content.push($(elm).text());
        
    });
    
    $(".SQnoC3ObvgnGjWt90zD9Z._2INHSNB8V5eaWp4P0rY_mE").each(function(i,elm) {
        //console.log(i);
        console.log($(elm).attr('href'));
        info.url.push($(elm).attr('href'));
    });
    });
    return info
}

