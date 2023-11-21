//wirte a function that selects the value of the h1 tag 
$(document).ready(() => {
    // Set the initial content of h1
    $("h1").text("Asef");

    // Get the initial content of h1
    var name = $("h1").text();

    // Display an alert with the initial content
    alert("The content of my h1 tag is: " + name);

    $("#canine").text("lion");
    $(".feline").eq(1).text("leopard");
    
     // Get the src attribute value from the img tag
     var imgSrc = $("img").attr("src");

     // Set the src value inside the span
     $("#imageSrc span").text("The src of my image is: " + imgSrc);
 
     // Log the content of the span to the console
     console.log($("#imageSrc span").text());
  // Set the src attribute of the img tag
  $("img").attr("src", "https://s3.amazonaws.com/accsoftwarebootcamp.com/garfield-1.jpg");

  // Get the updated src value from the img tag
  var updatedImgSrc = $("img").attr("src");

  // Set the updated src value inside the span
  $("#imageSrc span").text("The src of my image is: " + updatedImgSrc);

  // Log the content of the span to the console
  console.log($("#imageSrc span").text());

  $("input").attr("type", "color")

});

