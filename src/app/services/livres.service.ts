import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livre } from '../models/livre.model';

@Injectable({ providedIn: 'root' })
export class LivresService {
  private http = inject(HttpClient);

  private readonly _livres = signal<Livre[]>([]);

  constructor() {
    this.getLivres$().subscribe(livres => this._livres.set(livres));
  }

  getLivres$(): Observable<Livre[]> {
    return this.http.get<Livre[]>('/livres.json');
  }

  getLivres() {
    return this._livres.asReadonly();
  }

  getLivreById(id: number): Livre | undefined {
    return this._livres().find(l => l.id === id);
  }

  toggleLu(id: number): void {
    this._livres.update(livres =>
      livres.map(l => l.id === id ? { ...l, lu: !l.lu } : l)
    );
  }

  getGenres(): string[] {
    return [...new Set(this._livres().map(l => l.genre))];
  }
}
