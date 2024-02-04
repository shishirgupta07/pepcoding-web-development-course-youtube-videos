const req = require("request");
const cheerio = require("cheerio");
// const chalk = require("chalk");
req('https://www.worldometers.info/coronavirus',cb);
function cb(error,response,html){
        if(error)
        {
            console.log(error)
        }
        else{
            htmlContent(html);
        }
}
function htmlContent(html)
{
    let selectorTool = cheerio.load(html);
    let arrSel = selectorTool("#maincounter-wrap span");
    for(let i=0;i<arrSel.length;i++)
    {
        let data=selectorTool(arrSel[i]).text();
        console.log(data);
    }
}
