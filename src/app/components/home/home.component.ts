import { Component } from '@angular/core';
import { CompteurComponent } from '../compteur/compteur.component';
import { ListeLivresComponent } from '../liste-livres/liste-livres.component';

@Component({
  selector: 'app-home',
  imports: [CompteurComponent, ListeLivresComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
