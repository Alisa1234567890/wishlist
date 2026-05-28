import { Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { FilmographieComponent } from './features/films/filmographie/filmographie.component';
import { FilmDetailComponent } from './features/films/film-detail/film-detail.component';
import { WishlistComponent } from './features/wishlist/wishlist';

export const routes: Routes = [
  { path: '', component: FilmographieComponent},
  { path: 'filmographie', component: FilmographieComponent },
  { path: 'film/:id', component: FilmDetailComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: '**', redirectTo: '' }
];