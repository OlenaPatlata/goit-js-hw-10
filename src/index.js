import './css/styles.css';
import CountriesService from './js/country-service';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

const refs = {
    searchInput: document.querySelector("#search-box"),
    ulList: document.querySelector(".country-list"),
    divInfo: document.querySelector('.country-info'),
};
// Создаём экземпляр класса CountriesService
const countriesService = new CountriesService();

// Вешаем слушателя на input
refs.searchInput.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

// Функция для получения текста введенного пользователем в input
function onSearch(event) {
    event.preventDefault();
    countriesService.searchInput = event.target.value.trim();
    console.log(event.target.value.trim());
    

    countriesService.fetchCountries().then(data => {
       renderMarkup(data) 
    });
 
    
}

// Функция создающая разметку для  одной страны
function markupOneCountry(data) {
    data.forEach(element => {
            return `<h2>${element.name.official}</h2>`
        });
    // const { name, flags, capital, languages, population } = data;
    

}
// Функция создающая разметку для  2-10 стран
function markup(data) {
    const { name, flags, capital, languages, population } = data;
    return `<li>${name.official}</li>`.join('')
}
// Функция, которая рендерит разметку в зависимости от количества полученных стран

function renderMarkup(data) {
    refs.ulList.insertAdjacentHTML('beforeend', markupOneCountry(data))
}


