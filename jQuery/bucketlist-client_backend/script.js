// CRUD - Create, Read, Update, Delete

let dataArray = [
  {id: 1, description: 'Go to Loch Ness', isComplete: false}, 
  {id: 2, description: 'Hunt Bigfoot', isComplete: false}, 
  {id: 3, description: 'Live on Mars', isComplete: false}
]




// Read - from index.html
// READ
$(document).ready(function () {
  $("ul").empty();
  dataArray.forEach(function (bucketItem) {
    let completedClass = bucketItem.isComplete ? "completed" : "";
    $("ul").append(
      `
      <li 
          data-id="${bucketItem.id}" 
          class="${completedClass}"
       >${bucketItem.description}
          <span>
            <i class="fa fa-trash-alt"></i>
          </span>
      </li>
      `
    );
  });
});

// Get  using fetch() `https://accbucketlists-3d666dd75daa.herokuapp.com/user/${myUser}/bucket`;
const myUser = 'Mk';
const endpoint = `https://accbucketlists-3d666dd75daa.herokuapp.com/user/${myUser}/bucket`;

fetch(endpoint)
.then((res) => {
  if(res.ok) {
    console.log("http request successful");
  }else {
    console.log("http request not ok")
  }
  return res;
})
.then((res) => res.json())
.then((data) => console.log(data))
.catch((e) => console.log("error is here : ", e));









// Update
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

// Delete
$("ul").on("click", "span", function (e) {
  e.stopPropagation();
  $(this).parent().remove();
});

// Create
$("input").keypress(function (event) {
  if (event.which === 13 && $(this).val().trim()) {
    let item = $(this).val();
    $("ul").append(
      `<li>${item}<span><i class="fa fa-trash-alt"></i></span></li>`
    );
    $("input").val("");
  }
});