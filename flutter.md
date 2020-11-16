**Flutter**
========

Informations générales sur l'Hardware/Software d'un smartphone
-------------------------------

Le **kernel** performe les tâches les plus fondamentales de l'OS.

Le **runtime** est le code qui **fait le travail supplémentaire en arrière-plan** lorsque l'application s'exécute.

L'**Application Programming Interface** est du **code réutilisé sans cesse par les app developers**

L'**Os User Interface** est la zone qui inclut l'écran d'accueil, les îcones de démarrage, l'exploration de fichiers...

Informations générales sur Flutter
--------------------------

Dans Flutter, quasiment tout est un **widget**.

La librairie **Material Design** permet de styliser l'application dans une apparence **Android**.

La librairie **Cupertino** permet de styliser l'application dans une apparence **Apple**.

Flutter utilise le langage DART qui possède deux compilateurs :

- Un compilateur **AOT** (*Ahead of time*) : traduit tout le programme pour le rendre exécutable sur les appareils.
- Un compilateur **JIT** (*Just in time*) : traduit suffisamment de code pour que l'app puisse s'exécuter.

Cela permet de fluidifier la phase de développement en permettant de voir rapidement les mise à jours faites.

2 façons d'appliquer les changements :

- le **Hot Restart** : l'app redémarre.
- le **Hot Reload** : Ne change que les modifications apportées au code.

Dart est un **langage typé**. Il faut donc préciser le type de variable utilisé. On ne peut pas changer la valeur d'une variable en un autre type *sauf* si l'on utilise le mot-clé `var` à la place du type de variable.

    int num = 5;
    double num2 = 5.000
    string text = "Salut";
    bool isTrue = true;
    List movies = ["jaws", "ikiru"];
    Map movies2 = { 'key': value,}

Pour créer un projet flutter, on peut passer par Android Studio ou alors par la ligne de commande :

    flutter create nom_projet // crée un projet

Dans dart `///` crée du commentaire (appelé **end-of-line doc comments**) pour ceux qui ne lisent pas le code. Il est visible grâce à l'utilisation d'un programme appelé **dartdoc**.

**Tous** les programmes Dart ont une **fonction qui s'appelle main()** et qui contient le code à exécuter.

La logique de Flutter
-------------------------

Une **app Flutter** est assez similaire aux poupées russes : Tout est question d'**imbrication**. 

Un **constructeur** est une **méthode spéciale d'une classe DART** qui est **automatiquement appelé** lorsque l'objet est créé. 

    MaterialApp(
    home : Material(
        child: Text ("Hello World!, textScaleFactor: 4.0),
    ),
    )

Explications : le widget home (l'écran d'accueil de l'app) possède un objet de type Material (càd qu'il permet une stylisation de type android, définie en amont par l'objet MaterialApp) au sein duquel se trouve un autre widget enfant qui possède un constructeur de type Text qui appelle le string "Hello World". Donc, sur l'écran d'accueil s'affiche Hello World.

Un *Constructor Call*, peut avoir 0, 1 ou plusieurs paramètres. Dans l'exemple ci-dessus, le *constructor call* Material a 1 paramètre (Text) tandis que Text en possède deux : le premier qui indique le contenu, le deuxième la taille.

A noter que dans l'exemple de Text : le premier paramètre s'appelle un ***positional parameter*** car son sens dépend de sa position dans la liste de paramètres. Le contenu du Text doit toujours être le premier paramètre. Le deuxième paramètre s'appelle un ***named parameter*** car son sens dépend du mot placé avant la virgule.

Classes, Objets et Widgets dans DART
-----------------------

Dans Flutter, quasiment tous les objets sont, d'une manière ou d'une autre, une instance de la classe Widget.

Un Widget est un composant de l'app que ce soit un composant visuel ou un composant d'interface. 

Différence de terminologie entre DART et Flutter : 

    Text("Hello World")

En Dart, on dit que Text construit un objet et donc que l'on appelle l'instance de la classe Text.

En Flutter, on considère que Text crée un widget.

Flutter
-----

En langage de programmation, un **scaffold** est une structure qui fournit une fonctionnalité simple et souvent utilisée.

- **appBar** : permet de construire la barre supérieure
- **body** : le corps de l'app
- **drawer** : un "tiroir", c'est-à-dire un contenu latéral qui apparait en swipant.

L'`appBar` et le `drawer` sont tous les deux disponibles en utilisant le widget `Scaffold`. 

Attention : **Un constructor call ne peut pas avoir deux paramètres avec le même nom**(ex : Scaffold ne peut pas avoir deux child). Donc **comment faire si l'on veut mettre plusieurs enfants dans un widget** ? Réponse : on utilise le widget `Column` qui possède un paramètre `children`

Fonctions
-----

Une fonction se déclare de façon assez similaire à du JavaScript et peut-être appelée au sein d'un widget.

Stateless Widgets & Stateful Widgets
--------------------------

L'état (*le state*) d'un système est la propriété du système susceptible de changer au cours du temps.

Les **Stateless Widgets ne prennent pas en compte le changement**: ils servent à coder ce qui reste identique.

À l'inverse, les **Stateful Widgets sont là pour traiter ce qui est susceptible de changer**.

Un **Stateless Widget se construit lui-même** (il possède une méthode `build`), tandis qu'un **Stateful Widget crée un state** (`createState()`) et le state se construit lui-même.

Toute classe qui étend (*extends*) un Stateless Widget doit posséder une méthode `build`.

Programmer avec des callbacks s'appelle **event driven programming**.

Valoriser l'app
----------

Le widget `theme : ThemeData()` permet d'appliquer un style commun à l'ensemble de son app.

Le `String tooltip` permet d'afficher un conseil lorsque l'utlisateur presse longuement une partie de l'app

En Dart, les **annotations** débutent avec le signe @. Elles servent à **donner à Dart des informations sur une partie du programme**.

L'annotation `@override` sert à rappeler à Dart que **la classe qui est étendue possède une déclaration correspondante**.

le mot `<Widget>` s'appelle un ***generic***

7 des plus importants widgets sont :

- `Column`
- `Row`
- `SizedBox` (rectangle utilisé par les développeurs pour prendre de l'espace)
- `Container` (widget qui contient quelque chose)
- `Expanded`
- `Spacer` (comme SizedBox, à la différence que Spacer utilise `flex` plutôt que les params `height` et `width`)
- `Padding`

Il est possible d'ajouter du `padding` à quasiment tous les widgets **sans avoir besoin de passer par un container**. Il suffit d'enrober ledit widget d'un widget `padding`. D'ailleurs, les développeurs Flutter utilisent plutôt le `padding` au `margin`.