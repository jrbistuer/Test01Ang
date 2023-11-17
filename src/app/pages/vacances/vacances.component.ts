import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { VacancesService } from '../../model/services/vacances.service';

@Component({
  selector: 'app-vacances',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './vacances.component.html',
  styleUrl: './vacances.component.scss'
})
export class VacancesComponent implements OnInit {

  vacances: any;

  constructor(private vacancesService: VacancesService) {

  }

  ngOnInit(): void {
    this.vacances = this.vacancesService.getVacances();
  }

}
