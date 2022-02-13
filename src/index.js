import './css/styles.css';
import CountriesService from './js/country-service';
import debounce from "lodash.debounce";
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
refs.searchInput.addEventListener('input', _.debounce(onSearch, DEBOUNCE_DELAY));

// Функция для получения текста введенного пользователем в input
function onSearch(event) {
    event.preventDefault();

    countriesService.countries
}
