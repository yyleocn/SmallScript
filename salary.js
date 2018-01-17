javascript:
!function(){
    let tableRow = document.querySelectorAll('#divSlip tbody');
    let sum = 0;
    tableRow.forEach((item_)=>{
        let tableHeader = item_.querySelector('th.tital');
        let dateRes = /[\d]{4}-[\d]{2}-[\d]{2}/.exec(tableHeader.innerText);
        let tableRow = item_.querySelector('tr:last-child');
        let tableDataArr = tableRow.querySelectorAll('td.spec_right');
        let tableData = tableDataArr[tableDataArr.length-1];
        let salary = parseFloat(tableData.innerText);
        if(salary>0){
            sum+=salary;
        }
        console.log(dateRes[0],salary);
    });
    console.log(sum);
}()