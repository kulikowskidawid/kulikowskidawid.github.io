
// Inicjalizacja Local Storage 
const storage = new Storage();
// Pobranie zapisanej lokalizacji do obiektu weather location
const weatherLocation = storage.getLocationData();
// Inicjalizacja obiektu weather
const weather = new Weather(weatherLocation.name);
// Inicjalizacja obiektu UI
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

//funkcja pobrania pogody
function getWeather(){
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
