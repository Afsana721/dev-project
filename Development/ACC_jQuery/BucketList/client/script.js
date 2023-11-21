$(document).ready(() => {
    //alert("working !!!");
    // $("ul").on("click","span", function() {
    //     //$(this).toggleClass('completed');
    //     $(this).parent().remove();
    //     $("input").keypress(function(event){
    //         if(event.which ===13){
    //             let listItem = $(this).val();
    //         $("ul").append(
    //             <li>${listItem}<span><i class= "fa fa-trash-alt"></i></span></li>
    //         );
    //         }
    //     })
    // })

    $("input").keypress(function(event) {
        if(event.which ===13 && $(this).val()){
            //let listItem = $(this).val();
        //take only 0 to 30 characters of the string after typing, no matter how long
            let listItem = $(this).val().substring(0, 30);
            $("ul").append(
                `<li>${listItem}<span><i class="fa fa-trash-alt></span></li>` );
            $(this).val("");
            
        }
    });
})