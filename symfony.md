Symfony
=======

Une **route** est l'url de la page et qui pointe vers un **Controleur**. Elle peut être créée en Annotations, YAML, XML, PHP. Préferer Annotations car on peut mettre la route et le controller dans le même fichier. La partie d'une route entre accolades est la partie variable. 
**Attention** : par défaut une route prend en compte **toutes les requêtes**. Il faut donc utiliser `methods` pour restreindre les requêtes auxquelles une route peut répondre. Le paramètre `requirements` est utilisé pour valider une unique route.

Un `Controller` est une fonction php  qui **construit la page**. La plupart du temps, un controller est une méthode à l'intérieur d'une classe. Quand elle est liée à une url, elle accepte en général une requête et permet de voir la réponse.

`php bin/console debug:router` pour afficher toutes les routes.

La fonction `render` **rend le template twig**

Dossiers:

- var : contient les caches, les logs...
- vendor : contient les bibliothèques installées en plus.

