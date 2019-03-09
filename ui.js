//utworzenie klasy z konstruktorem i elementami ktore będą wyświetlane 
class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.cloud= document.getElementById('w-cloud');
    this.wind = document.getElementById('w-wind');
  }
  // Metoda paint która wypełni aplikacje rezultatami z API
  paint(weather) {
    this.location.textContent = weather.location.name;
    this.string.textContent = `${weather.current.temp_c} °C`;
    this.icon.setAttribute('src', `http:${weather.current.condition.icon}`);
    this.humidity.textContent = `Wilgotność Powietrza: ${weather.current.humidity}%`;
    this.feelsLike.textContent = `Odczuwalna Temperatura: ${weather.current.feelslike_c} °C`;
    this.cloud.textContent = `Zachmurzenie: ${weather.current.cloud}%`;
    this.wind.textContent = `Wiatr: ${weather.current.wind_kph} km/h`;
  }
}


