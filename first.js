// // console.log("Bismillah Hirrah Manir Rahim");

// // alert("Bismillah Hirrah Manir Rahim");



// // document.write("Bismillah Hirrah Manir Rahim  " );

// // var text1 = prompt();

// // var text3 = text1 + text2;
// // var text3 = text1.concat(text2);
// var text1 = "Bangladesh";
// var text2 = " a beautiful country.";
// // var text3 = text1.charAt(4);
// // Bangladesh
// //  var text3 = text1.slice(4,7);
// // document.write(text3);
// // document.write(text1 );
// // var num = 123.3546;
// // document.write(num.toFixed(3));

// // document.write(num.toPrecision(6));

// // var numb = "254656";
// //  var numb = parseInt(numb);
// // document.write(numb + 10);

// // var numbe = 245423;
// // var faisal = toString(numbe);
// // document.write(numbe);

// // document.write(text1 + " is a poor country but" + text2);
// // var a = 5;
// // document.write(4+5);
// // document.write(4-5);
// // document.write(4*5);
// // document.write(4/5);
// // document.write(4%5);
// // document.write(a++);
// // document.write(a++);
// // document.write(a--);
// // document.write(a--);

// var ha = document.getElementById("faisal");
// // document.getElementById("faisal").innerHTML = "768";
// // ha.innerHTML = "Habibi";
// document.querySelector("#first").innerHTML = "Potato";
// document.querySelector(".pen").innerHTML = "Habibi";
// document.querySelectorAll(".pen")[1].innerHTML = "nothing";
// document.querySelector("li a").innerHTML = "Apple";

// function click_me() {
//     // alert("Button is clicked");
//     document.querySelector("#paragraph").innerHTML = "Click me is clicked";
// }

// function image() {
//     document.querySelector("#img").src = "image/Faisal.jpg";
// }

// //creating html element

// var ele = document.createElement("h3");
// var text = document.createTextNode("Thanks all");
// ele.appendChild(text);
// var div = document.getElementsByClassName("newDiv")[0];
// div.appendChild(ele);

// //slide show

// var arr = ["./image/1.png", "./image/2.png", "./image/3.png", "./image/4.png", "./image/5.jpg"];
// var clss = document.getElementsByClassName("slide")[0];
// var imag = clss.querySelector("img");

// count = 0;
// function next() {
//     count++;
//     if (count == arr.length) {
//         count = 0;
//         // imag.src = arr[count];
//     }
//     imag.src = arr[count];
// }
// function previous() {
//     count--;
//     if (count < 0) {
//         count = arr.length - 1;
//         // imag.src = arr[count];
//     }
//     imag.src = arr[count];
// }
// //style
// //  var stp = document.querySelector(".style");
// //  var child = stp.children[1];

// function stle() {
//     var id = document.querySelector("#hungry");
//     id.innerHTML = "Good and you?"
//     id.classList.add("spa");
// }

// //Event Listener
// var listener = document.querySelector("#h3");
// listener.addEventListener("mouseover", function () {
//     listener.classList.add("spa");
// });

// listener.addEventListener("mouseout", function () {
//     listener.classList.remove("spa");
// });
// var len = document.querySelectorAll(".Bttn").length;
// // document.write( len);
// for (i = 0; i < len; i++) {
//     var bttn = document.querySelectorAll(".Bttn")[i];
//     bttn.addEventListener("click", function () {
//         var name = this.innerHTML;
//         var para = document.querySelector(" .eventlistener h1");
//         para.innerHTML = name + " is clicked";
//     });
// }

// // Audio play
// for (i = 0; i < 3; i++) {
//     var btnn = document.querySelectorAll(".btn")[i];
//     btnn.classList.add("btnnn");
// }

// for (i = 0; i < 3; i++) {
//     var btnn = document.querySelectorAll("btn")[i];
//     btnn.addEventListener("click", function () {
//         var tex = this.innerHTML;
//         switch (tex) {
//             case 'A':
//                 var audio = new Audio("Location");
//                 audio.play();
//                 break;
//             case 'B':
//                 var audio = new Audio("Location");
//                 audio.play();
//                 break;
//             case 'C':
//                 var audio = new Audio("Location");
//                 audio.play();
//                 break;
//         }
//     });
// }

// document.getElementsByClassName("faisal").innerHTML = "HSTU";
// // OnSubmit

// var form = document.querySelector("form");
// var val =  form.querySelector("div #name");
// var email = form.querySelector("div #email");
// var pass = document.querySelector("#password");

// form.addEventListener('submit',functioS);
//  function functioS(e){
//     e.preventDefault();
//     console.log("submit");
//  }
//  document.write("Bismillah hirrah manir rahim");
  

// document.querySelector("#faisal").innerHTML = "Bismillah hirrah manir rahim";

// form
// var form = document.querySelector("form");
// var faisal = form.querySelector(" div #name");
//  var email = form.querySelector(" div #email");
//  var password = form.querySelector(" div #password");

// form.addEventListener('submit', handler);
// function handler(e){
//     e.preventDefault();
//     var userInfo = {
//         name : faisal.value,
//         email : email.value,
//         password : password.value
//     }

//     console.log(userInfo);

//     faisal.value = "";
//     email.value = "";
//     password.value = "";
// }

// Select

// var Select = document.querySelector("#program");
 
// Select.addEventListener('change', handler);
// function handler(e){
//     var value = e.target.value;
//      console.log(value);
// }

// VideoEvent

// var video = document.querySelector("video");

// video.addEventListener('canplay', canplay);
// function canplay(e)
// {
//     console.log("canplay");
// }

// video.addEventListener('play', play);
// function play(e){
//     console.log("play");
// }

// video.addEventListener('pause', function pause(e)
// {
//     console.log("pause");
// });

// video.addEventListener('volumechange', change);
// function change(e)
// {
//     console.log("VolumeChange");
// }

// video.addEventListener('ended', ended)
// function ended(e){
//     console.log("Thanks for watching");
// }

// window.addEventListener('load',function()
// {
//     console.log(`load`);
// });

// window.addEventListener('unload', function(){
//     console.log("unload");
// });

// window.addEventListener('scroll', function(){
//     console.log(`Scrolled`);
// });

// window.addEventListener('resize', function(){
//     var width = window.outerWidth;
//     var height = window.outerHeight;
//     console.log(`height: ${height}, width: ${width}`);
// });

// var toggle = document.querySelector("details");
// toggle.addEventListener('toggle',function(e){
// if(e.target.open){
//     console.log(`toggled`);}
//     else
//     {
//         console.log(`Untoggled`);
//     }
// });

// FocusEvent

 var inn = document.querySelector('#input');
// // console.log(inn);
// inn.addEventListener('blur', function(e)
// {
//     // console.log('blured');
//     inn.classList.remove("inpute"); 
//     inn.value = e.target.value.toUpperCase();
//     value = e.target.value;
//     console.log(value);
// });
// inn.addEventListener('focus', function(){
//     console.log("focused");
//     inn.classList.add("inpute");
//     // inn.style.backgroundColor = "orange";
// });

// // MouseEvent
// var div = document.querySelector("#division");
// div.classList.add("division");

// div.addEventListener('click', function(){
//     console.log("Clicked");
// });

// div.addEventListener('dblclick',  function(){
//     console.log("dblclicked");
// })

// div.addEventListener('mousedown', function(){
//     console.log("mousedown is ocurred");
// });
 
// div.addEventListener('mousedup', function(){
//     console.log("mousedup is ocurred");
// });

// div.addEventListener('mouseenter', function(){
//     console.log("mouseenter is ocurred");
// });

// div.addEventListener('mouseleave', function(){
//     console.log("mouseleaved");
// });

// div.addEventListener('mousemove', function(){
//     console.log("mousemoved");
// });

// div.addEventListener('mouseover', function(){
//     console.log("mouseovered");
// });

// keyEvent

var key = document.querySelector("textarea");

// key.addEventListener('keydown', function()
// {
//     console.log("keydowned");
// });

// key.addEventListener('keypress', function()
// {
//     console.log("keypressed");
// });

// key.addEventListener('keyup', function(e)
// {
//     // console.log("keyuped");
//      console.log(e.keyCode);
//      console.log(e.key);

// });

// BOM 

// console.log(window.document);
// console.log(document.location);
// document.writeln(location.href);
// document.writeln(location.protocol);
// document.writeln(location.host);
// document.writeln(location.hostname);
// document.writeln(location.port);
// document.writeln(location.pathname);

 var btn = document.querySelector(".button");
 btn.classList.add("btnnn");
// btn.addEventListener('click', function(e)
// {
//     location.assign("https://www.google.com");
// }); 

// Boxes UP
// alert("Welcom!");
// var ler = confirm("Are you sure");
// // console.log(ler);
// if (ler)
// {
//     document.write("Message is deleted");
// }
// else
// {
//     document.write("Message isn't delete");
// }

// var pro = prompt("Enter your name: ");
// if (pro == null || pro == " ")
// {
//     document.write("Name is not found");
// }
// else{
//     document.write("Name is "+ pro);
// }

// setTime

// setTimeout(() => {
//     console.log("Mohammad Faisal");
// }, 5000);
// var element = document.querySelector(".content");

 
// btn.addEventListener('click', function(){
//   element.textContent = "Link button is clicked";
//   setTimeout(() => {
//     element.textContent = "";
//   }, 2000);
// });
// var count = 10;
// setInterval(() => {
//     if(count >= 0){
//         element.textContent = count;
        
//     }else{
//         element.textContent = "Time is over!";
         
//     }
//     count--;
   
    
// }, 1000);

// try, Catch, Finally, Through

// try{
//     alert("Hi everyone!");
//     alert(x);

//     alert("Mohammad Faisal");
// }catch(err){
//     console.log(err);
//     console.log(err.name);
//     console.log(err.message);
// }finally{
//     alert("Mohammad Faisal");
// }

// btn.addEventListener('click',function(){
//     btn.textContent = "checked";
//     var num = inn.value;
// try{
//     if (num < 15) {
//         throw "It is too low"
//     } else if(num > 30){
//         throw "It is too high"
//     }
//     else{
//         console.log(num);
//     }
// }catch(err){
//     console.log(err);
// }
// });
 
//rest, default and spread operator

// function add(x,y, ...z){
//     return x+y+z;
// }
// const n = [12,23,24,35,56];
// // console.log(add(n[0],n[1],n[2]));
// // console.log(add(...n));
// console.log(add(...n));

// function print(p = "Hi ! I am default operator"){
//     return p;
// }
// console.log(print());
// console.log(print("Mohammad Faisal"));

// Spread operator can be used anywhere in a method as a parameter.

// object literals

// return object
// function details(name, age){
//     return {
//         // name: name,
//         // age: age
//         name, age
// }
// }
// console.log(details("Mohammad Faisal",25));
// let varr = {
//     faisal(){
//         return "hi!"
// }
// }
// console.log(varr.faisal()); 

// forEach function

// var n = [1,2,3,4,5];
// n.forEach(function(x,i,arr){
//     arr[i]= x+5;
// // console.log(x);
// });
// // console.log(n.indexOf(5));
// console.log(n);

// map function
 
// var n = [1,2,3,4,5];
// var nn = n.map(function(x){
//     return x+5;
// });
// console.log(nn);

// filter function
// var nn = n.filter(function(x){
//     return x<5;
// });
// console.log(nn);

try{
    var students = [
        {
            id: 1902025,
            name: "Faisal",
            gpa: 3.45
        },
        {
            id: 1902045,
            name: "Zahid",
            gpa: 3.65
        },
        {
            id: 1902075,
            name: "Sabbir",
            gpa: 3.75
        },
        {
            id: 1902028, 
            name: "Rakib",
            gpa: 3.95
        }
    ]
}catch(e){
    console.log(e);
}

// function print(){
//     return students.filter(function (x){
//         return x.gpa>3.50
//     }).map(function(y){
//         return y;
//     });
// }
// console.log(print());

var display = () =>{
    return students.filter((x) => {
        return x.gpa>3.50;
    }).map((y) =>{
        return y.name;
    });
}
console.log(display());