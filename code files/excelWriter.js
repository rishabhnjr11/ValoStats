const xlsx = require("xlsx");
const fs = require("fs");


// function excelReader(){
//     if()
// }

function excelWriter(filePath,jsData,sheetname){  //In our case sheetname is name of the Team
    //new workbook will be created
    let workbook = xlsx.utils.book_new();
    //worksheet will be created
    let worksheet = xlsx.utils.json_to_sheet(jsData);
    //data append
    xlsx.utils.book_append_sheet(workbook,worksheet,sheetname);
    xlsx.writeFile(workbook,filePath);
}
module.exports = {
    xlWriter:excelWriter
}