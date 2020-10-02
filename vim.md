Commandes de base pour VIM
==========================

Les Trois modes de VIM:
-----------------

- **i** pour **entrer en mode insertion**
- **echap** permet de revenir au **mode interactif**
- On utilise les **deux points** en **mode interactif** pour entrer dans le **mode commande**

Pour se déplacer:
-----------------

- **h** permet d'aller à **gauche**
- **j** permet d'aller en **bas**
- **k** permet d'aller en **haut**
- **l** permet d'aller à **droite*

Il est possible d'utiliser des multiplicateurs. Ainsi **25j** fera descendre de 25 lignes.

Autres commandes de déplacement :
----------------------------

- **gg** permet de revenir à la **première ligne**
- **G** permet de descendre à la **dernière ligne**
- **0** permet d'aller en **début de ligne**
- **$** permet d'aller en fin de ligne
- **w** permet de se déplacer **de mot en mot**
- **30G** permet d'aller au **début de la ligne 30**

Commandes de suppression:
------------------------

- **dd** permet de **supprimer une ligne**
- **dw** permet de **supprimer un mot** (celui sur lequel se trouve le curseur)
- **x** efface **une lettre**
- Là encore, il est possible d'utiliser des multiplicateurs (5dd, 8x, etc.)
- **u** permet d'**annuler l'action précédente**

Commandes de copie:
----------------

- **yy** copie une **ligne**
- **yiw** copie un **mot**
- **p** pour **coller** le contenu copié
- **r** pour **remplacer** un contenu
- **ce** permet de **remplacer un mot à partique de l'endroit où le curser se trouve**

Commandes de recherche:
-------------------

- **/** pour faire une **recherche de caractères** dans le texte
- **:s** permet de **rechercher et remplacer**. *:s/mot-recherché/mot-remplace*. Attention, il faut se trouver sur la ligne en question
- **%** pert de trouver les parenthèses, crochets, etc., **correspondants**

Autres commandes :
----------------

- **:w** pour **enregistrer** le fichier
- **:q** pour **quitter** le fichier
- **:q!** pour quitter **sans enregistrer**
- **:wq** ou **:x** pour **enregistrer et quitter**
- **:sp** pour **splitter horizontalement** et **:vsp** pour splitter **verticalement**
- **:!**  pour lancer des **commandes externes** tout en restant dans vim. Exemple : :! ls pour voir le contenu du dossier dans lequel se trouve le fichier vim



:sp splitte horizontalemet / :vsp splitte verticalement
:! permet de lancer des commandes externes
 
