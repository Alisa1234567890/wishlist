import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailLivreComponent } from './components/detail-livre/detail-livre.component';
import { CompteurComponent } from './components/compteur/compteur.component';
import { ListeLivresComponent } from './components/liste-livres/liste-livres.component';
import { FilmographieComponent } from './components/filmographie/filmographie.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'livre/:id', component: DetailLivreComponent },
  { path: 'compteur', component: CompteurComponent },
  { path: 'bibliotheque', component: ListeLivresComponent },
  { path: 'filmographie', component: FilmographieComponent },
  { path: '**', redirectTo: '' },
];
