import axios from 'axios';

const BASE_URL ='https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {maxResults:'50'},
    headers: {
      'X-RapidAPI-Key': "69b1765776msh3bb46abb11615f4p14bca2jsn7df7494deb1c",
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) =>{
    console.log(url)
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    console.log(data)
    return data;
  }
  