// utworzenie klasy Storage i domyślnej lokalizacji
class Storage {
  constructor() {
    this.name;
    this.defaultName = 'zakopane';
  }

  // metoda pobierająca i zwracająca lokalizacje z local storage gdy local storage jest pusta zwraca domyślną lokalizację 

  getLocationData() {
    if(localStorage.getItem('name') === null) {
      this.name = this.defaultName;
    } else {
      this.name = localStorage.getItem('name');
    }

    return {
      name: this.name,
    }
  }

  // metoada zapisująca lokalizacje do local storage jako 'name'

  setLocationData(name) {
    localStorage.setItem('name', name);
  }
}