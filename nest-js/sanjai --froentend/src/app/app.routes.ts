import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./Components/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () => import('./Components/register/register.component').then((m) => m.RegisterComponent),
  },
  {
    
    path: 'home',
    loadComponent: () => import('./Components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
