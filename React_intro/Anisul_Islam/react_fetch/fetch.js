
//console.clear();
//console.log(window);

fetch("https://jsonplaceholder.typicode.com/posts")
.then((res) => {
    if(!res.ok) {
    const message = 'Error: ${res.status}'
        throw new Error(message)
    }
    return res.json();

})                                                                              // convert readable data into Json formate.
.then((res) =>console.log(res))
.catch((error) =>console.log(error));