import axios from 'axios';

const myApiKey = "58757401-c6d97c3ff5afcdac96170ae1a";
export const getImagesByQuery = (query) => {
    return axios.get('https://pixabay.com/api/', {
        params: {
            key: myApiKey,
                q: query,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
        }}) 
        .then(responce =>  responce.data.hits )
}