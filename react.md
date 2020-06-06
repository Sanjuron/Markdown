REACT JS
=======

C'est une **bibliothèque js** mise au point par FaceBook, pour créer des interfaces utilisateurs.

Le framework React Js raisonne selon **une logique de composants**. On crée des composant dans React pour chaque partie de notre application (navbar, searchbox, footer, etc.). React "injecte" ensuite ces composants dans le DOM.

Dans React, on travaille dans un **DOM virtuel** qui est une copie du DOM dans un objet JS. Cela permet à React d'être rapide.

Babel est un compilateur javascript pour **rendre compréhensible les dernières fonctionnalités de JS** à tous les navigateurs.

Les composants ressemblent à du contenu HTML mais c'est en fait du JSX. Le JSX est une **extension syntaxique** de JS pour créer du HTML mais ce n'est pas du HTML. Ils peuvent contenir des `states` (*data ou UI state*). Ils peuvent aussi contenir du JavaScript pour les fonctionnalités.

On utilise la fonction `render() {}` pour "rendre" du JSX dans le DOM. `ReactDOM.render(<App/>, document.getElementById('app'));` est appelé pour inscrire le contenu de *render* au sein de *la classe App* dans le `div` qui a pour attribut `id`. 
Au sein de *render* on utilise les accolades {} pour inclure du contenu dynamique ou données.

States
-----

Le `state` est un objet JavaScript qui décrit **l'état courant du composant**. Cela permet de stocker localement des données nécessaires au composant.

En JS, le contexte du mot-clé `this` à l'intérieur d'une fonction est généralement déterminé par comment et où la fonction est appelée. Pas par où la fonction se trouve (*sits*)

Create React App
------------

**Create React App** est un *package*. C'est un outil utilisant la ligne de commande. Un site internet utilise plusieurs composants. Plus l'application devient complexe - avec de nombreuses pages - plus se fait nécessaire l'utilisation d'une mise en place de développement plus robuste. On peut ainsi utiliser un serveur de développement, utiliser des *features$ d'ES6 normalement non supportés, et maintenir un code modulaire.

Pour l'invoquer en ligne de commande:*

        npx create-react-app "nomApplication"
        cd nomApplication
        npm start   

Beaucoup d'applications React sont des application d'une page. Ce qui ne veut pas dire que l'utilisateur ne verra qu'une page mais qu'une seule pas sera donnée au navigateur.
Dans un site à plusieurs page, chacune d'entre elle - lorsqu'appelée par le client - envoie une requête à un serveur. Dans une application React, une page envoie une requête au serveur, et les autres pages sont interceptées par React. Rend l'application plus rapide en économisant le temps d'envoi au serveur.

Pour ouvrir une fenêtre de développement dans le navigateur pour prévisualiser son travail :

        cd my-app 
        npm start
