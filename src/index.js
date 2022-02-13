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

    countriesService.fetchCountries().then(data => {
       renderMarkup(data) 
    });
}

// Функция создающая разметку для  одной страны
function markupOneCountry(data) {
    return data.map(country => {
        return `<h2>${country.name.official}</h2>
            <p>Capital: <span>${country.capital}</span></p><p>Population: <span>${country.population }</span></p><p>Languages: <span>${country.languages}</span></p>`
        }).join('');
}

// Функция создающая разметку для  2-10 стран
function markupMoreCountries(data) {
    return data.map(country => {
        return `<li class="country-list-item">${country.name.official}</li>`
    }).join('');
}

// Функция, которая рендерит разметку в зависимости от количества полученных стран
function renderMarkup(data) {
    refs.divInfo.innerHTML = '';
    refs.ulList.innerHTML = '';
    if (data.length === 1) {
        refs.divInfo.insertAdjacentHTML('beforeend', markupOneCountry(data)) 
    } else if (data.length > 1 && data.length <= 10) {
        refs.ulList.insertAdjacentHTML('beforeend', markupMoreCountries(data))
    } else if (data.length > 10){
        Notify.failure('Too many matches found. Please enter a more specific name.')
    }
}


