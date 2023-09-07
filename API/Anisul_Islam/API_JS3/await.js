console.clear();

const makeRequest = async (url, config) => {
    const res = await fetch(url, config);
    if (!res.ok) {
        const message = `Error : ${res.status}`;
        throw new Error(message)
    }
    const data = await res.json();
    return data;
}

// //GET CAll
const getDate = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts')
        .then((res) => console.log(res))
        .catch((error) => console.log(error))
};

//POST Call
const sendDate = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Hello World!',
            body: 'fetch asynce await',
            userId: 2,
        }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
    })
        .then((res) => console.log(res))
        .catch((error) => console.log(error))
};

//PUT Call
const updateData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/2', {
        method: 'PUT',
        body: JSON.stringify({
            title: 'Hello World!',
            body: 'API Http Call',
            userId: 2,
        }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
    })
        .then((res) => console.log(res))
        .catch((error) => console.log(error))
};

//PATCH Call
const updateSpecificData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/2', {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'Learning API with fetch',
            body: 'API Http Call',
            userId: 2,
        }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
    })
        .then((res) => console.log(res))
        .catch((error) => console.log(error))
};


//DELETE Call
const deleteData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/2', {
        method: 'DELETE',

    })
        .then((res) => console.log(res))
        .catch((error) => console.log(error))
};



//getDate();
//sendDate();
//updateData();
//updateSpecificData();
deleteData();