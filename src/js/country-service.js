export default class CountriesService {
    constructor() {
        this.searchInput = '';

    }

    fetchCountries() {
        const url = `https://restcountries.com/v3.1/name/${this.searchInput}?fields=name,capital,languages,population,flags`;
        return fetch(url).then(response => 
            response.json()).then(this.onSuccess).catch(console.log('onFetchError'))
    }

    // get countries() {
    //     return this.searchInput;
    // }

    // set countries(newCountries) {
    //     this.searchInput = newCountries;
    // }
    onSuccess(data) {
        return data
    }






}



