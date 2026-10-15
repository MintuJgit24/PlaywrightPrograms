//import Exceljs from 'exceljs'
const Exceljs = require('exceljs'); //first import exceljs

async function readExcel(worksheet, searchValue) //worksheet want to read so passthat as argmnt
{
    let output = { row: -1, column: -1 } //create an object to store the row and column number of the cell where the searchValue is found
    worksheet.eachRow((row, rowNumber) => {
        //inner for loop to iterate cell
        //eachCell Method itreate over all non-null cells in a row
        row.eachCell((cell, colNumber) => {
            if (cell.value === searchValue)
            // if (cell.value && cell.value.toString().trim().toLowerCase() === searchValue.toString().trim().toLowerCase())
            {
                output.row = rowNumber; //update the row number using object
                output.column = colNumber; //update the column number using object

                console.log(cell.value);
                console.log(output.row);
                console.log(output.column);
            }
        })
    })
    return output;
}

async function writeExcelTest(searchValue, replacedValue, change, filePath) { 
    const workbook = new Exceljs.Workbook(); //created object of workbook to read the excel file
    await workbook.xlsx.readFile(filePath); //to read the excel file we use readFile method and pass the file path as argmnt
    const worksheet = workbook.getWorksheet('Sheet1');
    const output = await readExcel(worksheet, searchValue);
    //console.log(output);
    // if (output.row === -1) {
    //   console.log( `"${searchValue}" not found.`);
    //   return;
    // }


    //const cell = worksheet.getCell(output.row, output.column); for replace action
    const cell = worksheet.getCell(output.row, output.column + change.colChange); //for updating any nearby column
    cell.value = replacedValue;
    await workbook.xlsx.writeFile(filePath); 
}

//to replace value in excel like from Tata Nexon to Lexus we call the function and pass the searchText, replacedValue and filePath as argmnt
//async function writeExcelTest(searchValue, replacedValue, filePath){}
//writeExcelTest('Tata Nexon', 'Lexus', "C:\\Mintu\\Playwright\\Utils\\SampleExcel.xlsx")

//to update nearby column need to pass the change object with rowChange and colChange as key and value pair, 
// here nearby so given col 1, if needed nearby second col then give col 2 like that 
writeExcelTest('Lexus', 8000, { rowChange: 0, colChange: 2 }, "C:\\Mintu\\Playwright\\Utils\\SampleExcel.xlsx")



