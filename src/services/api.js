import axios from 'axios';

//Usando a api da pexels de busca de imagens e video
//https://www.pexels.com/pt-br/api/documentation/

const api = axios.create({
    baseURL: `https://api.pexels.com/v1/search`,
    headers: {
        'Authorization': '563492ad6f917000010000010ee72549f8bd41e690323848fa1f57f2',
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }
})


export default api;