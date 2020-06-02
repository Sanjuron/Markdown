Notes PHP
========

C'est un langage de script **côté serveur**. Il peut collecter des *données de formulaire*, générer du *contenu dynamique*, *gérer des cookies*, etc.

Les **guillemets doubles** permettent l'**interpolation**. Les simples ne le permettent pas.

**Toutes** les variables se déclarent précédées du signe `$`.

Pour **concaténer** deux variables, on utilise le signe `.`

`var_dump()`permet d'afficher tous les *types de variables*. C'est utilisé pour l'*inspection des contenus de variables* et réservé à *la phase de développement*.

**Il ne faut pas mettre de balise fermante si le fichier ne contient que du PHP où s'il se termine par du PHP**.

`unset()` qui permet de *supprimer* des éléments d'un tableau ne *recalcule pas* les indexs. 

`//`et `#` permettent de créer du commentaire monoligne. 


Threshold fait référence à un seuil. C'est une limite au-delà de laquelle quelque chose change.

Les **filtres** PHP sont utilisés pour aider/simplifier la **validation de données**. 

La classe **closure** est utilisée pour **représenter les fonctions anonymes**. 


Twig
----

Les templates permettent de séparer le code PHP du code HTML.

Le moteur de templates Twig est un pseudo-langage.

Elements de syntaxe:

- `{{ ... }}` affiche quelque chose
- `{% ... %}`fait quelque chose
- `{# ... #}` pour les commentaires.