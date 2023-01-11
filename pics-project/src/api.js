import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization:
                'Client-ID zauV-BgXRfixd3nEM67XM_VtK4gheMilaLF3GwZcLEU'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
};

export default searchImages;
