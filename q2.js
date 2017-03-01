//aysnchronous

var fp=require('fs');
var ctr=0;
fp.readFile('data.txt','utf8', function(err,tst){
    var arr=tst.split('\n');
    console.log(arr.length-1);
})
console.log("done reading from file");