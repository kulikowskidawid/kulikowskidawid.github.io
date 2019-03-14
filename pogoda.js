// Uzyskany Klucz API z Wunderground cc557fbc884831f9

// Deklaracja Klasy Weather z metodą contructor
class Weather {
  constructor(name) {
    this.apiKey = '814e389bec984aab982111118190703';
    this.name = name;
  }

  //Fetch - Dynamiczne Pobranie zasobów z API
  async getWeather() {
    const response = await fetch(`https://api.apixu.com/v1/current.json?key=${this.apiKey}&q=${this.name}`);

    const responseData = await response.json();

    //Ustawienie aby funkcja return zwróciła informacje zawarte w json
    return responseData;
  } 

  // Zmiana Miejscowości 
changeLocation(name) {
  this.name = name;
}
}










