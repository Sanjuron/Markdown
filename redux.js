// récupère un store à partir de la bibliothèque Redux
const { createStore} = Redux;

//crée le store
const store = createStore();


//création d'un state
const initState = {
    movies: [],
    posts: []
}

//crée la fonction reducer avec deux paramètres (state et action)
// state est tout simplement le state du store auquel on lui associe par défaut le state que l'on a créé auparavant
function myReducer(state = initState, action){
    console.log(action, state)
    //vérification si le type de l'action est égal à Add_movie. 
    if (action.type == 'ADD_MOVIE') {
        // ce return devient le nouveau state
        return {
            //spread operator qui récupère l'entiéreté du state pour éviter d'avoir à la recopier dans sa totalité
            ...state,
            // création d'un nouveau tableau grâce au spread operator pour ne pas altérer le state
            // ajout de l'action movie
            movies: [...state.movies, action.movie]
        }
    }

    if (action.type == 'ADD_POST') {
        // ce return devient le nouveau state
        return {
            //spread operator qui récupère l'entiéreté du state pour éviter d'avoir à la recopier dans sa totalité
            ...state,
            // création d'un nouveau tableau grâce au spread operator pour ne pas altérer le state
            // ajout de l'action movie
            posts: [...state.posts, action.post]
        }
    }

}

//associe une fonction reducer à un store
const store = createStore(myReducer);

//fonction susbrice prend une fonction en paramère qui "fire" à chaque fois que le state est changé
store.subscribe(() => {
    console.log("state mis à jour");
    //fonction qui récupère le state du store
    console.log(store.getState())

})


//création d'une action. Objet Js avec une propriété type qui décrit l'action. Les majuscules sont une convention
const movieAction =  { type: 'ADD_MOVIE', movie: 'Jaws'};

//dispatch de l'action au store en utilisant une méthode dispatch qui envoie l'action au reducer
store.dispatch(movieAction)


// écriture simplifiée des deux commandes précédentes
store.dispatch({type: 'ADD_MOVIE', movie: 'Jaws'});
store.dispatch({type: 'ADD_MOVIE', movie: 'BarbeRousse'});
store.dispatch({type: 'ADD_POST', post: 'Les Diaboliques'});