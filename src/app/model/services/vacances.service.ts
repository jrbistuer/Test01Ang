import { Injectable } from '@angular/core';
import { IVacanca } from '../models/vacanca';

@Injectable({
  providedIn: 'root'
})
export class VacancesService {

  vacances: IVacanca[] = [];

  constructor() {
    if (localStorage.getItem('vacances')) {
      this.vacances = JSON.parse(localStorage.getItem('vacances')!);
    }
  }

  getVacances(): IVacanca[] {
    return this.vacances;
  }

  setVacances(vacanca: IVacanca): void {
    this.vacances.push(vacanca);
    localStorage.setItem('vacances', JSON.stringify(this.vacances));
  }

  getVacancesById(i: number): IVacanca {
    return this.vacances[i];
  }
  
}
