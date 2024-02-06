const request = require("request");
const cheerio = require("cheerio");
const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
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
        extractMatchDetails(html);
    }
}
function extractMatchDetails(html)
{
    let $ = cheerio.load(html);
    let devM=$(".ds-text-tight-m.ds-font-regular.ds-text-typo-mid3");
        let venues=$(devM).text().split(",");
        let venue = venues[1];
        let date = venues[2];
        let inningDetails = $(".ds-mt-3 .ds-rounded-lg.ds-mt-2");
        for(let i=0;i<inningDetails.length;i++)
        {
            let firstTeamPlayersDetails=($(inningDetails[i]).find(".ci-scorecard-table tbody tr"));
            for(let j=0;j<firstTeamPlayersDetails.length;j++)
            {
                let allCols = $(firstTeamPlayersDetails[j]).find("td");
                let isWorthy=$(allCols[1]).hasClass("ds-min-w-max") && $(allCols[1]).hasClass("!ds-pl-[100px]");
                // console.log(isWorthy);
                if(isWorthy)
                {
                    let playerDetails = $(firstTeamPlayersDetails[j]).text();
                    let pDetails=playerDetails.split(" ");
                    console.log(pDetails[0]+" "+pDetails[1]);
                    // let runs=
                    // let balls = 
                    // let fours=
                    // let sixes=
                    // let sr=
                }
            }
        }
}