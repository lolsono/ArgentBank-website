# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### projet préconfigurer avec react routeur dom + structure des fichier, ainsi que une page error 404 quand aucune page trouver par défaut.

-npm install

-npm install react-router-dom

-pour voir si tout marche npm run dev

optionnel ajout des icone fontawesome
en icone indiduel import
<FontAwesomeIcon icon={faCircleUser} />

avec import comme ca :
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

(npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome)

Pour ajout le système saas

npm install sass

### Informations globales sur le fonctionnement de la connexion / déconnexion

La partie de vérification pour se connecter se fait dans SignIn :

- On vérifie les informations et ensuite on fait la requête fetch.
- On récupère ainsi le token de connexion que l'on vient stocker dans le local storage.
- Si la requête est résolue sans problème, on envoie ensuite les informations dans une requête dans IsLogged.

La partie pour afficher les informations de l'utilisateur et les récupérer se fait dans IsLogged :

- Une fois appelée, une nouvelle requête est envoyée avec le token pour récupérer les informations de l'utilisateur.
- Une fois résolue, on enregistre de façon asynchrone grâce à thunk de Redux Toolkit.

Une partie de la navbar est gérée si le token est disponible dans le local storage.

