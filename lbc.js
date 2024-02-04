const request=require("request");
const cheerio=require("cheerio");
const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary";
request(url,cb);
function cb(error,response,html)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        htmlSelect(html);
    }
}
function htmlSelect(html)
{
    let element = cheerio.load(html);
    let elearr=element(".first-letter\\:ds-capitalize .ci-html-content");
    let text = element(elearr[0]).text();
    console.log(text);
}
