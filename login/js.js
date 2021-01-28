// all global variables pre defined here
const name = document.forms["reform"]["name"];  
const password = document.forms["reform"]["password"];
let suggest=document.getElementsByClassName("suggest-password")[0];
let pass=document.getElementsByClassName("pass")[0];
function EXAMPLE() { 
   

    if (name.value == "") { 
      alert("Please enter your name."); 
      name.focus(); 
      return false; 
    } 
    if (password.value == "") { 
      alert("Please enter your password"); 
      password.focus(); 
      return false; 
    }
    return true;
  }  
  pass.onclick=()=>{
    console.log(8);
 if(password.value=="")
 {
   let string=randompassword();
   suggest.style.display="block";
 }
 else{
  suggest.style.display="none";
 }
  };
  function randompassword()
  {
   let s1="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
   let num="123456789"
   let extra="@!#$%^&*()";
   let answer=[];
   let i;
   for( i=1;i<=4;i++)
   {
    let char = Math.floor(Math.random() 
    * s1.length + 1); 
    answer.push(s1.charAt(char) );
   }
   let j;
   for(j=1;j<=4;j++)
   {
    let char = Math.floor(Math.random() 
    * extra.length + 1); 
    answer.push(extra.charAt(char) );
   }
   let k;
   for(k=1;k<=2;k++)
   {
    let char = Math.floor(Math.random() 
    * num.length + 1); 
    answer.push(num.charAt(char) );
   }
   let pass="";
   let o;
   shuffle(answer);
   for(o=0;o<10;o++)
   {
     pass+=answer[o];
    
   }
  document.getElementById("ok").innerHTML=pass;
  }
//  function for generating jumble array elemtnes
//source:-stackoverflow
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    
    while (0 !== currentIndex) {
  
      
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }


 suggest.onclick=()=>{
  let a=document.getElementById("ok").innerHTML;
  
  pass.value=a;
  suggest.style.display="none";
  };