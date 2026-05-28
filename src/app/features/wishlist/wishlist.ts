import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from './wishlist.service';
import { Film } from '../../core/models/film.model';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist.html'
})
export class WishlistComponent {

  private wishlistService = inject(WishlistService);

  films: Film[] = this.wishlistService.get();

  remove(id: number) {
    this.wishlistService.remove(id);
    this.films = this.wishlistService.get();
  }
}