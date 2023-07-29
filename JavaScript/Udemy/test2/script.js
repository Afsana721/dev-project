
//create an array variable to store images and dynamic images with show using placeholder. So create a blank array
const arr = [];
const props = {
    "main" : $(".container")
}

// //create method to make the loading process check :
// $(document).ready(() => {
// alert("Hello, I am ready now!")
// console.log("doc is ready");
// });

// create a function for list images
    $(document).ready(function() {
        console.log("images")
        makeListImages();
        outputImages();
    })

    function outputImages() {
        $.each(arr,function(index, value){
            console.log(value);
            let temActive = index == 0 ? 'active': '';
            let html = `<div class="slider ${temActive}"><img src='${value}'><span>Caption ${index+1}</div>`;
            props.main.append(html);
        })
    }

//create makeListImages function with temporary variable who hold url equal image with initial variable & create html element and push url inside img tag using array index
    function makeListImages() {
        for(let x=0; x< 5; x++){
            let temp =`http://via.placeholder.com/400x400/33ee33/22ff22?text=image${x}`;
            arr.push(temp);
        }
    }
