// Ce fichier est fourni complet — ne pas modifier

export interface Livre {
  id: number;
  titre: string;
  auteur: string;
  genre: 'Roman' | 'Science-Fiction' | 'Policier' | 'Fantasy' | 'Biographie';
  annee: number;
  note: number; // sur 5
  lu: boolean;
  couverture: string; // URL image de couverture
}
