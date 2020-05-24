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
**Attention**: l'utilisation de `return` stoppe l'exécution du code. 

Il est possible d'écrire une fonction d'une manière plus concise. **C'est la fonction fléchée (arrow function)**.

Syntaxe d'une *arrow function*:

	let func = (arg1, arg2, ...argN) => expression


Les Objets
----------

Un objet, *c'est une collection de **plusieurs valeurs***. En Js, les tableaux sont considérés comme des objets.
C'est une *logique de programmation* qui permet de décomposer son code de façon *plus compréhensible*. Ecrire du code en utilisant des objets pour représenter des entités s'appelle de **la programmation orientée objet**.

Déclarer un objet de façon littérale:

    let objectName = {
        keyName: value1,
        "keyName 2": value2,

        funcName() {
            *instructions*
        }
    };

Les propriétés d'un objet sont construits sur le modèle **key: value;** La *key* est un *string* et la *value* peut être de n'importe quel type.

Quand on ajoute une fonction à un objet (`funcName()` dans l'exemple), celle-ci devient une **méthode** de l'objet. On n'utilise donc pas le mot-clé function pour déclarer une fonction dans un objet.

Il y a deux syntaxes pour créer un objet vide:

	let user = new Object(); // syntaxe de l'objet constructeur (object constructor)
	let user = {}; // syntaxe de l'objet littéral (object litteral)

Pour accéder à une propriété d'un objet, on préfixe le nom de l'objet à la `key` relié par un point. Cette notation ne fonctionne que sur **les propriétés en un mot**. Pour les propriétés à mots mulptiples (qui doivent d'ailleurs être déclarées entre guillemets dans l'objet), il faut utiliser la notation entre crochets.

	alert(objectName.keyName); // affiche la valeur de la propriété
	alert(objectName["keyName 2"])

Pour **supprimer une propriété** on utilise l'opérateur `delete`.

La boucle `for...in`:

Elle permet d'itérer les `keys` d'un objet. Sa syntaxe: 

	for (let key in object) {
		alert(key); // affiche les keys
		alert(user[key]); // affiche les valeurs
	}

**Attention**: une variable ne range pas l'objet en lui-même mais son adresse dans la mémoire, c'est-à-dire **une référence** de celui-ci. Ce qui veut dire que si l'on copie la variable d'un objet dans une autre variable, alors **toute modification** d'une propriété dans la nouvelle variable modifiera aussi la variable première. 

Exemple :

	let user = {
		name: "Julien",
	};

	let admin = user;

	admin.name = "Sanjuron";

	alert(user.name); // affiche "Sanjuron"


Dans les objets, **les actions sont représentés par les fonctions**, c'est-à-dire les *méthodes*. Il est souvent nécessaire pour une méthode d'accéder aux informations rangées dans l'objet pour accomplir son travail. **Pour accéder à l'objet, la méthode utilise le mot-clé `this`.**

Exemple:
	
	let user = {
		name: "Julien",
		alias: "Sanjuron",

		displayFullName() {
			alert("Tu t'appelles " + this.name + " et ton pseudo est: " + this.alias);
		}
	};
	user.displayFullName(); // affiche "Tu t'appelles Julien et ton pseudo est Sanjuron"

*A noter : la valeur de `this` diffère selon que l'on est en "strict mode" ou non, si on l'utilise dans une fonction qui ne fait pas appel à un objet. En strict mode, sa valeur serait `undefined` alors qu'en non strict mode, sa valeur serait celle de l'objet global.*

Le mot-clé `new` permet de créer une multitude d'objets similaires. 

Syntaxe de la fonction constructeur:

	function User(name, alias) {
		this.name = name;
		this.alias = alias;
	}

	let user = new User("Julien", "Sanjuron");

	alert(user.name + user.alias);

*A noter la convention consistant à déclarer une fonction constructeur avec une majuscule*.

*les constructeurs possèdent rarement de `return`. Lorsque c'est le cas, associé à un objet l'objet sera retourné, sinon ce sera le `this`*.


Les Classes
--------
