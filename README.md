**Organisation projet :**

### Partie I : Conception de l’application
Dossier technique de l’application permettant de répondre aux spécifications 
énoncées ci-dessous. Ce dossier comportera : 
  - la liste des composants de l’application Angular avec un descriptif pour chaque
composant/service
  - des schémas pour chaque page de l’application 
  -  la liste des routes de l’application Node avec
le but de chaque route.

Taille indicative du dossier : **4 pages**

### Partie II : Développement d’une maquette de l’application
Maquette de la solution. Elle devra donner une image fidèle de la solution
réelle ensuite déployée.

## CONSIGNES : 

**Version 1 – Build my playlist**
Le système fonctionne sur la base de descriptions de morceaux de musiques qui peuvent être triés pour former une
playlist. On définit  :
  -  morceau de musique : objet comprenant titre du morceau & nom de l’artiste.
  -  playlist :  objet comprenant  nom de playlist,  nom du créateur,  entier représentant le
    nbr de « clics »,  liste triée de morceaux, une  de contributeurs (« nom » du contribueur), une
    chaine de caractères symbolisant le style de musique (classique, pop…).
    
a) Chaque utilisateur doit pouvoir créer une playlist et proposer des titres. Les listes créées ne
  sont pas modifiables.
  
b) La liste des playlists apparait en page d’accueil de l’application et on doit pouvoir cliquer dessus pour voir
  son contenu. Le fait qu’un utilisateur clique sur une liste fait augmenter son « nombre de clics ».
  A ce stade, les playlists ne sont pas modifiables.
  Note : Un seul style de musique est autorisé pour une playlist donnée.
  
  **Version 2 – Share my playlist**
Faciliter la recherche et le tri des playlists pour les visiteurs de l’application.

a) Pouvoir trier les playlists par ordre :
  a. Alphabétique (+ inverse) du nom de playlist
  b. Nombre (+ inverse) de clics
  c. Alphabétique (+ inverse) du style
  
b) On doit également proposer sur la page un filtre de recherche full-text sur :
  a. nom de la playlist
  b. style de musique
  
  **Version 3 – Edit my Playlist**
Pouvoir jouter des fonctions contributives pour l’édition de playlists.

Chaque utilisateur doit pouvoir éditer une playlist de son choix,2 opérations  permises :
  a) Supprimer playlist
  b) Ajout morceau(x) à la playlist
Note : Lors d’opérations de modifications, le nom du contributeur doit être ajouté à la liste de contributeurs de la
playlist.

**Version 4 – Last One**
Faciliter  partage de playlists en restructurant la page d’accueil de l’application.

a) Avoir une page « partielle » par utilisateur. Cette page contiendra la liste des playlists
créées par l’utilisateur

b) Un second type de page sera axé sur les styles et contiendra la liste des playlists du style choisi.

La page « principale » devra être restructurée pour rendre accessibles les pages précédentes via des
modules de recherches par créateur, nom de playlist ou style de musique. Le fait de cliquer sur un des résultats
permettra l’accès aux pages décrites ci-dessus (exemple, en cliquant sur un créateur on va à la page « partielle » de
ce créateur).
