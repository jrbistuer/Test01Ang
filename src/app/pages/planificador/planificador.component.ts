import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancesService } from '../../model/services/vacances.service';
import { IVacanca } from '../../model/models/vacanca';
import { RouterLink } from '@angular/router';
import { VacancesListComponent } from '../../shared/components/vacances-list/vacances-list.component';
import { AdbarComponent } from '../../shared/components/adbar/adbar.component';

@Component({
  selector: 'app-planificador',
  standalone: true,
  imports: [CommonModule, RouterLink, VacancesListComponent, AdbarComponent],
  templateUrl: './planificador.component.html',
  styleUrl: './planificador.component.scss'
})
export class PlanificadorComponent implements OnInit {

  vacances: IVacanca[] = [];
  vacancaSelected: IVacanca = {} as IVacanca;

  constructor(private vacancesService: VacancesService) { }

  ngOnInit(): void {
    this.vacances = this.vacancesService.getVacances();
  }

  showMap($index: number) {
    this.vacancaSelected = this.vacancesService.getVacancesById($index);
  }
}
