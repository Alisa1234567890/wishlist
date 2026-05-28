# 🎬 Movie Library & Wishlist Application

Bienvenue dans cette application web moderne développée avec **Angular**. Elle permet d'explorer les films du moment, de rechercher des œuvres spécifiques, de consulter des fiches détaillées et de gérer entièrement une liste d'envies ("Wishlist") personnalisée.

**Contributeurs:** Alisa Rudenko

---

##  Fonctionnalités Clés

*   **Exploration en Temps Réel :** Affichage dynamique de la liste des films populaires du moment.
*   **Moteur de Recherche :** Trouver facilement un film spécifique grâce à une recherche par mot-clé.
*   **Fiches Détaillées :** Clic sur un film pour ouvrir sa page dédiée (synopsis, note, affiche grand format).
*   **Gestion de la Wishlist :**
    *   Ajout rapide d'un film depuis sa carte ou sa page de détail.
    *   Page "Panier/Wishlist" dédiée pour centraliser vos films favoris.
    *   Possibilité de retirer un film de la liste en un clic.

---

## 🛠️ Intégration de l'API (TMDB)

L'application consomme l'API publique de **The Movie Database (TMDB)**. Pour assurer la sécurité et l'authentification des requêtes, le projet intègre un intercepteur HTTP qui injecte automatiquement un jeton d'accès.