// all global variables pre defined here
const name = document.forms["reform"]["name"];  
const password = document.forms["reform"]["password"];
let suggest=document.getElementsByClassName("suggest-password")[0];
let pass=document.getElementsByClassName("pass")[0];
let pass1=document.getElementsByClassName("pass")[1];
function EXAMPLE() { 
  

    if (name.value == "") { 
    
      name.focus(); 
      return false; 
    } 
    else if (password.value == "") { 
      
      password.focus(); 
      return false; 
    }
    return true;
  }  
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  function EXAMPLE1() { 
  

    let oldpass=document.getElementById("c1");
    let newpass=document.getElementById("c2");
    let email=document.getElementById("c3").value;

    if(oldpass.value==newpass.value && validateEmail(email))
    {
        return true;
    }
    else{
        if(oldpass.value!=newpass.value)
        alert("Password should be same");
        else
        {
            alert("Email format is wrong");
        }
        return false;
    }
    
  }  
  pass.onclick=()=>{
  
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
  pass1.value=a;
  suggest.style.display="none";
  };

  function openPage(pageName,elmnt,color) {
      if(pageName=="Login")
      {
        suggest.style.display="none";
      }
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  document.getElementById("s2").click();
 
 

  