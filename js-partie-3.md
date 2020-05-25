DOM (Document Object Model)
=============================

Il permet à js de *jouer sur le contenu HTML*.
Tout ce qui est dans le HTML - *y compris les commentaires* - fait partie du **DOM**.

-> Les attributs `defer` et `async` sont utiles si l'on place les scripts dans le  `head`:

- `defer` indique au navigateur de télécharger les scripts mais de ne pas les exécuter tant que le DOM n'est pas fini de charger.
- `async` indique au navigateur que le script doit être exécuter de **manière asynchrone**. Càd que me navigateur initie une requête pour télécharger le script et le charge dès que disponible mais qu'il continue le chargement de la page entretemps. Ne garantit pas que la page sera chargée à temps. De plus, s'il y a plusieurs scripts à charger - et que ceux-ci sont dépendants les uns de autres - rien ne dit qu'il seront chargés dans le bon ordre.

Le DOM remplit **2 fonctions**. Il fournit à l'intention de JS **une carte structurée de la page en traduisant le HTML** dans un format que JS peut comprendre. Chaque morceau du document est un **noeud** (*node*) auquel JS peut accéder. Et la deuxième fonction consiste **à fournir à JS un ensemble de méthodes et fonctions permettant d'accéder aux noeuds cartographiés**.

Un [article intéressant](https://css-tricks.com/dom/) et facile d'accès sur ce qu'est le DOM.

**Illustration du DOM TREE :**

![le dom tree](https://www.w3schools.com/js/pic_htmltree.gif)

Il y a **12 types de nodes**. Dans la pratique, on n'en utilise que **quatre** :
- `document` qui est le point d'entrée du DOM.
- `element nodes` qui sont les *tag HTML*.
- `text nodes` qui contiennent le texte.
- et les `commentaires`. 

=> à vérifier que ce soit bien le cas...

Dans le Dom **null** veut dire *ce qui n'existe pas*.


Accéder au DOM de façon générale
----------------------

L'objet `document` est le point d'entrée du DOM.

- `document.documentElement` donne accès à la balise `<html>`
- `document.body` donne accès à la balise `<body>`
- `document.head` donne accès à la balise `<head>`

Les **child nodes** sont les éléments qui sont des enfants directs. 
Les **descendants** sont tous les éléments inclus dans le parent, y compris les enfants des enfants.
Les propriétés `firstChild`et `lastChild` donnent respectivement accès au premier et au dernier enfant.

	elem.childNodes[0] === elem.firstChild
	elem.childNodes[elem.childNodes.lengh - 1] === elem.lastChild

`childNodes` n'est pas un *array* mais une *collection*. On **ne peut pas utiliser les méthodes de tableaux** mais il est possible d'**utiliser une boucle `for...of` pour itérer à l'intérieur**.

	for (let node of document.body.childNodes) {
		console.log(node); // affichera tous les nodes enfants de body
	}

les *siblings* sont les nodes qui ont les mêmes parents (des frères et soeurs).

- `nextSibling` donne accès au "frère" suivant.
- `previousSibling` donne accès au "frère" précédent.
- `parentNode` donne accès au parent du node. 

Toutes ces propriétés donnent accès à **tous les nodes** (*text nodes, element nodes, comment nodes*).

Si l'on ne souhaite accéder qu'aux *element nodes*, il faut taper les commandes suivantes:

- `children` donne accès aux enfants qui sont *element nodes*
- `firstElementChild`, `lastElementChild`
- `previousElementSibling`, `nextElementSibling`
- `parentElement` 

Accéder au DOM de façon particulière
------------------------------------

Liste des 6 méthodes principales pour accéder à des éléments de façon plus précise :

- `document.getElementById("")` donne accès à un `id` où qu'il se trouve dans le document. C'est la raison pour laquelle il ne peut y en avoir qu'un par document.
- `document.getElementsByTagName("")` retourne dans un tableau tous les éléments du même genre (`p`, `h1`, etc.)
- `document.getElementsByClassName()` retourne dans un tableau tous les éléments d'une même classe
- `document.querySelector()` retourne le premier élément obtenu grâce à un sélécteur css
- `document.querySelectorAll()` retourne tous les éléments obtenus grâce à un sélécteur css
- `document.getElementsByName` rarement utilisé.

Il est judicieux de stocker ces requêtes dans une variable pour pouvoir ensuite y appliquer d'autres méthodes.


