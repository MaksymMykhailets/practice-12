import axios from 'axios';

const API_KEY = 'uHSLi07StIOlriMPxJGxUbSYsHDs6AFx';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';

// url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey={apikey}"

export async function getEvents(page) {
    const { data } = await axios.get(
        `${BASE_URL}events.json?page=${page}&apikey=${API_KEY}`
    );
    return data;
}
