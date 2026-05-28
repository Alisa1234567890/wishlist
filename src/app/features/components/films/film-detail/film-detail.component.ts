import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TmdbService } from '../../../../core/services/tmdb.service';
import { Film } from '../../../../core/models/film.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-film-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './film-detail.component.html',
  styleUrl: './film-detail.component.css'
})
export class FilmDetailComponent {
  readonly tmdbService = inject(TmdbService);
  
  film$!: Observable<Film>;
  estAjoute = false; 
  @Input() set id(movieId: string) {
    if (movieId) {
      this.film$ = this.tmdbService.getMovieById(Number(movieId));
    }
  }

  @Output() wishlistAjoutee = new EventEmitter<Film>();

  clicAjout(film: Film): void {
    this.wishlistAjoutee.emit(film); 
    this.estAjoute = true;

    setTimeout(() => {
      this.estAjoute = false;
    }, 3000);
  }
}