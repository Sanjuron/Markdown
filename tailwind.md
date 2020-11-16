**Tailwind**

C'est un framework CSS fait pour les **utility classes**

Il est de plus bas niveau que Bootstrap. Donc plus de travail pour créer le style, mais aussi plus de flexibilité. Les classes n'apportent qu'une ou deux modifications (font, color ...)

Débuter son projet par :

    npm init -yes
    npm i tailwindcss

Créer un dossier `public` et un dossier `src`.

Créer un fichier `styles.css` dans `src` et y mettre :

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

Dans package.json, modifier `"scripts"` comme ceci : 

      "build-css": "tailwindcss build src/styles.css -o public/styles.css"

Pour compiler/run :

    npm run build-css


