DOM (Document Object Model)
=============================

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