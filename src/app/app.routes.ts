import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { VacancesComponent } from './pages/vacances/vacances.component';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';
import { PlanificadorComponent } from './pages/planificador/planificador.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['vacances']);

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: "full" },
    { path: 'login', component: LoginComponent, ...canActivate(redirectLoggedInToHome)  },
    { path: 'vacances', component: VacancesComponent, ...canActivate(redirectUnauthorizedToLogin)  },
    { path: 'planificador', component: PlanificadorComponent, ...canActivate(redirectUnauthorizedToLogin)  },
    { path: '**', redirectTo: 'login' }
  ];
