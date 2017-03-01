function findDate(ans)
{
    var arr=ans.split('/');
    var ye=arr[2];
    var year= new Date().getFullYear();
    return (year-ye);
}

module.exports.findDate=findDate;