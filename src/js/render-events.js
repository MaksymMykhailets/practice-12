import { getEvents } from "./api";
import { currentPage, pageReset } from "./pagination";


const events = document.querySelector('.events');

function createMarkup(data) {
    const markup = data
        .map(({ id, name }) => `
        <li id=${id}>
          <p>${name}</p>
        </li>
        `)
        .join('');
    events.innerHTML = markup;
}

export async function renderMarkup(page) {
    const { data } = await getEvents(page);
    const { _embedded: { events }, page: { totalElements } } = data;
    
    if (page === 1) {
        pageReset(totalElements);
    }
    
    createMarkup(events);
}

renderMarkup(currentPage);