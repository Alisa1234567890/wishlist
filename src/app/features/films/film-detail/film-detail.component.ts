import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../../../core/services/tmdb.service';
import { Film } from '../../../core/models/film.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-film-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './film-detail.component.html',
  styleUrl: './film-detail.component.css'
})
export class FilmDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  tmdbService = inject(TmdbService);
  
  film$!: Observable<Film>;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.film$ = this.tmdbService.getMovieById(Number(id));
    }
  }
}