**React Now Redux**
==================

**Qu'est-ce que Redux?**

Présentation de Redux
--------------------

Redux n'est qu'un outil. Bien qu'il soit principalement utilisé avec React, il ne lui pas exclusif et Redux peut très bien s'utiliser avec Angular, Preact (d'autres frameworks JS), ou même, tout banalement, avec du simple JavaScript. Le principal intérêt de Redux réside dans sa gestion des états (*states*). Il vise à faciliter la gestion des données lorsque l'application devient si complexe qu'il en devient difficile de savoir gérer ses *states* et les données qu'ils contiennent.

Comme Dan Abramov - un des fondateurs de Redux- le dit : "N'utilisez pas Redux tant que vous n'avez pas de problèmes avec le *vanilla React*". C'est-à-dire le React de base, sans ajout ni améliorations. Si vous voulez plus d'informations à ce sujet, je vous conseille la lecture de cet article : https://www.newline.co/fullstack-react/articles/redux-with-mark-erikson/ (en anglais).

Imaginons que vous developpiez une application avec beaucoup de composants, et encore plus de sous-composants, à tel point que celle-ci finisse plus par ressemble à un chêne centenaire qu'un minuscule bonzaï. Il reste possible de passer des données d'un composant à l'autre, par un système de plus en plus élaboré de *props*, mais pour rester poli, ça devient vite fastidieux. C'est là qu'intervient Redux.

Comment installer Redux ?
-------------------------

Deux bibliothèques sont à installer au sein de votre projet react :
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


