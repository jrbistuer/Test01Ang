import { Injectable } from '@angular/core';
import { IVacanca } from '../models/vacanca';

@Injectable({
  providedIn: 'root'
})
export class VacancesService {

  vacances: IVacanca[] = [];

  constructor() { }

  getVacances(): IVacanca[] {
    return this.vacances;
  }

  setVacances(vacanca: IVacanca): void {
    this.vacances.push(vacanca);
  }

  getVacancesById(i: number): IVacanca {
    return this.vacances[i];
  }
  
}
