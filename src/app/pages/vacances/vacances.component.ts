import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { VacancesService } from '../../model/services/vacances.service';
import { IVacanca } from '../../model/models/vacanca';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-vacances',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './vacances.component.html',
  styleUrl: './vacances.component.scss'
})
export class VacancesComponent implements OnInit {

  vacances: IVacanca[] = [];
  vacancaForm!: FormGroup;
  vacancaSelected: IVacanca = {} as IVacanca;

  constructor(private vacancesService: VacancesService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.vacances = this.vacancesService.getVacances();
    this.initForm();
  }

  initForm() {
    this.vacancaForm = this.formBuilder.group({
      nom: [{value: '', disabled: false}, [Validators.required, Validators.minLength(5)]],
      preu: [{value: '', disabled: false}, Validators.required],
      pais: [{value: '', disabled: false}, Validators.required],
      descripcio: [{value: '', disabled: false}]
    })
  }

  guardarVacanca() {
    if (this.vacancaForm.valid) {
      this.vacancesService.setVacances(this.vacancaForm.value as IVacanca);
      this.vacancesService.getVacances();
    }
    console.log(this.vacancaForm);
  }

  showVacanca($index: number) {
    this.vacancaSelected = this.vacancesService.getVacancesById($index);
  }

}
