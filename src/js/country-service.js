export default class CountriesService{
    constructor() {
        this.searchInput = '';

    }

    fetchCountries() {   
        const url = `https://restcountries.com/v3.1/name/${this.searchInput}`;
    fetch(url).then(response => {
    return response.json();
    }).then(renderCountryList).catch(onFetchError)
    }

    get countries() {
        return this.searchInput;
    }

    set countries(newCountries) {
        this.searchInput = newCountries;
    }




}



