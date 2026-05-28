import { Component, computed, inject, signal } from '@angular/core';
import { LivresService } from '../../services/livres.service';
import { LivreCardComponent } from '../livre-card/livre-card.component';

@Component({
  selector: 'app-liste-livres',
  standalone: true,
  imports: [LivreCardComponent],
  templateUrl: './liste-livres.component.html',
  styleUrl: './liste-livres.component.css',
})
export class ListeLivresComponent {

  private livresService = inject(LivresService);

  genres = this.livresService.getGenres();

  genreSelectionne = signal('');

  filtreLu = signal('tous');

  livresFiltres = computed(() => {
    const genre = this.genreSelectionne();
    const filtre = this.filtreLu();
    return this.livresService.getLivres()()
      .filter(l => genre === '' || l.genre === genre)
      .filter(l => {
        if (filtre === 'lu') return l.lu;
        if (filtre === 'nonlu') return !l.lu;
        return true;
      });
  });

  selectionnerGenre(genre: string): void {
    this.genreSelectionne.set(genre);
  }

  setFiltreLu(filtre: string): void {
    this.filtreLu.set(filtre);
  }
}
