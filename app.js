/**
 * Inicjalizacja Local Storage 
 * @public
 * @type {Storage}
 */
const storage = new Storage();

/**
 * Pobranie zapisanej lokalizacji do obiektu weather location
 * @public
 * @type {String}
 */
const weatherLocation = storage.getLocationData();

/**
 * Inicjalizacja obiektu weather
 * @public
 * @type {Weather}
 */
const weather = new Weather(weatherLocation.name);


/**
 * Inicjalizacja obiektu weather
 * @public
 * @type {UI}
 */
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

// Event Zmiany Lokalizacji
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const name = document.getElementById('name').value;

    // Zmiana Lokalizacji
    weather.changeLocation(name);

    //Ustaw Lokalizacje w Local Storage
    storage.setLocationData(name);

    //pobierz i wyświetl Pogodę
    getWeather();

    // Zamknij  modal
    $('#locModal').modal('hide');
});

/** 
 * Funkcja Get Weather dla async getWeather 
 * @public
 */
function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}