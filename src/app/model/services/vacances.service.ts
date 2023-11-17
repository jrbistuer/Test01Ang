import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VacancesService {

  constructor() { }

  getVacances() {
    return [
      {
        id: 0,
        nom: "Roma",
        preu: 234,
        pais: "Italia",
        descripcio: "asdcasdc asd asd "
      }, {
        id: 1,
        nom: "París",
        preu: 23452,
        pais: "França",
        descripcio: "ergtertghdrthbsd asd "
      }, {
        id: 0,
        nom: "Berlin",
        preu: 5435,
        pais: "Alemanya",
        descripcio: "asdrthbdrthbdf v  asd asd "
      }
    ];
  }

}
