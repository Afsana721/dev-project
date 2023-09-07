//Accordion script.js
// get the third panel to be open when the page loads
// $(document).ready(function() {
//     $('#twd').accordion({
//         active: 2 // Index of the third panel (zero-based)
//     });
// });

//What if we do not want any of the panels to be open when page loads

// $(document).ready(function() {
//     $('#twd').accordion({
//         active: false // No panel is open by default
//     });
// });


// $(document).ready(function() {
//     $('#twd').accordion({
//         active: false // No panel is open by default
//     });

//     // Close all panels after initialization
//     $('#twd').accordion("option", "active", false);
// });


//How would we speed up the animation effect of the panels opening
// $(document).ready(function() {
//     $('#twd').accordion({
//         animate: 200, // Animation duration in milliseconds
//         active: false // No panel is open by default
//     });

//     // Close all panels after initialization
//     $('#twd').accordion("option", "active", false);
// });

//What do we need to do to have panels open when mouse hover over instead of clicking on panels

$(document).ready(function () {
    $('#twd').accordion({
        event: "mouseover", // Open panels on mouseover
        animate: 200, // Animation duration in milliseconds
        active: false // No panel is open by default
    });

    // Close all panels after initialization
    $('#twd').accordion("option", "active", false);
});


// How do we get the accordion to be 50% of the page width and auto margins- use CSS

// add to sorting
$('#cast').sortable();

//how do we allow sorting only on the 'y' axis

$(document).ready(function () {
    $('#cast').sortable({
        axis: 'y' // Allow sorting only along the y-axis (vertical)
    });
});

// how do we change our coursor to the  "grab" hand when we sort - use css

// What if we only wanted the even item to be sortable

$(document).ready(function () {
    $('#cast').sortable({
        axis: 'y', // Allow sorting only along the y-axis (vertical)
        items: 'li:nth-child(even)' // Target even items for sorting
    });
});


// add a placeholder while sorting using the jQuery UI sortable function
$(document).ready(function () {
    $('#cast').sortable({
        axis: 'y', // Allow sorting only along the y-axis (vertical)
        items: 'li:nth-child(even)', // Target even items for sorting
        placeholder: 'sortable-placeholder' // Class for the placeholder
    });
});


//dragging the blue block
$("#innerDiv1").draggable();

//draggable challenge
//How do we contain the smaller box inside the bigger box
$(document).ready(function () {
    $("#innerDiv1").draggable({
        containment: "#outerDiv1" // Contain the draggable element within the outerDiv1 container
    });
});

// What if we wanted teh blue box to revert back to its starting position
$("#innerDiv1").draggable({
    containment: "#outerDiv1", // Contain the draggable element within the outerDiv1 container
    revert: "invalid" // Revert the element to its original position when dragging is finished
});

//disable the ability to drag an element using the jQuery UI Draggable plugin

// Disable dragging on the blue box
$("#innerDiv1").draggable("disable");

//add code for article resizability
$("article").resizable();

// explicitly enable the animation
//add code for article resizability with animation

$("article").resizable({
    animate: true
});


//maintain ratios: resize the element, it will always stay a square because the width and height will change proportionally 
//to maintain the aspect ratio.

$("article").resizable({
    animate: true, // Optional: Add animation to resizing
    aspectRatio: 1 // Maintain a 1:1 aspect ratio (square)
});

//control the maximum height and width of the resizable element

$("article").resizable({
    animate: true, // Optional: Add animation to resizing
    aspectRatio: 1, // Maintain a 1:1 aspect ratio (square)
    maxHeight: 400, // Set maximum height to 400 pixels
    maxWidth: 400 // Set maximum width to 400 pixels

    //maxHeight: 200, // Set maximum height to 200 pixels
    //maxWidth: 200 // Set maximum width to 200 pixels
});

//Date Picker script- to invoke datepicker()
$('#cal').datepicker();

//use the beforeShowDay() from jQuery to prevent weekends

$('#cal').datepicker({
    beforeShowDay: function(date) {
        var day = date.getDay(); // Get the day of the week (0: Sun, 1: Mon, ..., 6: Sat)
        // Return an array with [selectable, CSS class, tooltip] for each date
        return [!(day === 0 || day === 6), '', 'Weekends are not selectable'];
    },
    onChangeMonthYear: function(year, month, inst) {
        // Update the monthSelector with the selected month
        $('#monthSelector').val(month);
    }
});

// Populate the monthSelector with month options
var monthNames = $.datepicker._defaults.monthNames;
for (var i = 0; i < monthNames.length; i++) {
    $('#monthSelector').append($('<option>', {
        value: i + 1,
        text: monthNames[i]
    }));
}

// Set the initial selected month based on the DatePicker value
var currentDate = $('#cal').datepicker('getDate');
if (currentDate) {
    $('#monthSelector').val(currentDate.getMonth() + 1);
}

// Update DatePicker when month is changed from the drop-down
$('#monthSelector').change(function() {
    var selectedMonth = $(this).val();
    $('#cal').datepicker('setDate', new Date(currentDate.getFullYear(), selectedMonth - 1, 1));
});
