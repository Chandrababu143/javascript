//task 1

function userName(){
    let uname=document.getElementById("nameid").value;
    let pattern=/^[A-Za-z]{0,25}$/;
    if(uname.match(pattern))
    {
        console.log(uname);
    }
    else
    {
        console.log("invalid Name");
    }}

    
    // // task 2

    // function userName(){
    //     let password1=document.getElementById("passid").value;
    //     let pattern3=/^[A-Za-z@#$%^&+]{0,15}$/;
    // if(password1.match(pattern3))
    // {
    //     console.log(password1);
    // }
    // else
    // {
    //     console.log("Invalid Password");
    // }}

    //task 3

    function userName(){
        let mob=document.getElementById("numid").value;
        let pattern2=/^[6-9]{1}[0-9]{9}$/;
    if(mob.match(pattern2))
    {
        console.log(mob);
    }
    else
    {
        console.log("inavalid Mobile Number")
    }}