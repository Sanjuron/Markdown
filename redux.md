**React Now Redux**
==================

**Qu'est-ce que Redux?**

(Ne pas oublier le strong et le em)

Présentation de Redux
--------------------

Redux n'est qu'un outil. Bien qu'il soit principalement utilisé avec React, il ne lui pas exclusif et Redux peut très bien s'utiliser avec Angular, Preact (d'autres frameworks JS), ou même, tout banalement, avec du simple JavaScript. Le principal intérêt de Redux réside dans sa gestions des états (*states*). Il vise à faciliter la gestion des données lorsque l'application devient si complexe qu'il en devient difficile de savoir gérer ses *states* et les données qu'ils contiennent.

Comme Dan Abramov - un des fondateurs de Redux- le dit : "N'utilisez pas Redux tant que vous n'avez pas de problème avec le *vanilla React*". C'est-à-dire le React de base, sans ajout ni améliorations. Si vous voulez plus d'informations à ce sujet, je vous conseille la lecture de cet article : https://www.newline.co/fullstack-react/articles/redux-with-mark-erikson/ (en anglais).

Imaginons que vous developpyiez une application avec beaucoup de composants, et encore plus de sous-composants. Il est possible de passer des données d'un composant à l'autre, par un système de plus en plus élaboré de *props*, mais pour rester poli, ça devient vite fastidieux. C'est là qu'intervient Redux.

Comment installer Redux ?
-------------------------

2 bibliothèques sont à installer au sein de votre projet react :
La bibliothèque redux sert à créer le *store* 
La bibliothèqe react-redux sert à connecter le store à l'application react. C'est elle qui permet de connecter les composants au central store data et d'intéragir avec.

    npm install redux react-redux

Comment utiliser Redux ?
---------------------

Créer le store dans index.js est une bonne pratique car c'est là que l'on "kickstart" l'app react

nom-du-projet -> src -> index.js

    //importe le store
    import {createStore} from 'redux';

    //permet d'associer le store à l'app 
    import { Provider} from 'react-redux';

Provider est un composant qui entoure et enveloppe le <App /> composant racine. On passe ensuite le store à l'intérieur du Provider qui, ainsi, fournira le store à l'application

    <Provider store={store}><App /></Provider>

Ensuite, créer un dossier reducers dans src car si l'application se développe, on peut se retrouver avec plus d'un reducer. On peut se retrouver à devoir créer plusieurs reducers qu'il faudra ensuite combiner en un seul afin de le passer au store. Mais ce n'est pas - et c'est tant mieux - le sujet de cet article...

A l'intérieur du dossier reducers, créer un fichier rootReducer.js (car c'est le reducer racine que l'on passe au store)


Le vocabulaire de Redux
------------------------

- Central Store: En gros, c'est une sorte de *central state* qui contient toutes les données afin que n'importe quel composant puisse y avoir accès de façon directe (ou presque...)
- Dispatch Action : Fait d'envoyer une action au reducer
- Action créators : fonctions qui générent une action, que l'on crée dans des fichiers séparés des composants, pour rendre le code plus réutilisable, et que l'on insére dans les fonctions dispatch
- Reducer: Reducer est une fonction qui intéragit avec le central store pour le mettre à jour. Il est obligatoire de passer par lui pour mettre à jour les datas contenus dans le Central Store.
- Data Flow :
- Middleware :
- Store enhancer :
- Thunks :
- Data Fetching :


Sources de l'article:
--------------------

https://redux.js.org/introduction/getting-started
https://www.newline.co/fullstack-react/articles/redux-with-mark-erikson/
https://daveceddia.com/redux-tutorial/
lien vers le repo git

Tutorial Youtube :
https://www.youtube.com/watch?v=mfNQ_RPegAE&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=33




// ninja

Central data store (magasin de données centrale ?) pour toutes les données de notre application. Chaque composant dans notre app peut accéder aux données contenues dans ce "magasin central". ça facilite donc la gestion des données (state management).


- D'abord on définit un "central store" où les données, variables seront conservées. Une sorte de *central state*
- Si un composant veut accéder aux données contenues, il "subscribes to changes to that data" et l'information lui est renvoyé sous forme de props.
- Si un composant veut changer la valeur des données contenues dans le store, il "dispatch une action". L'action en question décrit le changement que l'on souhaire effectuer (ex: add post a un item) A cette action, on peut lui passer un "payload" optionnel (payload, c'est n'importe quelle donnée que l'on souhaite passer avec l'action).
- L'action est ensuite passée en tant que "reducer". Le reducer "regarde" l'action qui lui est passée, l'identifie, et mise à jour le central state. C'est donc le reducer qui met à jour le central store. Reducer est une fonction qui intéragit avec le central store pour le mettre à jour
- Quand on crée le store, il faut obligatoirement lui passer une seule fonction reducer en paramètre afin que le store sache qu'elle fonction reducer est en mesure de le mettre à jour.
- Une action est un objet JavaScript. Il possède a type property qui décrit l'action. Il a aussi une optionnal payload of datas.
- dispatcher veut dire passer l'action au reducer
- la méthode dispatch n'ajoute rien au state
- Il faut vérifier quels types d'action l'on reoit (au sein de la fonction reducer) ; ensuite, seulement, on manipule le state en fonction de l'action reçue


- comment connecter nos compoasants au store pour intérargir zvec le state et récupérér des données 
- { connect } est une fonction que l'on invoque pour "bring back" un higher order component. (conseiller d'aller voir la vidéo du ninja sur HOC)

- mapStateToProps est une façon de dire que l'on connecte le state aux props, c'est-à-dire que désormais le central store de redux sera disponible dans le composant en faisant appel aux props. ça ne permet que de récupérer des données dans le state, pas de le mettre à jour

- Ce qui suit, pour rendre le code plus réutilisable : création d'action créators qui dissocient le dispatch de l'action. Ce sont des fonctions qui générent une action pour nous. Aide avec le code asynchrone. Peuvent être réutilisés à plusieurs endroits facilement. Très utile si l'on utilise des dispatchs dans plusieurs composants.

- à suivre, connecter redux à une database