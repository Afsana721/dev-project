// Fetch trending gifs on page load
fetch('/').then(response => response.json())
    .then(data => {
        const gridContainer = document.querySelector('.grid-container');

        data.gifs.forEach(gif => {
            const gridItem = document.createElement('div');   //create a ne div item
            gridItem.classList.add('grid-item');        //add the grid item class to the new div
            
            //create an img elemetn with the GIF's Url and alt text
            gridItem.innerHTML = `<img src="${gif.images.fixed_height.url}" alt="${gif.title}">`;
            gridContainer.appendChild(gridItem);    //Append the div element to the grid container
        });
    })
    .catch(error => {
        console.error(error);  // log any error that occur
    });

// Search form submission
const searchForm = document.getElementById('search-form');   //get the serch form element
searchForm.addEventListener('submit', async (event) => {        //listen for form submit event
    event.preventDefault();             //prevent default submition

    const searchInput = document.getElementById('search-input');  //get search imput element
    const query = searchInput.value.trim();         //get the user enter serch query

    if (query !== '') {
        try {
            const response = await fetch('/search', {   //make a post request to search route
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query })         // send query as JSON in the request body.
            });

            const searchData = await response.json();      //parse the JSON response data
            const gridContainer = document.querySelector('.grid-container');  //select grid container element

            gridContainer.innerHTML = '';           //clear the existing content

            searchData.gifs.forEach(gif => {
                const gridItem = document.createElement('div');             //create a new div element
                gridItem.classList.add('grid-item');                        // add grid item

                //create an img element with search result GIF Url and alt text
                gridItem.innerHTML = `<img src="${gif.images.fixed_height.url}" alt="${gif.title}">`;
                gridContainer.appendChild(gridItem);           //append the grid container
            });
        } catch (error) {
            console.error(error);  // log error. 
        }
    }
});
