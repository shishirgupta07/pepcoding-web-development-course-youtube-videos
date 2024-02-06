const request = require("request");
const cheerio = require("cheerio");
const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595";
request(url,cb)
function cb(error,response,html)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        // console.log(html);
        extractLink(html);
    }
}
function extractLink(html)
{
   let $= cheerio.load(html);
   let anhorEle = $("a[title='View All Results']");
   let link=anhorEle.attr("href");
   let fullLink = "https://www.espncricinfo.com"+link;
//    console.log(fullLink);
    getAllLinks(fullLink);
}
function getAllLinks(url)
{
    request(url,function(error,response,html){
        if(error)
        {
            console.log(error);
        }
        else
        {
            extractAllLink(html);
        }
        
    })
}
function extractAllLink(html)
{
        let $=cheerio.load(html);
        let anchor=$(".ds-grow.ds-px-4.ds-border-r.ds-border-line-default-translucent>.ds-no-tap-higlight");
        console.log(anchor.length);
        for(let i=0;i<anchor.length;i++)
        {
            let link=$(anchor[i]).attr("href");
            let fullLink = "https://www.espncricinfo.com"+link;
            console.log(fullLink);
        }
        

}