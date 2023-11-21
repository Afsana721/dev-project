//grab input elements & login button

    $("#loginButton").click(function() {

        var password1 = $("#pass1").val();
        var password2 = $("#pass2").val();
        if(password1 != "" && password2 != ""){
            if(password1 === password2){
                alert("You have successfully loged in here!!")
            } else{
                alert("password didn't match, try again please !!!")
            }


        }else{
            alert("Please, Enter password both field.")
        }

  


    })

