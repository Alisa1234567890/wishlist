import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable, map } from 'rxjs';
import { TmdbService } from '../../services/tmdb.service';
import { Film } from '../../models/film.model';
import { FilmCardComponent } from '../film-card/film-card.component';

@Component({
  selector: 'app-films-populaires',
  standalone: true,
  imports: [AsyncPipe, FilmCardComponent],
  templateUrl: './films-populaires.component.html',
  styleUrl: './films-populaires.component.css'
})
export class FilmsPopulairesComponent implements OnInit {
  private tmdbService = inject(TmdbService);

  films$!: Observable<Film[]>;

  ngOnInit(): void {
    this.films$ = this.tmdbService.getPopularMovies().pipe(
      map(response => response.results)
    );
  }

  trackById(index: number, film: Film): number {
    return film.id;
  }
}
