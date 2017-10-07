import axios from 'axios';

const API_KEY = '6a44b9aa622d0880d2f030cfc69eb961';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEAHTER = 'FETCH_WEAHTER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url)


    return{
        type: FETCH_WEAHTER,
        payload: request
    }

}
