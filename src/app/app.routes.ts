import { Routes } from '@angular/router';
import { HomeComponent } from './features/components/home/home.component';
import { CompteurComponent } from './features/components/compteur/compteur.component';
import { FilmographieComponent } from './features/components/filmographie/filmographie.component';
import { FilmDetailComponent } from './features/films/components/film-detail/film-detail.component';
import { WishlistComponent } from './features/wishlist/wishlist';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'compteur', component: CompteurComponent },
  { path: 'filmographie', component: FilmographieComponent },
  { path: 'film/:id', component: FilmDetailComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: '**', redirectTo: '' }
];