 var text=document.getElementById("name")
 var email=document.getElementById("email")
 var pass=document.getElementById("pass")


 text.addEventListener("keyup",function(event){
    var nameregex=/^[a-zA-Z ]+$/
    var nameerror=document.getElementById("nameerror")
    console.log(event.target.value)
    if(nameregex.test(text.value)==true)
    {
        nameerror.style.display="none"
    }else{
         nameerror.style.display="block"
    }
    event.preventDefault()
 })
 email.addEventListener("keyup",function(event){
    var emailregex=/^[a-zA-Z0-9]+@gmail\.com$/
    var emailerror=document.getElementById("emailerror")
    console.log(event.target.value)
    if(emailregex.test(email.value)==true)
    {
        emailerror.style.display="none"
    }else{
         emailerror.style.display="block"
    }
    event.preventDefault()
 })
pass.addEventListener("keyup", function(event) {
    var passerror = document.getElementById("passerror");
    var value = event.target.value;

    if (value.length == 0) {
        passerror.style.display = "block";
        return;
    }

    if (value.length > 6) {
        passerror.style.display = "block";
    } else {
        passerror.style.display = "none";
    }
});
var textArea = document.getElementById("text");

textArea.addEventListener("input", function(){
    var MAX = 200;
    var len = textArea.value.length;
    var remaining = MAX - len;

    document.getElementById("typedCount").textContent = len
    document.getElementById("leftCount").textContent = remaining

    var msgwarning = document.getElementById("msgwarning")

    if (len >= MAX) {
        msgwarning.style.visibility = "visible"

    } else {
        msgwarning.style.visibility = ""
        
    }

})

