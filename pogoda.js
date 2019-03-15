

/**
 * Klasa Weather z konstruktorem zawierajacym klusz i określającym nazwe lokalizacji na name
 */
class Weather {	

    /**
     * Konstruktor ustalający nazwe lokalizacji na name
	 * @public
     * @param {name} location name
     */
    constructor(name) {
		this.apiKey = '814e389bec984aab982111118190703';
        this.name = name;
    }

   /**
   * Metoda Async getWeather z fetch API do wyświetlania rezultatów w json
   * @public
   */
    async getWeather() {

        /**  response z fetch weather api - dynamiczne pobranie zasobów
         * @type {String}
         */
        const response = await fetch(`https://api.apixu.com/v1/current.json?key=${this.apiKey}&q=${this.name}`);

        /** zwróć data w formacie json
         * @type {String}
         */
        const responseData = await response.json();

        /**
         * @return {responseData} zwrócenie data z api
         */
        return responseData;
    }

    /** 
	 * metoda dla ustalenia lokalizacji
     * @param {name} location name
     */
    changeLocation(name) {
        this.name = name;
    }
}