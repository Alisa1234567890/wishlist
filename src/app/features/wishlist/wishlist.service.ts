import { Injectable } from '@angular/core';
import { Film } from '../models/film.model';

@Injectable({ providedIn: 'root' })
export class WishlistService {

  private films: Film[] = [];

  get(): Film[] {
    return this.films;
  }

  add(film: Film): void {
    if (!this.films.find(f => f.id === film.id)) {
      this.films.push(film);
    }
  }

  remove(id: number): void {
    this.films = this.films.filter(f => f.id !== id);
  }
}