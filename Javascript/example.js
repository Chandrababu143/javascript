// function image()
// {
//     document.getElementById("img").style.width="100px"
// }

// let div=document.createElement("div");
// let skill=document.createElement("label");
// skill.innerText="skill:";
// let input=document.createElement("input");
// document.body.appendChild(skill);
// document.body.appendChild(input);
// document.body.appendChild(div);
// let add=document.createElement("add");
// document.body.appendChild(add);

// function AddItem(){
//     let item=document.getElementById('input').ariaValueMax;
//     let ul=document.getElementById('ulid');
    
// }

// function addIntegers(a, b){
//     return "a + b";
// }
// var num1=10;
// var num2=200;

// var sum=addIntegers(num1,num2);
// console.log(sum);

// function dob(){
//     let a=document.getElementById('inp1').value
//      d1.getFullYear(2023);
//      console.log(d1);


// }


// function val()
//     {
// let inp1=document.getElementById('inp1').ariaValueMax;
// let ptn
//     }
// function validatePhoneNumber(input_str) {
//     var result = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  
//     return result.test(input_str);
    
//   }
// function add()
// {
//     let a=document.getElementById("na").value;
//     let b=document.getElementById("em").value;
//     let c=document.getElementById("mo").value;
//     let d=document.getElementById("pa").value;
//     let f=document.getElementById("ci").value;
//     let g=document.getElementById("pi").value;
//     let h=document.getElementById("re").value;
//     let ptn=/^[A-za-z]{5,20}$/;
//     let ptn1=/^[a-z]{20}[0-9]{5}[\@]["gmail"][\.]["com']$/;
//     let ptn2=/^[5-7]{1}[0-9]{9}$/;
//     let ptn3=/^[a-zA-z0-9]{10}$/;
//     let ptn4=/^[a-zA-z]{10}$/;
//     let ptn5=/^[0-9]{6}$/;
//     let ptn6=/^[0-9]{6}$/;
//     if(a.match(ptn) && b.match(ptn1) && c.match(ptn2) && d.match(ptn3) && f.match(ptn4) && g.match(ptn5) && h.match(ptn6))
//     {
//         alert("valid");
//     }
//     else{
//         alert("invalid");
//     }
// }

function startTrafficSignal () {
    var green=document.getElementById("green");
    var red=document.getElementById("red");
    var yellow=document.getElementById("yellow");
 
    green.style.opacity=1;
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=.3;
        yellow.style.opacity=1;
    },5000);
 
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=1;
        yellow.style.opacity=.3;
    },7000);
 
    setTimeout(function () {
        green.style.opacity=1;
        red.style.opacity=.3;
        yellow.style.opacity=.3;
    },12000);
}
 
var timer=setInterval(function () {
    startTrafficSignal();
},12000);
 
startTrafficSignal();


// class Person
//  {
// constructor (name,collage,year)
// {
//     this.name=name;
//     this.collage=collage;
//     this.year=year;
// }
// }
// let obj=new Person('Babu','microcollage','in2023');
// console.log(obj);
// console.log(obj.name+obj.collage+obj.year);

// class Shape{
//     constructor (name,side,sidelength){
//         this.name=name;
//         this.side=side;
//         this.sidelength=sidelength;
//     }
//     calcperimeter(){
//         return (`${this.name} perimeter is ${this.side*this.sidelength} `);
//     }
     
// }
// let obj=new Shape('shape',4,5,);
// console.log(obj.calcperimeter())

// function getData(){
//     var msg=()=>{
//         return 'welcome';
//     }
//     console.log(getData('msg'));
// }
// var username="chandrababu";
// var lastname="G";
// var password="123456";
// var qualification="bca";

// console.log(username,lastname,password,qualification);

// function isOdd(number,callback)
// {
//     let a=number%2==0;
//     console.log(a);
//     callback()
// }
// function vro()
// {
//     console.log("Result")
// }
// isOdd(4,vro);
// isOdd(5,vro);
// let date=[
//     {"id":11,"title":"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5","price":109,"description":"3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.","category":"electronics","image":"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg","rating":{"rate":4.8,"count":319}}
// ]
// function getData()
// { 
//     date.map((value) =>
//     {
//         output=`id ${value.id}
//        title ${value.title}
//        price ${value.price}
//        description ${value.description}
//        category ${value.category}
//        image ${value.image}
//        rating ${value.rating}`;
       
//     })
//     document.getElementById('divid').innerText=output;
// }
// getData();

