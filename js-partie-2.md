Deuxième partie : Fonctions, objets, classes
=============================================


Les Fonctions
-------------

Les Objets
----------

Un objet, *c'est une collection de **plusieurs valeurs***. En Js, les tableaux sont considérés comme des objets.
C'est une *logique de programmation* qui permet de décomposer son code de façon *plus compréhensible*.

Déclarer un objet de façon littérale:

    Let objectName = {
        keyName = value1;
        keyName2 = value2;

        funcName() {
            *instructions*
        }
    };

Quand on ajoute une fonction à un objet (`funcName()` dans l'exemple), celle-ci devient une **méthode** de l'objet. On n'utilise donc pas le mot-clé function pour déclarer une fonction dans un objet.

Le mot-clé `this` fait référence à l'objet courant.