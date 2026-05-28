import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from './wishlist.service';
import { Film } from '../../../../core/models/film.model';
import { WishlistCardComponent } from '../wishlist-cardcomponent/wishlist-cardcomponent.component'; 

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, WishlistCardComponent], 
  templateUrl: './wishlist.html'
})
export class WishlistComponent {
  private wishlistService = inject(WishlistService);

  films: Film[] = this.wishlistService.get();

  onRetirerFilm(id: number): void {
    this.wishlistService.remove(id);
    this.films = this.wishlistService.get();
  }
}