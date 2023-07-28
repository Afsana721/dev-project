
$('document').ready(function() {
//date picker gives calender and use showOtherMonth with value to show previous months date
    
    $('#date').datepicker({showOtherMonths:true,
    selectOtherMonths: true,
    showButtonPanel: true,
    changeMonth:true,
    changeYear: true, 
    minDate: new Date(2016,1,5),    //starting & ending calender year,month & date
    maxDate: new Date(2026.1,5),
    numberOfMonths: 2               // show two months
    });


})