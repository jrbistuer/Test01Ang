import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { VacancesComponent } from './pages/vacances/vacances.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: "full" },
    { path: 'login', component: LoginComponent },
    { path: 'vacances', component: VacancesComponent },
    { path: '**', redirectTo: 'login' }
  ];