// var b="chandrababu";
// window.alert("hi hansome"+b);
// var a=prompt("Enter your name");
// window.alert("oops"+a)

// task 1.1

// function Babu(a,b)
// {
    
// let operator=window.prompt("Enter Your Need");
// switch(operator)
// {
//     case "add":
//         alert(a+b);
//     break;
//     case "subtract":
//         alert(a-b);
//     break;
//     default:
//         alert("Invalid Data");
//     break;
// }
// }
// Babu(5,2);

// task 3

// let number1 = window.prompt("Enter a Number 1 :");
// let number2 = window.prompt("Enter a Number 2 :");
// if(number1 == number2){
//     window.alert("Data's are equal")
// }
// else{
//     window.alert("Data's are not equal");
// }

// task 4

// let number1 = window.prompt("Enter a Number 1 :");
// let number2 = window.prompt("Enter a Number 2 :");
// if(number1=="" || number2=="")
// {
//     window.alert("One of your data is empty, kindly fill it and try again");
// }

// task 5
//     function Babu(){
//         var a=parseInt(document.getElementById('inp1').value);
//         var b=parseInt(document.getElementById('inp2').value);
//          var add=a+b;
//          var sub=a-b;
//          var mult=a*b;
//          var div=a/b;
//          var mod=a%b;
//          var result=document.getElementById('result');
//          result.innerHTML = "Addition:" +add+"<br>"
//          result.innerHTML += "Subtraction:" +sub+"<br>"
//          result.innerHTML += "Multiplication:" +mult+"<br>"
//          result.innerHTML += "Division:" +div+"<br>"
//          result.innerHTML += "Modlus:" +mod+"<br>"
//     }
// task 6



// function demo()
// {
//     let input=parseInt(document.getElementById('input1').value);
//     let opt='<option>select</option>';
//     for(let i=0;i<input;i++)
//     {
//         opt +='<option>'+i+'</option>';
//     }
//     document.getElementById('number').innerHTML=opt;
// }




// function Babu()
// {
//     let input=parseInt(document.getElementById('input1').value);
//     let opt='<option>select</option>';
//     for(let i=0;i<input;i++)
//     {
//         opt +='<option>'+i+'</option>';
//     }
//     document.getElementById('number').innerHTML=opt;
// }                                                                   

// task 8

// function demo()
// {
//     let input=parseInt(document.getElementById('input1').value);
//     let opt='<option>select</option>';
//     for(let i=0;i<input;i++)
//     {
//         opt +='<option >'+i+'</option>';
//     }
//     document.getElementById('number').innerHTML=opt;
// }     
// function nextDemo()
// {
//     let select=parseInt(document.getElementById('number').value);
//     let opt1='<option>select</option>';
//     for(let i=0;i<select;i++)
//     {
//         opt1 +='<option>' +i+'</option>';
//     }
//     document.getElementById("number2").innerHTML=opt1;
// }                                                              

// let body=document.body;
// let div=document.createElement("div");
// body.appendChild(div);
// let text=document.createTextNode("Enter A Date : ");
// div.appendChild(text);
// let input=document.createElement("input");
// div.appendChild(input);
// input.setAttribute("id","inpid");
// input.type="date";
// input.setAttribute("onchange","date()");
// let input1=document.createElement("input");
// div.appendChild(input1);
// input1.setAttribute("id","inpid1");
// let input2=document.createElement("input");
// div.appendChild(input2);
// input2.setAttribute("id","inpid2");

// function date(){
//     let inp1=document.getElementById("inpid").value;
//     let currentDate=new Date(inp1);
//     let afterDate = new Date(inp1);
//     afterDate.setDate(currentDate.getDate()+5);
//     document.getElementById("inpid1").value=afterDate.toDateString();
//     let beforeDate= new Date(inp1);
//     beforeDate.setDate(currentDate.getDate()-5);
//     document.getElementById("inpid2").value=beforeDate.toDateString();

// }



function array1()
{
    let arr=[1,5,88,77,];
    console.log(Math.max(...arr));

}
array1();