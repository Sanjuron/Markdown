DOM (Document Object Model)
=============================

Il permet à js de *jouer sur le contenu HTML*.
Tout ce qui est dans le HTML - *y compris les commentaires* - fait partie du **DOM**.

-> Les attributs `defer` et `async` sont utiles si l'on place les scripts dans le  `head`:

- `defer` indique au navigateur de télécharger les scripts mais de ne pas les exécuter tant que le DOM n'est pas fini de charger.
- `async` indique au navigateur que le script doit être exécuter de **manière asynchrone**. Càd que me navigateur initie une requête pour télécharger le script et le charge dès que disponible mais qu'il continue le chargement de la page entretemps. Ne garantit pas que la page sera chargée à temps. De plus, s'il y a plusieurs scripts à charger - et que ceux-ci sont dépendants les uns de autres - rien ne dit qu'il seront chargés dans le bon ordre.

Le DOM remplit **2 fonctions**. Il fournit à l'intention de JS **une carte structurée de la page en traduisant le HTML** dans un format que JS peut comprendre. Chaque morceau du document est un **noeud** (*node*) auquel JS peut accéder. Et la deuxième fonction consiste **à fournir à JS un ensemble de méthodes et fonctions permettant d'accéder aux noeuds cartographiés**.

Un [article intéressant](https://css-tricks.com/dom/) et facile d'accès sur ce qu'est le DOM.

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