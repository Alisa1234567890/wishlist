/*
 * Configuration de l'API TMDB (The Movie Database)
 *
 * Comment créer un compte et récupérer votre Bearer token :
 *
 * Étape 1 — Créer un compte gratuit sur https://www.themoviedb.org/signup
 *
 * Étape 2 — Aller dans Paramètres du compte > API (https://www.themoviedb.org/settings/api)
 *            et faire une demande de clé API (type "Developer", usage personnel).
 *
 * Étape 3 — Dans la section "Jetons d'accès en lecture de l'API", copier le
 *            "Jeton d'accès en lecture de l'API" (Bearer token, long ~200 caractères)
 *            et le coller dans le champ `token` ci-dessous.
 */

export const TMDB_CONFIG = {
  baseUrl: 'https://api.themoviedb.org/3',
  imageBaseUrl: 'https://image.tmdb.org/t/p/w300',
  // TODO : remplacer par votre Bearer token TMDB
  token:
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWQ1ZDQzMjZlMTAxMDI5ZGRmZDYwNzU1NDhlODU3ZSIsIm5iZiI6MTc3OTc4NTg4OS41OTcsInN1YiI6IjZhMTU2MGExOWVjNWEzNjRlOThlYzVlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7OzK2WQrQR6jMBGTY3su5SHNWKFQfLf9W3kj9HX-8uI',
};
