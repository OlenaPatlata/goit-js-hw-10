import { Notify } from 'notiflix/build/notiflix-notify-aio';

class CountriesService {
    constructor() {
        this.searchInput = '';
    }

    fetchCountries() {
        const url = `https://restcountries.com/v3.1/name/${this.searchInput}?fields=name,capital,languages,population,flags`;
        return fetch(url).then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        }).then(data => { return data }).catch(({ message }) => {
            console.log(message);
            Notify.failure('Oops, there is no country with that name')
        })
    }
}

export { CountriesService };