# Sujet 03 Liste de Dragons Mise en place

Nous partirons d'un squelette d'application (create-react-app CRA) qui permettra d'ajouter/supprimer des dragons d'une liste définie.

Organisation des dossiers pour Redux. Dans le dossier constantes le fichier actions.js contiendra l'ensemble des constantes d'action. Dans le dossier actions le fichier actions-types contiendra l'ensemble des types d'actions passées aux fonctions du dispatcher. Et le dossier reducers contiendra l'ensemble des reducers, ici vous n'avez qu'une seule reducer pour cet exercice.

```txt
reducers/
    dragon.js
constants/
    actions.js.  <--- les constantes export const ADD_DRAGON = "ADD_DRAGON" ; ...
actions/
    actions-types.js. <--- factoriser les actions du dispatcher dans une fonction, par add_dragon pour les écrire dans le code : dispatch( add_dragon( dragon ) )
```

Fichier constantes actions.js. On les utilise dans actions-types et dans le reducer.

```js
export const ADD_DRAGON = 'ADD_DRAGON';
// TODO ...
```
Fichier actions-types.js, factoriser le code dans le dispatch
```js
import { ADD_DRAGON } from '../constants/actions';
// payload correspond à ce que vous allez passer comme valeur à votre action { ... name : "Super dragon", force : 10 }
export const addDragon = payload => {
    return {
        type: ADD_DRAON, payload
    }
};
```

Notez que lorsque vous allez accéder aux valeurs dans vos action dans le reducer avec payload :
```js
const { name, force } = action.payload;
```

Utilisez ces constantes dans ce sujet.

### Reducer

Dans le fichier dragons.js
**Le reducer contient la logique qui s'appliquera sur les données du store, chaque modification des states conduira à la création d'un nouvel état.**

Voici le code du reducer que nous allons mettre en place :
```js
import { ADD_DRAGON } from '../constants/actions';
// initialisation des states : SOURCE DE VERITE
let stateInit = {
    dragons: [
        "Apalala",
        "Balaur",
        "Bolla"],
    count: 0
}
let reducerDragon = (state = stateInit, action = {}) => {
    switch (action.type) {
        case ADD_DRAGON:
            // TODO
            return { ...state, elems }
        default:
            return state;
    }
    return state
}
export default reducerDragon;
```
Affichez la liste des dragons dans la colonne de droite.


### Partie 1 ajout d'un dragon

Rendez fonctionnel l'ajout du dragon. Puis utilisez Redux pour mettre à jour la liste des dragons dans la colonne de droite.
Faites en sorte que l'incrémentation du nombre de dragons se fasse également dans une barre de navigation (voyez l'image précédente).
Gérez les erreurs lors de l'insertion d'un dragon (champ vide, insertion d'un même dragon interdit).
Vous afficherez dans la barre de navigation le nombre de dragon(s) dans le store.

Wireframe

```txt
Add Dragon : [ ]   *   Typhon
                   *   Vipor
[Add]              *

```

### Partie 2 suppression d'un dragon

Vous allez maintenant ajouter la fonctionnalité de suppression d'un dragon. Faites attention à bien nommer vos actions (convention de nommage).

Wireframe

```txt
Add Dragon : [ ]   *   Typhon [Delete]
                   *   Vipor  [Delete]
[Add]              *

```

### Partie 3 inversion de la liste des dragons

Ajoutez un bouton dans l'application qui permet d'inverser l'ordre d'affichage de la liste des dragons. Placez ce bouton en-dessous du bouton de l'ajout des dragons.

Wireframe

```txt

[ Reverse Order ]

Add Dragon : [ ]   *   Vipor  [Delete]
                   *   Typhon [Delete]
[Add]              *

```