import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { TmdbService } from '../../../../core/services/tmdb.service';
import { Film } from '../../../../core/models/film.model';
import { Router } from '@angular/router';
import { WishlistService } from '../../wishlist/wishlistcomponent/wishlist.service';

@Component({
  selector: 'app-film-card',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: '../../films/film-card/film-card.component.html',
  styleUrl: '../../films/film-card/film-card.component.css'
})
export class FilmCardComponent {
  readonly tmdbService = inject(TmdbService);

  @Input() disabled = false;
  @Input({ required: true }) film!: Film;

  @Output() filmSelectionne = new EventEmitter<Film>();
  @Output() wishlistAdd = new EventEmitter<Film>(); 

  private router = inject(Router);
  wishlistService = inject(WishlistService);

  selectionner(): void {
    this.router.navigate(['/film', this.film.id]);
  }
}