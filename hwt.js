const url ="https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";
const request = require("request");
const cheerio = require("cheerio");
request(url,cb);
function cb(error, response,html)
{
    if(error)
    {
        console.log(error);
    }
    else{
        extractHtml(html);
    }
}
function extractHtml(html)
{
    let $=cheerio.load(html);
   let elementArr= $(".ds-flex.ds-items-center.ds-min-w-0.ds-mr-1 .ds-text-tight-l.ds-font-bold.ds-text-typo.hover\\:ds-text-typo-primary.ds-block.ds-truncate");
   //console.log($(elementArr[0]).text());
   console.log($(elementArr[1]).text());
}