import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IVacanca } from '../../../model/models/vacanca';
import { VacancesService } from '../../../model/services/vacances.service';

@Component({
  selector: 'app-vacances-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vacances-list.component.html',
  styleUrl: './vacances-list.component.scss'
})
export class VacancesListComponent {

  @Input() vacances!: IVacanca[];

  @Output() public selectedVacanca = new EventEmitter<any>();
  
  vacancaSelected: IVacanca = {} as IVacanca;

  constructor(private vacancesService: VacancesService) {

  }

  emitVacanca(index: number) {
    this.selectedVacanca.emit(index);
  }
  
}
