import { Injectable } from '@angular/core';
import { IVacanca } from '../models/vacanca';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacancesService {

  vacances: IVacanca[] = [];

  constructor(private httpClient: HttpClient) {
    if (localStorage.getItem('vacances')) {
      this.vacances = JSON.parse(localStorage.getItem('vacances')!);
    }
  }

  getVacances(): Observable<IVacanca[]> {
    //return this.vacances;
    return this.httpClient.get<IVacanca[]>('http://demo6402609.mockable.io/vacances');
  }

  setVacances(vacanca: IVacanca): void {
    this.vacances.push(vacanca);
    localStorage.setItem('vacances', JSON.stringify(this.vacances));
  }

  getVacancesById(i: number): IVacanca {
    return this.vacances[i];
  }

  getStoredNumber(): any {
    console.log('es crida la funció');
    setTimeout(() => {
      console.log('ara es retorna');
      return 12;
    }, 2000);
  }

  getStoredNumberWithPromise(): Promise<number> {
    return new Promise((resolve, reject) => {
      console.log('es crida la funció');
      setTimeout(() => {
        console.log('ara es retorna');
        resolve(12);
      }, 2000);
    });
  }

  printNumbersInConsole() {
    setTimeout(() => {
      console.log('number 1');
    }, 2000);
    setTimeout(() => {
      console.log('number 2');
    }, 3000);
    console.log('number 3');
    console.log('number 4');
  }
  
}
