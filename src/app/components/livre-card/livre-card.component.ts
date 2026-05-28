import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Livre } from '../../models/livre.model';

@Component({
  selector: 'app-livre-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './livre-card.component.html',
  styleUrl: './livre-card.component.css',
})
export class LivreCardComponent {
  livre = input.required<Livre>();
}
