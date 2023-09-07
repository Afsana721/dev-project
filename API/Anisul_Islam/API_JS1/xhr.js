// console.clear();
// console.log(window);

//XMLttRequest 
//event -> onload(), onerror()
//property -> fesponse, fesponseTex, responseTpe, responseURL, status, statusText
//function -> open(), send(), set(RequestHeader)

//create a makeRequest variable 
// const makeRequest = (method, url, data) => {              //pass parameter for method, url
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);                          //accept method and url as parameter
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.onload =() => {
//         let data = xhr.response;
//         console.log(xhr.status);
//         console.log(xhr.statusText);
//         console.log(JSON.parse(data));
//         console.log("I am from makeRequest method.")
//     }
    
//     xhr.onerror =() => {
//         console.log("error is here");
//     }
//     xhr.send(JSON.stringify(data));
    
// }

//create makeRequest using Promise
const makeRequest = (method, url, data) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => {
            let data = xhr.response;
            console.log(JSON.parse(data))
        }
        xhr.onerror = () => {
            console.log('error is here');
        }
        xhr.send(JSON.stringify(data));
    });


}

// create a method using ES6 for GET call / Request.
//const getData = () => {
//initialize XMLHttpRequest method
    // const xhr = new XMLHttpRequest();
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    // xhr.onload =() => {
    //     const data = xhr.response;
    //     console.log(JSON.parse(data));
    // }
    
    // xhr.onerror =() => {
    //     console.log("error is here");
    // }
    // xhr.send();

//call makeRequest to pass our asking url to fetch api get call
    //makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts');

   
//}

//create sendData / post data / create resource
const sendData = () => {
    makeRequest('POST','https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
    })
}


//create updateData / put data / edit existing resource

const updateData = () => {
    makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
        id:1,
        title:'fooNa',
        body:'barna',
        userId:1
    })
}


//create partial update using patch / specific data from specific user 
const updateSingleData = () => {
    makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
        title:'Hello, world!'
        
    });
}


//create partial update using patch / specific data from specific user 
const deleteData = () => {
    makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1', {
        //id 1 user will be deleted
        
        
    });
    console.log('I am from delete call.')
}


//call getData method.
//getData();

//call sendData() / for POST Http call
//sendData();

//call updateData / for PUT Http call
//updateData();

//call updateSingleData / for patch method
//updateSingleData();

//call deleteData / Delete method
//deleteData();

//call getData using promise object

const getData = () => {
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
    .then((res) => console.log(res))

}

getData();