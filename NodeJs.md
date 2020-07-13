Node Js
======

 Du JS côté serveur.

 **V8 engine est un moteur JavaScript** codé en C++ qui compile code Js en du code machine pour qu'il puisse être compris par les navigateurs.

 Node.js est aussi codé en C++. Il contient V8 engine et peut donc compiler le JS pour le rendre accessible côté serveur. Node permet aussi d'**ajouter des fonctionnalité en JavaScript** comme la lecture et l'écriture de fichiers sur l'ordinateur, la **connection à une Base de Données** ou encore d'**agir en tant que serveur** pour du contenu.

 En JS backend, il n'est pas **possible d'intéragir avec le DOM**.

 Node permet de **gérer des requêtes**. Il peut remplacer PHP. Il rend possible de partager du code front et back.

Global Object
------------

En Node, l'objet global n'est pas `window` mais `global`

Plusieurs méthodes sont accessibles, comme `setTimeout`, `setInterval`, `__dirname` (chemin absolu du dossier) `__filename` (avec le fichier)

Modules & Require
--------------

File System
----------

Un Buffer est un paquet de données envoyées quand on lit readfile. Il faut ajouter une méthode toString() si l'on pouvoir lire ce qui est dans le fichier


Streams & Buffers
---------

Streams commence à utiliser une data avant qu'elle ne soit complètement chargé (comme du streaming)

readStream()
writeStream()


Clients & Servers
--------------

Pour se connecter au serveur d'un hôte, il faut connaitre son adresse ip.

Quand on tape quelque chose dans le navigateur, c'est une **requête GET**.

Quand on envoit quelque chose au serveur, c'est une **requête POST**.

Dans node, on crée manuellement le serveur qui écoute les requêtes du serveur et ce qu'il faut envoyer au navigateur.

    const http = require('http') // pour requerir un serveur
    http.createServer((req, res) => { }) pour créer le serveur
    server.listen(3000, 'localhost', () => {}) pour écouter un serveur au port 3000

Localhost est un nom de domaine qui pointe vers notre ordinateur. Il écoute les requêtes venant de notre ordinateur. Un numéro de port est comme une porte vers internet. Chaque logiciel connecté vers internet en utilise un qui lui est propre pour éviter que les informations ne se mélangent.

    syntaxe : localhost:3000




