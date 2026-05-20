const {test,expect}=require('@playwright/test');
const ExcelJs=require('exceljs');
async function writeExcelTest(searchText,replaceText,change,filepath,sheetname)
{

const  workbook = new ExcelJs.Workbook();
await workbook.xlsx.readFile(filepath);
const worksheet=workbook.getWorksheet(sheetname);
const output=await readExcel(worksheet,searchText);
const cell=worksheet.getCell(output.row,output.column+change.colChange);
cell.value=replaceText;
await workbook.xlsx.writeFile(filepath);
}

async function readExcel(worksheet,searchText)
{
    let output={row:-1,column:-1};
    worksheet.eachRow((row,rowNumber)=>
        {
          row.eachCell((cell,colNumber)=>
        
            {
               if(cell.value === searchText)
               {
                
                  output.row=rowNumber;
                  output.column=colNumber;
              
        
        
        
               }
            }
        
        )
        
        })
        return output;

}
//writeExcelTest("Mango",350,{rowChange:0,colChange:2},"C:/Users/hp/Downloads/excelTest.xlsx","Sheet1");

test('Upload download excel validation', async({page}) => {
   const textSearch = 'Mango';
   const updateValue = '350';
   const downloadsPath = 'C:/Users/hp/Downloads/';
   const sheetName = 'Sheet1';

   await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html", { waitUntil: 'networkidle'});
   const downloadPromise = page.waitForEvent('download');
   await page.click('button[id="downloadButton"]');
   const download = await downloadPromise;
   const downloadPath = `${downloadsPath}download.xlsx`;
   await download.saveAs(downloadPath);

   // Ensure the file is downloaded and saved before proceeding
   await writeExcelTest(textSearch, updateValue, { rowChange: 0, colChange: 2 }, downloadPath,sheetName);
   await page.locator("#fileinput").setInputFiles(downloadPath);
   const textlocator = page.getByText(textSearch);
    const desiredRow=await page.getByRole('row').filter({has:textlocator});
   await expect(desiredRow.locator("#cell-4-undefined")).toContainText(updateValue);
});