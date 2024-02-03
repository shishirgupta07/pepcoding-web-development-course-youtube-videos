let arr=[1,2,3,4,5]
arr.myNextVal=6;
arr.nVal=function()
{
    console.log("hello");
}
console.log(arr);
for(let key in arr)
{
    console.log(key,":",arr[key]);
}