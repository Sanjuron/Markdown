LE SQL
=====

Le SQL est **langage permettant de communiquer avec une base de données**.
Une base de données (*bdd ou db*) permet de stocker et de retrouver l'intégralité de données brutes ou d'informations.
Lorsque plusieurs objets nommés base de données sont constitués sous forme de collection, on parle de **banque de données**.

SELECT
-----

La commande `SELECT` est la commande de base de SQL. On `SELECT` un ou plusieurs champs `FROM` un tableau. Pour sélectionner plusieurs champs, il suffit de séparer les termes par des virgules `SELECT champ1, champ2 FROM table`. L'astérisque permet de séléctionner toutes les colonnes (*les champs*) d'une table.

Aide-mémoire de l'ordre des commandes au sein d'une requête `SELECT`
---------------------------------------------------------------

    SELECT *
    FROM table
    WHERE condition
    GROUP BY expression
    HAVING condition
    { UNION | INTERSECT | EXCEPT }
    ORDER BY expression
    LIMIT count
    OFFSET start

DISTINCT
-------

La commande `DISTINCT` élimine les redondances qui peuvent se trouver dans une ou plusieurs colonnes. 

    SELECT DISTINCT champ1, champ2
    FROM table

Il est toutefois préférable d'utiliser la commande `GROUP BY` lorsque possible car elle optimise les performances. 

AS
---

La commande `AS` est utilisée pour renommer **temporairement** une colonne ou une table dans une requête. On l'utise surtout lorsque le nom d'une colonne est "cryptique", lors de l'utilisation de la commande `UNION`, lors de l'utilisation d'une fonction, et lorsque plusieurs colonnes sont combinées afin de renommer la colonne qui résulte de la concaténation. L'utilisation d'`AS` sur une table se fait surtout lors de jointures.

    SELECT zepfkekff AS ze 
    FROM table

WHERE
----

La commande `WHERE` permet d'introduire une **condition** dans une requête SQL.  On ne séléctionne que les lignes d'une colonne qui respectent une certaine condition. 

    SELECT champ1, champ2
    FROM table
    WHERE condition

Exemple :

    SELECT * 
    FROM student 
    WHERE project_id="1";

Cette commande séléctionne tous les champs de la table student mais n'affiche que les lignes où les étudiants auront un id de 1 dans le champ project_id. 

On peut utiliser **les opérateurs de comparaisons classiques** (*supérieur, égal, inférieur ou égal...*) mais aussi d'autres plus spécifiques.

    <> pour non égal
    IN pour une liste de plusieurs valeurs possibles
    BETWEEN pour une valeur comprise dans un intervalle donnée (nombres et dates surtout)
    LIKE pour début, milieu ou fin d'un mot
    IS NULL pour une valeur nulle
    IS NOT NULL pour une valeur non nulle

AND & OR
-------

Il est possible d'utiliser les opérateurs `AND` et `OR` au sein d'une commande `WHERE` pour **combiner des conditions**. Ils peuvent être **combinés à l'infini**.

`AND` rend obligatoire la présence des conditions.
`OR` vérifie la présence d'une des conditions.

IN
---

Avec la commande `WHERE`, `IN` s'emploie pour **vérifier si une colonne est égale à une valeur ou une autre et ainsi de suite, sans avoir à utiliser `OR` de nombreuses fois**.

Exemple

    SELECT firstname
    FROM student
    WHERE firstname IN ('Jean', 'Laurie', 'Marc')

Cette commande renvoie toutes les lignes du champ `firstname` de la table `student` ou le `firstname` correspondra à Jean, Laurie ou Marc.

BETWEEN
------

On utilise cet opérateur dans la commande `WHERE` pour **établir un intervalle de données**. L'exemple le plus fréquent est celui visant à récupéré des données entre deux dates. 

    SELECT *
    FROM table
    WHERE champ BETWEEN "date1" AND "date2"

Cette commande renvoie toutes les données de tous les champs de la `table` qui sont situées entre la `date1` et la `date2` situées dans le `champ`

**Attention** : Tous les SGBD ne gèrent pas `BETWEEN` de la même manière. Certains excluent les bornes de l'intervalle; d'autres les incluent.

LIKE
-----

Cet opérateur permet d'effectuer des recherches sur des modèles particuliers. Il peut séléctionner le début d'un mot, la fin, ou un ou plusieurs caractères au milieu.

    LIKE '%a' : recherche toutes les chaînes de caractères qui se terminent par un a.
    LIKE 'a%' : recherche toutes les chaînes de caractères qui débutent par un a.
    LIKE '%a%' : recherche toutes les chaînes de caractères qui contiennent.
    LIKE 'pas%on' : recherche toutes les chaînes de caractères qui débutent par pas et qui se terminent par on.







