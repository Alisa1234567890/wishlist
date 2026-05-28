import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { TmdbService } from '../../services/tmdb.service';
import { Film } from '../../models/film.model';

@Component({
  selector: 'app-film-card',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.css'
})
export class FilmCardComponent {
  readonly tmdbService = inject(TmdbService);

  @Input() disabled = false;

  @Input({ required: true }) film!: Film;

  @Output() filmSelectionne = new EventEmitter<Film>();

  selectionner(): void {
    this.filmSelectionne.emit(this.film);
  }
}
