import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { AsyncPipe, DecimalPipe } from '@angular/common';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap, map } from 'rxjs';
import { TmdbService } from '../../../../core/services/tmdb.service';
import { Film } from '../../../../core/models/film.model';
import { FilmCardComponent } from '../film-card/film-card.component';

@Component({
  selector: 'app-recherche-films',
  standalone: true,
  imports: [AsyncPipe, DecimalPipe, FilmCardComponent],
  templateUrl: './recherche-films.component.html',
  styleUrl: './recherche-films.component.css'
})
export class RechercheFilmsComponent implements OnInit, OnDestroy {
  private tmdbService = inject(TmdbService);

  private searchSubject = new Subject<string>();

  filmSelectionne: Film | null = null;
  filmDetail$: Observable<Film> | null = null;

  films$!: Observable<Film[]>;

  ngOnInit(): void {
    this.films$ = this.searchSubject.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      filter(query => query.length >= 2),
      switchMap(query => this.tmdbService.searchMovies(query)),
      map(response => response.results)
    );
  }

  onSearch(query: string): void {
    this.searchSubject.next(query);
  }

  onFilmSelectionne(film: Film): void {
    this.filmSelectionne = film;
    this.filmDetail$ = this.tmdbService.getMovieById(film.id);
  }

  ngOnDestroy(): void {
    this.searchSubject.complete();
  }
}
