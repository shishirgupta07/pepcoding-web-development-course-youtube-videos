let inputarr = process.argv.slice(2);
console.log(inputarr);
let command = inputarr[0];
switch(command)
{
    case "tree":
        treeFun(inputarr[1]);
        break;
    case "organize":
        orgFun(inputarr[1]);
        break;
    case "help":
        helpFun(inputarr[1]);
        break;
    default :
        console.log("please give inputs");
        break;
}
function treeFun(command)
{
    console.log("tree dir");
}
function orgFun(command)
{
    console.log("org dir");
}
function helpFun(command)
{
    console.log("help dir");
}