console.clear();
//console.log(window);        //check jQuery is available in window object

//ajax handaling
//create a method to make a request
const makeRequest = async (url, method, data) => {
    try{                                //handle error using try & catch block. 
    const result = await $.ajax({
        url: url,
        method: method,
        data: data
    });
   //console.log(result);
   return result;
    }
    catch(error){
        console.log(error);
    }
};


//create a getData method to fetch data GET HTTP-  by calling makeRequest method
    // const getData = () => {
    //     makeRequest('https://jsonplaceholder.typicode.com/posts', "GET")
    //     .then((res) => console.log(res));
    // };

    // getData();


//create a createData method to fetch data POST HTTP- by calling makeRequest method
// const createData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts',
//      "POST", {
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//       })
//     .then((res) => console.log(res));
// };


//create a updateData method to fetch data PUT HTTP- by calling makeRequest method
// const updateData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1',
//      "PUT", {
//         title: 'Book all',
//         body: 'var bar',
//         userId: 1,
//       })
//     .then((res) => console.log(res));
// };

//create a updateSingleData method to fetch data PATCH HTTP- by calling makeRequest method
// const updateSingleData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1',
//      "PATCH", {
//         title: 'Single property update',
//         })
//     .then((res) => console.log(res));
// };

//create a deleteDate method to delete / DELETE HTTP Call
    const deleteData = () => {
        makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'delete' )
        .then((res) => console.log(res));
    }


//getData();

//createData();

//updateData();

//updateSingleData();
deleteData();