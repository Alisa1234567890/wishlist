import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TMDB_CONFIG } from '../config/tmdb.config';
import { Film, TmdbResponse } from '../../features/models/film.model';
import { Observable, forkJoin, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TmdbService {
  private http = inject(HttpClient);
  private config = TMDB_CONFIG;

  private get headers() {
    return {
      Authorization: `Bearer ${this.config.token}`,
      'Content-Type': 'application/json'
    };
  }

  searchMovies(query: string): Observable<TmdbResponse> {
    return this.http.get<TmdbResponse>(`${this.config.baseUrl}/search/movie`, {
      headers: this.headers,
      params: { query, language: 'fr-FR', page: '1' }
    });
  }

  getPopularMovies(): Observable<TmdbResponse> {
    return this.http.get<TmdbResponse>(`${this.config.baseUrl}/movie/popular`, {
      headers: this.headers,
      params: { language: 'fr-FR', page: '1' }
    });
  }

  getMovieById(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.config.baseUrl}/movie/${id}`, {
      headers: this.headers,
      params: { language: 'fr-FR' }
    });
  }

  getPosterUrl(posterPath: string | null): string {
    if (!posterPath) return 'assets/no-poster.png';
    return `${this.config.imageBaseUrl}${posterPath}`;
  }

  getAllMovies(): Observable<TmdbResponse> {
    const requests = [];
  
    for (let page = 1; page <= 10; page++) {
      requests.push(
        this.http.get<TmdbResponse>(
          `${this.config.baseUrl}/discover/movie`,
          {
            headers: this.headers,
            params: {
              language: 'fr-FR',
              page: page.toString(),
              sort_by: 'popularity.desc'
            }
          }
        )
      );
    }
  
    return forkJoin(requests).pipe(
      map((responses) => ({
        page: 1,
        results: responses.flatMap(r => r.results),
        total_pages: responses[0].total_pages,
        total_results: responses[0].total_results
      }))
    );
  }
}
