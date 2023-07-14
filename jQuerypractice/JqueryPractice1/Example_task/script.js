
setTimeout(function(){
    $("img.garfield")
    .attr("src", "https://static.wikia.nocookie.net/garfield/images/9/9f/GarfieldCharacter.jpg")
    .attr("width", "50%");
  }, 5000)
  
  $("img.garfield").on('click', function(){
    $(this).fadeOut()
  })
  
  $("input").keypress(
    function(event){
      if(event.which === 13) {
        alert("you pressed enter")
      }
    }
  )