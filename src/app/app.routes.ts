import { Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { FilmographieComponent } from './features/components/films/filmographie/filmographie.component';
import { FilmDetailComponent } from './features/components/films/film-detail/film-detail.component';
import { WishlistComponent } from './features/components/wishlist/wishlistcomponent/wishlist';

export const routes: Routes = [
  { path: '', component: FilmographieComponent},
  { path: 'filmographie', component: FilmographieComponent },
  { path: 'film/:id', component: FilmDetailComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: '**', redirectTo: '' }
];