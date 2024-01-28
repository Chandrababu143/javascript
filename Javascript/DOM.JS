// let a=document.createElement('div');
// document.body.appendChild(a);
// let b=document.createTextNode('Loginpage');
// a.appendChild(b);
// let c=document.createElement('input');
// a.appendChild(c);
// let d=document.createElement('button')
// let e=document.createTextNode('click')
// a.appendChild(d);
// d.appendChild(e);

// function off(){

//     var a=document.getElementById("off");
//     var b=document.getElementById("off1")
//     a.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
//     b.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
//     var c=document.getElementById("on")
//     var d=document.getElementById("on1")
//     c.src=" "
//     d.src=" "
// }

// function on(){
//     var c=document.getElementById("on")
//     var d=document.getElementById("on1")
//     c.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
//     d.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
//     var a=document.getElementById("off");
//     var b=document.getElementById("off1")
//     a.src=" "
//     b.src=" "
// }
// function btn1()
// {
//     document.getElementById('aaa').style.backgroundColor="red";
//     document.getElementById('aa').style.backgroundColor="red";
//     document.getElementById('bbb').style.backgroundColor="white";
//     document.getElementById('bb').style.backgroundColor="white";
//     document.getElementById('ccc').style.backgroundColor="white";
//     document.getElementById('cc').style.backgroundColor="white";
    
// }
// function btn2()
// {
//     document.getElementById('bbb').style.backgroundColor="yellow";
//     document.getElementById('bb').style.backgroundColor="yellow";
//     document.getElementById('aaa').style.backgroundColor="white";
//     document.getElementById('aa').style.backgroundColor="white";
//     document.getElementById('ccc').style.backgroundColor="white";
//     document.getElementById('cc').style.backgroundColor="white";

// }
// function btn3()
// {
//     document.getElementById('ccc').style.backgroundColor="green";
//     document.getElementById('cc').style.backgroundColor="green";
//     document.getElementById('aaa').style.backgroundColor="white";
//     document.getElementById('aa').style.backgroundColor="white";
//     document.getElementById('bbb').style.backgroundColor="white";
//     document.getElementById('bb').style.backgroundColor="white";
    
// }
// let a=document.createElement('div');
// document.body.appendChild(a);
// let b=document.createTextNode('Loginpage');
// a.appendChild(b);
// let c=document.createElement('input');
// a.appendChild(c);
// let d=document.createElement('button')
// let e=document.createTextNode('click')
// a.appendChild(d);
// d.appendChild(e)

function add()
{
    let a=document.getElementById('in1').value;
    let b=document.getElementById('ul1');
    let list1=document.createElement('li');
    list1.innerText=a;
    b.appendChild(list1);
    document.getElementById('in1').value="";      
}


