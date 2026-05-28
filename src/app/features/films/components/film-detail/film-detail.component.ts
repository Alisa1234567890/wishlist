import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TmdbService } from '../../../../core/services/tmdb.service';
import { Film } from '../../../models/film.model';

@Component({
  selector: 'app-film-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './film-detail.component.html',
  styleUrls: []
})
export class FilmDetailComponent {

  private route = inject(ActivatedRoute);
  readonly tmdbService = inject(TmdbService);

  film?: Film;

  constructor() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.tmdbService.getMovieById(Number(id)).subscribe((data) => {
        this.film = data;
      });
    }
  }
}