/**
 * Klasa Dla local storage
 */
class Storage {

    /**
     * Konstruktor ustawiający domyślną lokalizacje
	 * @public
     */
    constructor() {
        /**
         * @type {string}
         */
        this.name;

        /**
         * @type {string}
         */
        this.defaultName = 'zakopane';
    }

    /**
     * metoda pobierająca i zwracająca lokalizacje z local storage gdy local storage jest pusta zwraca domyślną lokalizację 
     * @public
     */
    getLocationData() {
        if (localStorage.getItem('name') === null) {
            this.name = this.defaultName;
        } else {
            this.name = localStorage.getItem('name');
        }

        return {
            name: this.name,
        }
    }

    /**
     * metoda zapisująca lokalizacje do local storage jako 'name' 
     * @public
     * @param {name} location name
     */
    setLocationData(name) {
        localStorage.setItem('name', name);
    }
}