// function getNationBird()
// {
//     return "Peacock";
// }
// var nationalBird= getNationBird();
// console.log(nationalBird);

// function greet() {

//     return "Hello! Have a nice day";
  
//   }
//   var output=greet();
//   console.log(output);

// function addIntegers(a, b) {
//     return a + b;
// }

// var num1 = 10;
// var num2 = 200;


// var sum = addIntegers(num1, num2);
// console.log(sum);



// function calculateAverage(a, b) {
//     const average = (a + b) / 2;
//     console.log("The average is: " + average);
//     return average;
//   }
  
  
//   const num1 = 4;
//   const num2 = 2;
  
  
//   const result = calculateAverage(num1, num2)
// function expression(){
// const convertMinutesToSeconds(minutes);  
//     const seconds = minutes * 60;
//     return seconds;
// }

// function greetWithName(minute){
// return(minute*60);
// }
// console.log(greetWithName(5));

// function findLargest(num1, num2, num3)
//  {
//      if (num1 > num2 && num1 > num3)
//      {
//       console.log("num1 is the largest");
//     } 
//     else if (num2 > num3) {
//       console.log("num2 is the largest");
//     }
//      else {
//       console.log("num3 is the largest");
//     }
//   }

//   let num1=10;
//   let num2=7;
//   let num3=15;
  
//   findLargest(num1, num2, num3);

// function findTriangleType(side1, side2, side3) {
//   if (side1 === side2 && side2 === side3) {
//     console.log("Equilateral triangle.");
//   } else if (side1 === side2 || side2 === side3 || side1 === side3) {
//     console.log("Isosceles triangle.");
//   } else {
//     console.log("Scalene triangle.");
//   }
// }


// const side1 = 10;
// const side2 = 10;
// const side3 = 10;


// findTriangleType(side1, side2, side3);

// function checkInRange(num, start, end)
//  {
//   if (num >= start && num <= end)
//    {
//     console.log("Between the range");
//   }
//    else
//     {
//     console.log("Outside the range");
//   }
// }

 
  let num1=10;
  let num2=20;
  let operation="add";

  // switch (operation) {
  //   case  "add":
  //     console.log(num1 + num2);
  //     break;
  //   case  "subtract":
  //     console.log(num1 - num2);
  //     break;
  //   case "multiply":
  //     console.log(num1 * num2);
  //     break;
  //   case "divide":
  //     if (num2 !== 0) {
  //       console.log(num1 / num2);
  //     } else {
  //       console.log("Division by zero is not allowed.");
  //     }
  //     break;
  //   case "modulus":
  //     if (num2 !== 0) {
  //       console.log(num1 % num2);
  //     } else {
  //       console.log("Modulus by zero is not allowed.");
  //     }
  //     break;
      
  //   default:
  //     console.log("Invalid operation");
  // }

  // function checkLeapYear(year)
  //  {
  //   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) 
  //   {
  //     console.log("leap year");
  //   } 
  //   else
  //    {
  //     console.log("not a leap year");
  //   }
  // }

  // function findGrade(marks) {
  //   if (marks >= 90 && marks <= 100) {
  //     console.log("S grade");
  //   } else if (marks >= 80 && marks <= 90) {
  //     console.log("A grade");
  //   } else if (marks >= 70 && marks <= 80) {
  //     console.log("B grade");
  //   } else if (marks >= 60 && marks <= 70) {
  //     console.log("C grade");
  //   } else if (marks >= 50 && marks <= 60) {
  //     console.log("D grade");
  //   } else if (marks >= 40 && marks <= 50) {
  //     console.log("E grade");
  //   } else if (marks >= 0 && marks <= 40) {
  //     console.log("Student has failed");
  //   } else {
  //     console.log("Invalid marks");
  //   }
  // }

  function findDaysInMonth(month,year)
  {
    if(month < 1 || month >12)
    {
        return "Invalid month.";
    }
    else if(month==2)
    {
        if(year%4==0 && year%100!=0 || year%400==0){
            return "The Month has 29 days.";
        }
        else{
            return "The Month has 28 days.";
        }
    }
    else if(month == 4 || month == 6 || month == 9 || month == 11)
    {
        return "The Month has 30 days.";
    }
    else{
        return "The Month has 31 days.";
    }
}

console.log(findDaysInMonth(2,2012));
