import { Routes } from '@angular/router';
import { HomeComponent } from './features/components/home/home.component';
import { CompteurComponent } from './features/components/compteur/compteur.component';
import { FilmographieComponent } from './features/components/filmographie/filmographie.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'compteur', component: CompteurComponent },
  { path: 'filmographie', component: FilmographieComponent },
  { path: '**', redirectTo: '' },
];
