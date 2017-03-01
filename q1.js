function sums()
{
    var s=0;
    var len=process.argv.length;
    for(var i=2;i<len;i++)
    {
        s+=parseInt(process.argv[i]);
    }
    return s;
}

var sum = sums();
console.log(sum);