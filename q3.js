//snchronous

var fp=require('fs');
var ctr=0;
var con=fp.readFileSync('data.txt','utf8');
var arr=con.split('\n');
console.log(arr.length-1);
console.log("done reading from file");