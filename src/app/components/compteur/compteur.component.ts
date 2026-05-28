import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-compteur',
  standalone: true,
  imports: [],
  templateUrl: './compteur.component.html',
  styleUrl: './compteur.component.css',
})
export class CompteurComponent {

  count = signal(0);

  double = computed(() => this.count() * 2);

  message = computed(() => {
    if (this.count() === 0) return 'Zéro';
    if (this.count() > 0) return 'Positif';
    return 'Négatif';
  });

  incrementer(): void {
    this.count.update(v => v + 1);
  }

  decrementer(): void {
    this.count.update(v => v - 1);
  }

  reset(): void {
    this.count.set(0);
  }
}
