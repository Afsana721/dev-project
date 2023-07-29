
//check the js file is working using jQuery keyword

/*$(document).ready(function() {
    alert("I am ready to work")
})*/

//set a timeout function to specify attribute src for the url
setTimeout(function(){
    $("img.garfield")
    .attr("src", "https://static.wikia.nocookie.net/garfield/images/9/9f/GarfieldCharacter.jpg")
    .attr("width", "50%");
  }, 5000)
  
  //make a fadeout function indecate image of garfield using this.
  $("img.garfield").on('click', function(){
    $(this).fadeOut()
  })
  
  //create kepress for the input box and make an alert.
  $("input").keypress(
    function(event){
      if(event.which === 13) {
        alert("you pressed enter")
      }
    }
  )
