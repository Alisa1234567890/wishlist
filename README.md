# TP4 — Angular : Signals & Composants

Ce TP se compose de quatre exercices progressifs couvrant le routing, les Signals, les composants et la navigation.

---

## Exercice 0 — Mise en place du routing de base

### Mise en contexte

Avant de commencer les exercices, il faut initialiser le **routing** de l'application.
Le routing Angular permet d'associer une URL à un composant : quand l'utilisateur navigue vers `/`,
Angular charge et affiche le composant correspondant dans le `<router-outlet>`.

L'objectif est de déclarer la route racine (`''`) pointant vers `HomeComponent` — la page d'accueil
qui regroupera tous les exercices — ainsi que la route wildcard (`**`) qui redirige vers `''`
en cas d'URL inconnue.

`HomeComponent` est fourni (vide pour l'instant) ; il sera complété aux exercices 1 et 2.

### Fichiers à éditer

| Fichier | Ce qu'il faut faire |
|---|---|
| `src/app/app.routes.ts` | Importer `HomeComponent`, déclarer la route `''` → `HomeComponent` et la route `'**'` → redirect `''` |

---

## Exercice 1 — Compteur réactif avec Signals

### Mise en contexte

L'objectif est de comprendre le système de réactivité natif d'Angular : les **Signals**.
Un Signal est une valeur observable qui notifie automatiquement les vues lorsqu'elle change,
sans avoir besoin de `ChangeDetectionStrategy` ou d'`Observable`.

On manipule trois primitives :
- `signal(valeur)` — crée une valeur réactive modifiable
- `computed(() => ...)` — dérive une valeur en lecture seule à partir d'un ou plusieurs signals
- `.set()` / `.update()` — met à jour la valeur d'un signal

Une fois le composant `CompteurComponent` fonctionnel, il faut l'intégrer dans la page d'accueil
pour qu'il soit visible dès l'arrivée sur `/`.

### Fichiers à éditer

| Fichier | Ce qu'il faut faire |
|---|---|
| `src/app/components/compteur/compteur.component.ts` | Implémenter `double`, `message`, `incrementer()`, `decrementer()`, `reset()` |
| `src/app/components/compteur/compteur.component.html` | Afficher la valeur, le double, le message et les trois boutons |
| `src/app/components/home/home.component.ts` | Importer `CompteurComponent` dans les `imports[]` |
| `src/app/components/home/home.component.html` | Ajouter `<app-compteur>` dans la page d'accueil |

---

## Exercice 2 — Bibliothèque de livres (composants + service + routing)

### Mise en contexte

L'objectif est de construire une petite application Angular complète autour d'une bibliothèque de livres.
Elle couvre quatre notions fondamentales :

1. **Composant de présentation** (`LivreCardComponent`) — recevoir des données via un `input` et les afficher
2. **Filtrage réactif** (`ListeLivresComponent`) — combiner plusieurs signals pour filtrer une liste en temps réel
3. **Service partagé** (`LivresService`) — centraliser les données et la logique métier (recherche par id, toggle, extraction des genres)
4. **Routing avec paramètre d'URL** (`DetailLivreComponent`) — lire le paramètre `:id` depuis l'URL grâce à `withComponentInputBinding()`

Les données sont chargées depuis un fichier JSON statique (`public/livres.json`) via `HttpClient`,
ce qui simule un vrai appel API.

Une fois la bibliothèque fonctionnelle, elle doit également être intégrée dans la page d'accueil.

### Fichiers à éditer

| Fichier | Ce qu'il faut faire |
|---|---|
| `src/app/services/livres.service.ts` | Implémenter `getLivreById()`, `toggleLu()`, `getGenres()` |
| `src/app/components/livre-card/livre-card.component.ts` | Ajouter l'`input` `livre` et importer `RouterLink` |
| `src/app/components/livre-card/livre-card.component.html` | Afficher la couverture, le titre, l'auteur, le genre, la note et le statut lu |
| `src/app/components/liste-livres/liste-livres.component.ts` | Implémenter le computed de filtrage et les méthodes de mise à jour des signals |
| `src/app/components/liste-livres/liste-livres.component.html` | Boutons de filtre, grille de cartes, message vide, compteur de résultats |
| `src/app/components/detail-livre/detail-livre.component.ts` | Déclarer l'input `id`, implémenter le computed `livre` |
| `src/app/components/detail-livre/detail-livre.component.html` | Afficher les infos du livre, le bouton toggle et le lien retour |
| `src/app/app.routes.ts` | Ajouter la route `'livre/:id'` → `DetailLivreComponent` |
| `src/app/components/home/home.component.ts` | Importer `ListeLivresComponent` dans les `imports[]` |
| `src/app/components/home/home.component.html` | Ajouter `<app-liste-livres>` dans la page d'accueil |

---

## Exercice 3 — Navbar de navigation

### Mise en contexte

L'objectif est de créer une **barre de navigation persistante**, visible sur toutes les pages de l'application.
Elle permet à l'utilisateur de naviguer vers une vue dédiée à chaque exercice, sans passer par la page d'accueil.

On pratique ici :
- La navigation déclarative avec `RouterLink` dans un composant Angular
- La mise en évidence du lien actif avec `RouterLinkActive`
- L'intégration d'un composant dans le shell applicatif (`app.html`)
- La déclaration de nouvelles routes dans `app.routes.ts`

Il faut :
1. Déclarer les routes `compteur` et `bibliotheque` dans `app.routes.ts`
2. Insérer le sélecteur `<app-navbar />` dans `app.html` (et importer le composant dans `app.ts`)
3. Implémenter le template de la navbar avec deux liens "Compteur" et "Bibliothèque" pointant vers `/compteur` et `/bibliotheque`

### Fichiers à éditer

| Fichier | Ce qu'il faut faire |
|---|---|
| `src/app/app.routes.ts` | Ajouter les routes `compteur` → `CompteurComponent` et `bibliotheque` → `ListeLivresComponent` |
| `src/app/app.ts` | Importer `NavbarComponent` dans les `imports[]` |
| `src/app/app.html` | Insérer `<app-navbar />` entre le header et le `<main>` |
| `src/app/components/navbar/navbar.component.ts` | Importer `RouterLink` (et `RouterLinkActive`) dans les `imports[]` |
| `src/app/components/navbar/navbar.component.html` | Créer la navbar avec deux liens "Compteur" et "Bibliothèque" |
| `src/app/components/navbar/navbar.component.css` | (optionnel) Styliser la navbar |

---

## Exercice 4 — Filmographie avec Observables RxJS

### Mise en contexte

L'objectif est de consommer une **vraie API REST** (TMDB) en utilisant exclusivement des **Observables RxJS**.
Aucun Signal, aucune Promise — tout passe par des Observables et le pipe `async` dans les templates.

Cet exercice se décompose en trois sous-parties :

- **4a — FilmCard** : composant de présentation, `@Input()` / `@Output()`, EventEmitter
- **4b — RechercheFilms** : cœur de l'exercice — pipeline RxJS avec `debounceTime`, `distinctUntilChanged`, `filter`, `switchMap`
- **4c — FilmsPopulaires** : Observable simple au chargement, pipe `async`, `trackById`

**Avant de commencer** : renseigner votre Bearer token TMDB dans `src/app/config/tmdb.config.ts`
(voir les instructions en commentaire dans le fichier).

### Exercice 4a — FilmCard

| Fichier | Ce qu'il faut faire |
|---|---|
| `src/app/components/film-card/film-card.component.ts` | Déclarer `@Input({ required: true }) film!: Film`, `@Output() filmSelectionne`, implémenter `selectionner()` |
| `src/app/components/film-card/film-card.component.html` | Afficher le poster, le titre, l'année, la note et le bouton "Voir détail" |

### Exercice 4b — RechercheFilms

| Fichier | Ce qu'il faut faire |
|---|---|
| `src/app/services/tmdb.service.ts` | Implémenter `searchMovies()`, `getPopularMovies()`, `getMovieById()` |
| `src/app/components/recherche-films/recherche-films.component.ts` | Initialiser `films$` avec le pipeline RxJS complet dans `ngOnInit`, implémenter `onSearch()`, `onFilmSelectionne()`, `ngOnDestroy()` |
| `src/app/components/recherche-films/recherche-films.component.html` | Input de recherche, spinner, grille de cartes, détail du film sélectionné |

### Exercice 4c — FilmsPopulaires

| Fichier | Ce qu'il faut faire |
|---|---|
| `src/app/components/films-populaires/films-populaires.component.ts` | Initialiser `films$` au chargement, implémenter `trackById()` |
| `src/app/components/films-populaires/films-populaires.component.html` | Grille de cartes avec pipe `async` et `trackById` |

### Routing & Navbar

| Fichier | Ce qu'il faut faire |
|---|---|
| `src/app/app.routes.ts` | Ajouter la route `filmographie` → `FilmographieComponent` |
| `src/app/components/navbar/navbar.component.html` | Ajouter un lien "Filmographie" pointant vers `/filmographie` |

### Fichiers fournis (ne pas modifier)

| Fichier | Contenu |
|---|---|
| `src/app/models/film.model.ts` | Interfaces `Film` et `TmdbResponse` |
| `src/app/components/filmographie/filmographie.component.*` | Composant conteneur qui intègre les deux sous-composants |

---

## Lancer l'application

```bash
cd tp4
npm install
ng serve
```

Puis ouvrir [http://localhost:4200](http://localhost:4200).
