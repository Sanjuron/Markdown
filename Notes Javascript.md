Notes Javascript - Première partie : jusqu'aux boucles
===============================================

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
- `console.log("message");` affiche un message dans la console.


Divers
-----

`IsNan()` permet de vérifier si le paramètre entré entre parenthèses est un nombre ou non. **Important pour vérifier les données entrées par l'utilisateur**

Toujours mettre `"use strict";` en début de code js.

- `==` compare les valeurs. ex: `"7"==7` renvoie `true` car les les valeurs sont *identiques* même si les types ne le sont pas.
- `===`compare les valeurs et les types. Ici `"7"===7` renvoie `false` car les *types sont différents* (string et number).

Quand js compare des valeurs de différents types, il les convertit en nombre.


Opérateurs, comparaisons...
------------------

Liste des opérateurs:

- l'addition +
- la soustraction -
- la multiplication *
- la division /
- le modulo % (c'est-à-dire le reste d'une division)
- l'exponientation ** Ex : `2**3` renvoie `8`

Le signe `+` appliqué à des chaînes de caractères permet leur **concaténation**.

	let concat = "Julien" + "Sanjuron";

Si l'un des opérandes est un *string* alors l'autre ou les autres opérandes seront converties en *string*. Il faut cependant prendre en compte la précédence des opérations. 
	2 + 2 + "1" = 41
Car les deux chiffres sont d'abord additionnés entre eux avant d'être convertis. 

On peut assigner plusieurs variables à une même valeur en une seule ligne:
	
	let a, b, c;
	a = b = c = 2;

**Attention** `i++` n'est pas égal à `++i`.
La forme préfixée retourne la nouvelle valeur que la forme suffixée retourne l'ancienne. 

Liste des comparaisons:

- `<`
- `<=`
- `>`
- `>=`
- `==`
- `===`

Les Structures conditionnelles
------------------------------

La structure `if` évalue une *condition* entre parenthèses et si le résultat est *true* exécute un bloc de code. 

	let name = "Julien";
	if (name == Julien") {
		alert("Tu t'appelles bien Julien");
	}

-> Il est possible de l'écrire plus rapidement:

	if (name) {
		alert("Tu t'appelles bien Julien");
	}

-> Car la condition est évaluée en `true` ou `false`.

Une structure if peut se voir rajouter `else` ou `else if` afin d'exécuter un autre bloc de code si la ou les conditions initiales ne sont pas remplies.

Il est aussi possible d'opter pour une **structure ternaire**

	let result = condition ? value1 : value 2;

Explications : une condition est posée. Le signe `?` l'évalue. Si le résultat est `true` alors `value1` est exécutée. Sinon (*else*) `value2`l'est.

Les opérateurs logiques:

- || (OR) : s'il l'une des conditions est `true` alors `true` est retourné.
- && (AND) : il faut que toutes les conditions soient `true` pour que `true` soit retourné. 
- ! (NOT) : 


Les Boucles
-----------

Les boucles sont utilisées pour répéter du code un certain nombre de fois.

Syntaxe de la boucle `while` 
	
	let a = true;
	while(a) {
		alert("a est true");
	}

**Attention**. Cette boucle est **infinie** car la condition sera toujours vraie.

Exemple d'une boucle `while`non infinie:

	let i = 1;
	while (i < 15) {
		alert("i est inférieur à 15");
		i++;
	}

-> i est initialement égal à i. La condition évalue la valeur de i à chaque nouveau tour et affiche un message tant que i n'atteint pas 15. A chaque tour, i est incrémenté. 

Syntaxe de la boucle `do...while`

	do {
		alert("i est inférieur à 15");
		i++;
	} while (i < 15);

La boucle *do...while* permet de s'assurer que le bloc de code sera exécuté **au moins une fois** peu importe si la condition est `true` ou `false`.


Syntaxe de la boucle `for`

	for(let i=0; i<15; i++) {
		alert("i est inférieur à 15");
	}

La boucle `for` est la plus utilisée. 
Au sein des parenthèses, on commence par *entrer une valeur de départ*,  puis on définit une *condition* et enfin on décide d'un *compteur*. 
Tant que la valeur de départ reste vraie au regard de la condition définie en "avançant" selon le compteur défini pour chaque tour, alors le bloc de code est exécuté. 

Chacune des trois parties de la boucle `for` peut être **omise**. 
S'il n'y a pas de valeur de départ alors rien ne sera fait au commencement de la boucle.
Cependant, même si l'on enlève une ou plusieurs partie de la boucle, il faut conserver les `;`


