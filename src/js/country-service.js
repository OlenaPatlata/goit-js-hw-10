export default class CountriesService {
    constructor() {
        this.searchInput = '';
    }

    fetchCountries() {
        const url = `https://restcountries.com/v3.1/name/${this.searchInput}?fields=name,capital,languages,population,flags`;
        return fetch(url).then(response => 
            response.json()).then(data => { return data }).catch(error => console.error(error))
    }
}



