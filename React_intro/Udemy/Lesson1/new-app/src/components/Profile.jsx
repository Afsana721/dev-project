



function Profile(data) {
    //data.name = "Masud"; // it shouldn't work because we cann't change the data, which we have inside 
                            // props and we can only access or read data
    console.log(data);
    return  <h1>
        Name: {data.name} {data.lastName}
        </h1>
}


export default Profile;