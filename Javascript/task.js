// let count = 0;
// let quantity = document.getElementById('inp1');
// let price = document.getElementById("inp2");
// function addition() {
//     count += 1;
//     quantity.value = count;
//     let itemPrice = parseInt(quantity.value) * 720
//     price.value = itemPrice;
// }
// function subtraction() {
//     count -= 1;
//     if (count >= 0) {
//         quantity.value = count;
//         let itemPrice = parseInt(quantity.value) * 720
//         price.value = itemPrice;
//     }
// }
// document.getElementById("submitBtn").addEventListener("click",function(){
//     let obj={
//     userId:document.getElementById("userId").value,
//     username:document.getElementById("username").value,
//     vacantjob:document.getElementById("vacantjob").value
//     }
//     localStorage.setItem("employee",JSON.stringify(obj));
//     window.alert("Submitted successfully")
// })
// document.getElementById("printBtn").addEventListener("click",function(){
//     let data=JSON.parse(localStorage.getItem("employee"));
//     if(data)
//     {
//         let print=window.open("",'_blank');
//         print.document.write("<h1>"+`Name ${data.username}`+"</h1><br>");
//         print.document.write("<h1>"+`job ${data.vacant}`+"</h1><br>")

//     }
// })