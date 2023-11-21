import axios from 'axios';

const searchImages = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 3bIW8UqCF1Ixh7fXhsrlG5oITpoB3SEqf_BlKcw_Dzc'
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
};

export default searchImages;