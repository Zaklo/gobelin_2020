# Sujet 04 Three JS 

Installez le projet svg-circle CRA & simpled-components. Nous allons générer un pavage à l'aide de cubes. Chaque cube aura un numéro l'identifiant dans le rendu :

```txt
    [1] [2] [3] [4]
```

Vous devez utiliser ThreeJS pour la création des cubes. Dans ce cas soit vous utilisez nativement ThreeJS, soit vous utilisez le module suivant :

```bash
npm install three react-three-fiber
```

[ressource](https://github.com/pmndrs/react-three-fiber)

Voici les fonctionnalités demandées :

1. Structurez le projet en créant les dossiers suivants :

```txt
reducers/
  circle.js
actions/
    actions-types.js
constants/
    actions.js
Styles/
  Button.js  <-- bouton de styled-components
  Cube.js  <--  Cube

App.js <-- Toutes les actions seront déclenchées dans cet unique composant.
```

2. Implémentez les actions (reducer) suivantes :

  - ADD CUBE cette action ajoutera un cube dans le rendu.
  - SHUFFLE  cette action permettra de modifier l'ordre d'affichage des cubes.
  - CHANGE_ODD cette action changera le rendu l'animation des cubes impairs.
  - STOP_ODD cette action re-initialisera le rendu de l'animation de tous les cubes.

3. Aspect graphique : utilisez des composants de styled-components pour gérez la mise en place des éléments de style dans le projet.

4. En utilisant un useEffect modifiez le cube dont le numéro est 17 uniquement.
