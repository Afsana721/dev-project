
console.clear();

//create a makeRequest variable
const makeRequest = async (config) => {
    return await axios(config);
};

//create getData to make a GET Call
const getData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};


//create createData to make a POST Call
    const createData = () => {
        makeRequest({
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "POST",
            data: JSON.stringify({
                title: 'Hello world',
                body: "Mama",
                userID: 1,
            }),
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

    };

    //Update updateData to make a PUT Call
    const updateData = () => {
        makeRequest({
            url: "https://jsonplaceholder.typicode.com/posts/1",
            method: "PUT",
            data: JSON.stringify({
                id: 1,
                title: 'JS world!',
                body: "Learning",
                userID: 1,
            }),
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));

    };

     //Specific updateData to make a PATCH Call
     const updateSingleData = () => {
        makeRequest({
            url: "https://jsonplaceholder.typicode.com/posts/1",
            method: "PATCH",
            data:JSON.stringify({
                title: "Java_World"
            })
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
     };
        
    //delectData use DELETE call
    const delectData = () => {
        makeRequest({
            url:"https://jsonplaceholder.typicode.com/posts/1",
            method: "DELETE"
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }
     

        
    //call getdata method
    //getData();
    //createData();
    //updateSingleData();
    //delectData();
    
    

