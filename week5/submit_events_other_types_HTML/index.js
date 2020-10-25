//BODY STYLING
var box = document.getElementById('box');
box.style.backgroundImage = "url('https://images.unsplash.com/photo-1489212855151-30b04f553971?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')";
box.style.border = "solid white"
box.style.opacity = "0.85";
box.style.borderWidth = "50px";
box.style.margin = "100px 200px";
box.style.padding = "0";
box.style.alignItems = "center";
box.style.fontFamily = "georgia";

//PERSON STYLING
var person = document.getElementById('person');
person.style.backgroundColor = "white"
person.style.paddingTop = "10px"
person.style.border = "solid white"
;

// //GENDER STYLING
var genderselect = document.getElementById("genderselect")
genderselect.style.backgroundColor = "white"
genderselect.style.border = "solid white"
;


// //DESTINATION STYLING
var whereto = document.getElementById("whereto")
whereto.style.backgroundColor = "white"
whereto.style.paddingBottom =  "50px"
whereto.style.border = "solid white"
;


// //ALLERGINS STYLING
var allergins = document.getElementById("allergins")
allergins.style.backgroundColor = "white"
allergins.style.padding = "10px"
allergins.style.border = "solid white";




 function display(){

   var a = document.myForm.fname.value;
   var b = document.myForm.lname.value;
   var c = document.myForm.age.value;
   var d = document.myForm.gender.value;
   var e = document.myForm.destination.value;
  
   var items =document.getElementsByName("restriction");
   console.log(document.getElementsByName("restriction"))
   var food = ""
   for(var i = 0; i< document.getElementsByName("restriction").length; i++){
       console.log(document.getElementsByName("restriction")[i].checked)
       if(document.getElementsByName("restriction")[i].checked){
  
            food+=document.getElementsByName("restriction")[i].value+" "
       }
   }
   console.log(food)
   alert("First name: "+a+"\n "+"Last name: "+b+"\n  "+"Age: "+c+" \n"+"Gender: "+d+" \n "+"Location: "+e+"\n "+"restriction: "+food); 
   document.myForm.fname.value=""
   document.myForm.lname.value=""
   document.myForm.age.value=""
   document.myForm.gender.checked=false
   
   
   for(var i = 0; i< document.getElementsByName("restriction").length; i++){
    document.getElementsByName("restriction")[i].checked = false
    
}
  document.myForm.reset();

   }//end 
  


   const form = document.myForm
  
    form.addEventListener("submit", (event) => {
        event.preventDefault()
       display()
       form.reset()
    })
  
    