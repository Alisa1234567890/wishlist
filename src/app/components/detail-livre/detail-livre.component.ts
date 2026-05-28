import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LivresService } from '../../services/livres.service';
import { Livre } from '../../models/livre.model';

@Component({
  selector: 'app-detail-livre',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detail-livre.component.html',
  styleUrl: './detail-livre.component.css',
})
export class DetailLivreComponent {

  private livresService = inject(LivresService);

  id = input.required<string>();

  livre = computed<Livre | undefined>(() => this.livresService.getLivreById(Number(this.id())));

  toggleLu(): void {
    const l = this.livre();
    if (l) {
      this.livresService.toggleLu(l.id);
    }
  }
}
