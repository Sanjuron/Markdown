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

Les applications React ont un **composant racine** qui est toujours rendu (*rendered*) dans le DOM. (Généralement App.js). Les autres composants sont imbriqués à l'intérieur de celui-ci (*nesting*).

**Attention** les vidéos du Net ninja au sujet de Create React App ne coincident pas avec ma version. Plusieurs changements de syntaxe, dont notamment les *class extends* qui deviennent de simples fonctions et la disparition de la fonction render()

On imbrique un composant dans le composant racine simplement en mettant **le nom du composant dans une balise autofermante** au sein du `return`.

Les *props*
-------

*Props* est le diminutifs de *properties*.
Les *props* sont une manière de passer des datas du composant parent à un composant enfant.

On déclare les *props* dans le composant parent en les inscrivant dans la balise du composant enfant de cette manière :
        propsName = "valeur"
        <Ninjas name="Sanjuron" age="30" belt="black"/>

Puis en les intégrant dans le composant enfant de cette manière:
        function Ninjas(props) {

        return(
            <div className="ninja">
                <div>Name: {props.name}</div>
                <div>Age: {props.age}</div>
                <div>Belt: {props.belt}</div>
            </div>
        )}
Mais il est préférable d'utiliser cette autre façon, qui rend le code plus facilement réutilisable:
        function Ninjas(props) {
        const { name, age, belt} = props;
        return(
            <div className="ninja">
                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>Belt: {belt}</div>
            </div>
        )}

Container vs UI Components
--------------------

Les composants de type container ne sont pas généralement **pas concernés par l'interface utilisateur** (UI) ou le design de l'app. Ils contiennent des `states`. Ils sont utilisés en tant de que **sources de données**. Ils peuvent recevoir (*nest*) plusieurs composants. on utlise des **classes** pour créer des types de composants (Est-ce encore le cas avec la nouvelle version ?). Ils sont aussi appelés *class-based components*.

Les composants de type UI ne contiennent pas de `states` et **reçoivent toutes leurs données par le biais de `props`.** Leur principale préoccupation est l'**interface**, comment les données sont présentées à l'utilisateur. On utilise des **fonctions**, pas des classes, pour les créer. 
