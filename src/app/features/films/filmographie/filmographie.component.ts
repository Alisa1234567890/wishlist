import { Component } from '@angular/core';
import { RechercheFilmsComponent } from '../recherche-films/recherche-films.component';
import { FilmsPopulairesComponent } from '../films-populaires/films-populaires.component';

@Component({
  selector: 'app-filmographie',
  standalone: true,
  imports: [RechercheFilmsComponent, FilmsPopulairesComponent],
  templateUrl: './filmographie.component.html',
  styleUrl: './filmographie.component.css'
})
export class FilmographieComponent {}
