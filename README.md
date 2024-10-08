Rendu par **EIRAS Cléo** et **VAN BRABANDT Jade**

# Projet mini-games

## Consignes générales

L'application devra être ergonomique et intuitive.

La bibliothèque MatAngular devra être utilisée pour la mise en place des composants standards.

## Description fonctionnelle des pages

### Page de connexion

- La page de connexion est composé d'un champ 'login' ainsi que d'un champ 'mot de passe'.
- Les 2 champs sont obligatoires et tant qu'ils ne sont pas renseigné le bouton de validation du formulaire doit être non cliquable.
- Pour valider la connexion d'un utilisateur, le login et le mot de passe doivent être identiques.
- Si un utilisateur a déjà été identifié (mettre en place une mécanique de LocalStorage pour garder la session de l'utilisateur) alors on le redirigera directement sur la page d'accueil.

### Template des pages

- Sur toute les pages, on retrouvera une `navbar` qui sera composée d'un menu burger qui affichera la liste des jeux disponibles sur la plateforme (pour le moment seul le SUDOKU est cliquable le reste est désactivé)
- La `navbar` affichera aussi le pseudo du joueur connecté. Au clic sur le pseudo du joueur alors on est déconnecté.
- On retrouvera un lien vers la page d'accueil et un autre lien vers la page des classements.

### Page d'accueil

- La page d'accueil affichera en titre la date du jour
- On retrouvera la série du joueur courant sur les 7 derniers jours (un tick vert lorsque le joueur a joué, une croix rouge lorsque le joueur n'a pas réalisé de partie)
  - la série sera issue de la propriété `streaks` d'un user
  - si la propriété est vide on considère que le joueur n'a pas joué
  - sinon la propriété streak sera composée des 7 derniers jours

### Page classement

La page classement permettra à l'utilisateur de consulter le classement :
 - des joueurs en fonction de leur nombre de points
 - des joueurs en fonction du nombre de jour (série) qu'ils ont joué

Chaque classement devra être paginé.

### Page Sudoku

## Bonus

1. Fournir un `.dockerfile` permettant de lancer l'application via Docker

## Ressources 

1. API pour récupérer les classements : https://664ba07f35bbda10987d9f99.mockapi.io/api/users
2. API pour récupérer le profil d'un utilisateur : https://664ba07f35bbda10987d9f99.mockapi.io/api/users/{user-id}
3. Collection Postman avec toutes les routes APIs utilisées : https://www.postman.com/apside-clermont/iut/collection/4163533-68aa265a-23b3-484a-b900-f255c298b847/?action=share&creator=4163533

NB : le champ `streak` correspond au nombre de jours d'affilé où le joueur a fini.

NB : le champ `streaks` est un tableau composé des éléments suivants : 
- day : string qui correspond à l'initial du jour
- isPlayed : bool qui correspond au fait que le joueur est joué ou non

NB : une fois connecté, vous pouvez définir l'utilisateur connecté comme celui ayant l'ID 1.
