Deuxième partie : Fonctions, objets, classes
=============================================


Les Fonctions
-------------

**Les fonctions permettent d'appeler du code plusieurs fois sans répétition**

On déclare une fonction en la précédant du mot-clé `function` puis de son nom suivi de parenthèses et enfin d'accolades qui contiennent le corps de la fonction.

	function sayHello() {
		alert("Salut!");
	}

Les parenthèses contiennent les **paramètres** de la fonctions. Il peut y en avoir *plusieurs*. 

Une fonction s'appelle de cette manière:

	sayHello();

 Il est de bon usage de débuter le nom de la fonction *par un verbe qui décrit l'action effectué*. Une fonction ne doit *faire que ce que son nom suggère*, rien de plus. Si deux actions indépendantes sont liées, alors il faut créer deux fonctions, et les réunir dans une troisième. 

Exemples de verbes couramment utilisés pour nommer des fonctions:

- **display** : pour **afficher** quelque chose.
- **get** : pour **retourner** une valeur.
- **calc** : pour **calculer** quelque chose.
- **create** : pour **créer** quelque chose.
- **check** : pour **vérifier** quelque chose.

**Attention** au *scope* des variables. Une variable déclarée **à l'intérieur** d'une fonction n'est visible qu'à **l'intérieur**.
Une variable déclarée **à l'extérieur** peut être appelée à l'intérieur d'une fonction.

Une variable globable *peut-être modifiée à l'intérieur d'une fonction* mais sa valeur ne changera globalement *qu'après que la fonction a été appelée*. 

Exemple d'une fonction avec paramètres :

	function displayMovie(director, film) {
		alert(director + " a réalisé " + film + ".");
	}
	//
	movie("Akira Kurosawa", "Barberousse"); // affiche : Akira Kurosawa a réalisé Barberousse.

Une valeur par défaut **peut être assignée à un paramètre** au cas où celui-ci n'aurait pas été fourni.

	function movie(director, film = "non renseigné")
	movie("Akira Kurosawa"); // affichera "Akira Kurosawa a réalisé non renseigné".

Une fonction peut retourner une valeur en tant que résultat par l'utilisation du mot-clé `return`.
**Attention**. L'utilisation de `return` stoppe l'exécution du code. 

Il est possible d'écrire une fonction d'une manière plus concise. **C'est la fonction fléchée (arrow function)**.

Syntaxe d'une *arrow function*:

	let func = (arg1, arg2, ...argN) => expression



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