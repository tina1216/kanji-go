import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://kanjialive-api.p.rapidapi.com/api/public/kanji/all',
  headers: {
    'X-RapidAPI-Key': '07224067damshd7a108a0a788aa6p1a1261jsneae76332207b',
    'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
  }
};

// /kanji/all
//'https://kanjialive-api.p.rapidapi.com/api/public/kanji/all'

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

// const kanjiApi = axios.create({
//     baseURL: "https://kanjialive-api.p.rapidapi.com/api/public/",
//     headers: {
//         'X-RapidAPI-Key': process.env.API_KEY,
//         'X-RapidAPI-Host': process.env.API_HOST
//     }
// })

// export default kanjiApi

