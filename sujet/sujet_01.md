# Sujet 01

Créez le projet num-characters à l'aide de CRA. Puis vous devez mettre les dépendances suivantes dans le projets :

- styled-components pour la gestion des styles CSS-IN-JS.

- react-router-dom pour la gestion du routing dans l'application.

- redux & react-redux ou useReducer pour gérer le store de l'application.

Vous devez respecter la structuration des dossiers & fichiers vue en cours.

Vous devez gérer le store de votre application à l'aide de redux ou d'un useReducer au choix.

L'application se présentera sur deux pages, vous devez disposer un menu principal tout en haut de vos pages :

[Message] [Rendu]

On ne vous impose pas une charte graphique particulière mais, vous devez soigner cette partie et surtout vous devez impérativement coder vos CSS avec styled-components.

Une fois votre projet terminé vous devez également le builder afin de vérifier que le code que vous avez écris est valide :

```bash
npm run build
```

Une fois le dossier build créé, à l'aide de la commande ci-dessus, lancer le "Go Live" de vscode pour vérifier le bon fonctionnement de l'application.

L'application permet de saisir un texte, de définir un style pour le texte saisi. Et affiche ce texte avec son rendu sur une page spécifique. Chaque texte saisi pourra être supprimé.

## Page "Message"

Vous créez un formulaire permettant de saisir un texte, ajoutez sous le texte, lors de la saisie le nombre de caractère(s) de chaque mot (voyez le wireframe ci-après).

Un bouton select permettra de sélectionner un type de rendu pour le texte : palevioletred (choix par défaut) et tomato. Un autre champ permettra de sélectionner la taille du texte (nombre compris entre 15px et 20px).

Une fois que l'on a validé, le texte est enregistré dans le store de Redux ou dans votre useReducer. La page Rendu permettra de visualiser chaque texte avec son rendu spécifique.

```txt
saisir le texte : [ Bonjour tout le monde ]
nombre de lettres : 7 4 2 5     

Selectionnez un rendu : [ palevioletred ]

taille du texte : [15]

[ valider ]
```

## Page Rendu 

La page de rendu affichera l'ensemble des rendus. Un bouton delete associé à chaque texte permettra de supprimer le rendu :

Texte 1 :

```txt
    [ Bonjour tout le monde ] 

    [Delete]
```
Texte 2 :

```txt
    [ Un autre texte avec un autre rendu ] 

    [Delete]
```

## Option facultative

Ajoutez un bouton permettant de transformer le texte en SVG.