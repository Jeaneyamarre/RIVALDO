# RIVALDO

![](https://static.blog4ever.com/2014/12/790899/artfichier_790899_4395796_201412222413205.jpg | width=50)



**Organisation projet :**

## Partie I : Conception de l’application
Dossier technique de l’application permettant de répondre aux spécifications 
énoncées ci-dessous. Ce dossier comportera : 
  - la liste des composants de l’application Angular avec un descriptif pour chaque
composant/service
  - des schémas pour chaque page de l’application 
  -  la liste des routes de l’application Node avec
le but de chaque route.

Taille indicative du dossier : **4 pages**

## Partie II : Développement d’une maquette de l’application
Maquette de la solution. Elle devra donner une image fidèle de la solution
réelle ensuite déployée.

Version 1 – Build my playlist
Le système fonctionne sur la base de descriptions de morceaux de musiques qui peuvent être triés pour former une
playlist. On définira à ce stade que :
- Un morceau de musique est un objet comprenant le titre du morceau ainsi que le nom de l’artiste.
- Une playlist est un objet comprenant un nom de playlist, le nom du créateur, un entier représentant le
nombre de « clics », une liste triée de morceaux, une liste de contributeurs (« nom » du contribueur), une
chaine de caractères symbolisant le style de musique (classique, pop…).
a) Chaque utilisateur de l’application doit pouvoir créer une playlist et proposer des titres. Les listes créées ne
sont pas modifiables.
b) La liste des playlists apparait en page d’accueil de l’application et on doit pouvoir cliquer dessus pour voir
son contenu. Le fait qu’un utilisateur clique sur une liste fait augmenter son « nombre de clics ».
A ce stade, les playlists ne sont pas modifiables.
Note : Un seul style de musique est autorisé pour une playlist donnée.
Version 2 – Share my playlist
On souhaite maintenant faciliter la recherche et le tri des playlists pour les visiteurs de l’application.
a) On doit maintenant pouvoir trier les playlists par ordre :
a. Alphabétique (+ inverse) du nom de playlist
b. Nombre (+ inverse) de clics
c. Alphabétique (+ inverse) du style
b) On doit également proposer sur la page un filtre de recherche full-text sur :
a. Le nom de la playlist
b. Le style de musique
Version 3 – Edit my Playlist
On souhaite maintenant ajouter des fonctions contributives pour l’édition de playlists Chaque utilisateur doit
maintenant pouvoir éditer une playlist de son choix. 2 opérations sont permises :
a) Retrait total de la playlist
b) Ajout de morceau(x) à la playlist
Note : Lors d’opérations de modifications, le nom du contributeur doit être ajouté à la liste de contributeurs de la
playlist.
Version 4 – Last One
On souhaite maintenant faciliter le partage de playlists en restructurant la plage d’accueil de l’application.
a) On doit pouvoir avoir ainsi une page « partielle » par utilisateur. Cette page contiendra la liste des playlists
créées par l’utilisateur
b) Un second type de page sera axé sur les styles et contiendra la liste des playlists du style choisi.
De son côté la page « principale », devra être restructurée pour rendre accessibles les pages précédentes via des
modules de recherches par créateur, nom de playlist ou style de musique. Le fait de cliquer sur un des résultats
permettra l’accès aux pages décrites ci-dessus (exemple, en cliquant sur un créateur on va à la page « partielle » de
ce créateur).
