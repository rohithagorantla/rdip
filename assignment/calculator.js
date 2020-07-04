function dis(val) {
    document.getElementById("d").value  += val;
}
function clr() {
    document.getElementById("d").value = "";
}

function cal()
{
var x = document.getElementById("d").value;
var y = x.split("");
var a = y[1];
if(a == '+')
{
document.getElementById("d").value = add();
}
else if(a == '-') {
document.getElementById("d").value = sub();
}
else if(a == '*') {
document.getElementById("d").value = mul();
}
else if(a == '/') {
document.getElementById("d").value = div();
}
else if(a == '%') {
document.getElementById("d").value = per();
}
}
function add()
{
var x = document.getElementById("d").value;
var y = x.split("");
var a = parseInt(y[0]);
var b = parseInt(y[2]);
var res = a+b;
return res;
}
function sub()
{
var x = document.getElementById("d").value;
var y = x.split("");
var a = parseInt(y[0]);
var b = parseInt(y[2]); 
var res = a-b;
return res;
}
function mul()
{
var x = document.getElementById("d").value;
var y = x.split("");
var a = parseInt(y[0]);
var b = parseInt(y[2]); 
var res = a*b;
return res;
}
function div()
{
var x = document.getElementById("d").value;
var y = x.split("");
var a = parseInt(y[0]);
var b = parseInt(y[2]); 
var res = a/b;
return res;
}

function per()
{
var x = document.getElementById("d").value;
var y = x.split("");
var a = parseInt(y[0]);
var b = parseInt(y[2]); 
var res = (a*b)/100;
return res;
}
function sqrt()
{
var x = document.getElementById("d").value;
var a = parseInt(x);
var res = Math.sqrt(a);
document.getElementById("d").value=res;
}
function abs()
{
var x = document.getElementById("d").value;
var y = x.split("");
var a = y.length;
if(a>1)
{
b=y[2];
document.getElementById("d").value=b;
}
else
{
document.getElementById("d").value=x;
}
}

function validatename(){
    var txt = document.getElementById('text1').value
    var letters = /^[A-Za-z]+$/;
        if (txt.match(letters)) {
            return true;
           
        }
        else {
            alert('Please enter alphabets only');
           
        }
}
function validateemail()
{
    var email = document.getElementById('text2').value
    var text = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(text))   
    {
        return true;
        
    }
    else {
        alert("Your email is invalid");
        
    }
}
function validatenum(){

    var number = document.getElementById('num1').value
    var num = /^\d{10}$/;
        if (number.match(num)) {
            return true;
            
        }
        else {
            alert("Your number is invalid");
           
        }
}

function validation()
{
var a = document.getElementById('text1').value  ;
var b = document.getElementById('text2').value  ;
var c = document.getElementById('num1').value ;
   if(a == " " || b == " " || c == " ")
{
   alert("Fields should not be empty");
}
else
{
   return true;
 }  
}

function palindrome(s)
{
    var s = document.getElementById('str1').value
    s = s. toLowerCase();
    let i = 0;
    let j = s.length - 1;
    while(i<j)
    {
        if(s[i] == s[j])
       {
            i++; 
            j--;
        }
        else {
            alert(s + " is not a palindrome");
            return false;
        }
    }
            alert(s+" is a palindrome");
    return true;
    
}

function anagram()
{
 var s1 = document.getElementById("str1").value;
 var s2 = document.getElementById("str2").value ;                                       
 s1 = s1.replace(/[^\w]/g, '').toLowerCase();
 s2 = s2.replace(/[^\w]/g, '').toLowerCase();
var len1 = s1.length;
var len2 = s2.length;
if(len1 !== len2)
{
   alert("Strings are not anagram to each other ");
}
else
{
var ss1=s1.split('').sort().join('');
var ss2=s2.split('').sort().join('');

 if(ss1 === ss2)
{
       alert("Strings are anagram to each other");
}
else
{
    alert("Strings are not a anagram to each other");
}
}
}





/*function randnum()
{
    document.getElementById("in1").value=Math.floor(Math.random() * Math.floor(1000)));
    document.getElementById("in2").value=Math.floor(Math.random() * Math.floor(1000)));
}

function game()
{

    var a = document.getElementById("in1").value;
    var b = document.getElementById("in2").value;
    if(a = " ")
    {
    alert("please generate numbers:");
    return false;
    }
var r = sub_fun(a);
var s = sub_fun(b);
if (r == s)
{
 alert("It's a tie ");
return false;
}
if(r ==1 && r==2)
{
alert("If inputs are Human and  Cockroach; then the Human Survives");
return false;
}
if(r == 2 && r == 1)
{
alert("If inputs are Cockroach and Human ; then the Human Survives");
return false;
}
if(r == 1 && r == 3)
{
alert("If inputs are Human and  Bomb; then the Bomb Survives");
return false;
}
if(r == 3 && r == 1)
{
alert("If inputs are Bomb and  Human; then the Bomb Survives");
return false;
}
if(r == 2 && r == 3)
{
alert("If inputs are Cockroach and Bomb; then Cockroach Survives");
return false;
}
if(r == 3 && r == 2)
{
alert("If inputs are Bomb and  Cockroach; then Cockroach Survives");
return false;
}
}

function sub_fun(p)
{
if(p >= 0 && p <= 250){
 return 1;
}
if(p >= 250 && p <= 500){
 return 2;
}
if(p >= 500 && p <= 1000){
 return 3;
}
} */