
    
function validate(){
    if(document.myForm.Email.value == "") {
        alert("please, provide your email id")
        document.myForm.Email.focus()
        return false

    }else if(document.myForm.Password.value == "") {
        alert("please, provide your password")
        document.myForm.Password.focus()
        return false
} else{
    return true
}}


