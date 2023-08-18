$(document).ready(function () {
    // Task 2: Event Handling and Propagation
    $("span").click(function (event) {
        $(this).remove();
        event.stopPropagation();
    });

    $("p").click(function () {
        $(this).remove();
    });

    $("#container").click(function () {
        $(this).remove();
    });

    // Task 4: Key Press Event
    $("#keyDemo").keypress(function (event) {
        if (event.which === 13) {
            alert("You pressed the Enter key");
        }
    });

    // Task 6: Fading Out Images
    $("img").click(function () {
        $(this).fadeOut(5000, function () {
            alert("The image is now gone.");
        });
    });
});
