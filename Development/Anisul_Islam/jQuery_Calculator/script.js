
var resultField = $("#result");

function insertNumber(num) {
    //alert(num);       //check inserNumber() function is working after clicking button.
    var existingNumbers = resultField.val();

    resultField.val(existingNumbers+num);
}

function clearResult(){
    resultField.val('');
}


function calculate(){
    var result = eval(resultField.val());
    resultField.val(result);

}

function deleteNumbers(){
    var presentValue = resultField.val();
    if(presentValue !=''){
        resultField.val(presentValue.slice(0, -1));
    }
}