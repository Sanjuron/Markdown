Notes Javascript
===============

Inclure le `<script src = "js/app.js"></script>` à la toute fin du **body** pour que *la page exécute d'abord l'HTML et le CSS*.

Les types de données en JS
--------------------

Il y a **8 types de valeurs basiques (*basic data type*)** en Js:

- number
- bigInt (pour représenter les entiers supérieurs (2**53-1)) ou inférieurs à -(-2 **53-1)
- string
- boolean
- null : rien, vide, ou valeur inconnue
- undefined : valeur non assignée
- object
- symbol

`typeof` permet de savoir quel type est stockée dans une variable.

Alert / Prompt / Confirm / Console log
-------------------------------------

- `alert("hello");`  affiche une *fenêtre modale*
- `prompt("Est-ce que ?", [default]);` pose une question à l'utilisateur et default permet d'entrer un texte dans le champ input (optionnel)
- `confirm("Oui ou non");` proposer de confirmer une question. Renvoie `true` ou `false` si OK ou Cancel.



Divers
-----

`IsNan()` permet de vérifier si le paramètre entré entre parenthèses est un nombre ou non. **Important pour vérifier les données entrées par l'utilisateur**

Toujours mettre `"use strict";` en début de code js.

- `==` compare les valeurs. ex: `"7"==7` renvoie `true` car les les valeurs sont *identiques* même si les types ne le sont pas.
- `===`compare les valeurs et les types. Ici `"7"===7` renvoie `false` car les *types sont différents* (string et number).

Quand js compare des valeurs de différents types, il les convertit en nombre.


Les Structures conditionnelles
------------------------------

Les Boucles
-----------

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

DOM (Document Object Model)
---------------------------

Il permet à js de *jouer sur le contenu HTML*.
Tout ce qui est dans le HTML - *y compris les commentaires* - fait partie du **DOM**.

Il y a **12 types de nodes**. Dans la pratique, on ne s'en sert que de **quatre** :
- `document` qui est le point d'entrée du DOM.
- `element nodes` qui sont les *tag HTML*.
- `text nodes` qui contiennent le texte.
- et les `commentaires`. 

=> à vérifier que ce soit bien le cas...

Dans le Dom **null** veut dire *ce qui n'existe pas*.

Les *child nodes* sont les éléments qui sont des enfants directs. 
Les **descendants* sont tous les éléments inclus dans le parent, y compris les enfants des enfants.
Les propriétés `firstChild`et `lastChild` donnent respectivement accès au premier et au dernier enfant.