import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Film } from '../../../../core/models/film.model';

@Component({
  selector: 'app-wishlist-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist-cardcomponent.component.html', 
  styleUrl: './wishlist-cardcomponent.component.css'
})
export class WishlistCardComponent {
  @Input({ required: true }) film!: Film;

  @Output() retirer = new EventEmitter<number>();
}