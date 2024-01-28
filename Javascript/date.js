// task 1

// function date()
// {
//     const today=new Date();
//     const time = today.getDate();
//     const month = today.getMonth()+1;
//     const year =today.getFullYear();
//     console.log(time,'-',month,'-',year);
//     console.log(time+'*'+month+'*'+year);
// }
// date();

// task 2

// function numberOfDays(year,month)
// {
//     var today=new Date(year,month,0);
//     var date=today.getDate();
//     console.log(date);
// }
// numberOfDays(2012,1);
// numberOfDays(2012,2);
// numberOfDays(2012,9);
// numberOfDays(2012,12);

//task 3

function monthName()
{
    var today=new Date("10/11/2009");
    var month=today.getMonth();
    var mname= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    console.log(mname[month]);
}
monthName();