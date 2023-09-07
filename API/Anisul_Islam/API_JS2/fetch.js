console.clear();
//console.log(window);
//console.log(fetch);

//use fetch to call api to make http call- GET Call
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
        if(!res.ok){
            const message = `Error : ${res.status}`
            throw new Error(message)
        }
        return res.json();
    })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));

// POST Call
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
    })
    .then((res) => {
        if(!res.ok) {
            const postMessage = `Error : ${res.status}`;
            throw new Error(postMessage);
        }
        return res.json();
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

    //PUT Call
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify({
                title: 'fooya',
                body: 'barya',
                userId: 1,
        }),
    })
    .then((res) => {
        if(!res.ok){
            const putMessage = `Error : $(res.status)`;
            throw new Error(putMessage);
        }
        return res.json();
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

    
    //PATCH Call
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify({
                body: 'Software',
              
        }),
    })
    .then((res) => {
        if(!res.ok){
            const putMessage = `Error : $(res.status)`;
            throw new Error(putMessage);
        }
        return res.json();
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));


    //DELETE Call

    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE",
      
       
    })
    .then((res) => {
        if(!res.ok){
            const putMessage = `Error : $(res.status)`;
            throw new Error(putMessage);
        }
        return res.json();
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));