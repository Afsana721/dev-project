console.clear();
//console.log(window);          //check window get axios

//GET HTTP action
axios.get("https://jsonplaceholder.typicode.com/posts")
.then((res) => console.log(res.data))
.catch((err) => console.log(err));

//POST HTTP action
axios.post("https://jsonplaceholder.typicode.com/posts", {
     method: "POST", 
     body:JSON.stringify({
         title: "foo",
         body: "bar",
         userId: 1,
     })
 })
 .then((res) => console.log(res.data))
 .catch((err) => console.log(err))

 //PUT HTTP action
    axios.put("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        body: JSON.stringify({
            title: "axios JS",
            body: "learning",
            userId: 1,
        })
    }).then((res) => console.log(res.data))
    .catch((err) => console.log(err));

    //PATCH HTTP action
     axios.patch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PATCH",
        body: JSON.stringify({
            title: "Hello, World!",
           
        })
    }).then((res) => console.log(res.data))
    .catch((err) => console.log(err));


 //DELETE HTTP action
    axios.delete("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) =>console.log(res.data))
    .catch((err) => console.log(err));
    

