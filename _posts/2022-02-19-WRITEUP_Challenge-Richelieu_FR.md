---
layout: post
title: WRITE UP: Challenge Richelieu
date: 2022-02-19
---

# Hackeuse pour la DGSE – Challenge Richelieu

*Article initialement publié le 15 juillet 2019 sur mon ancien blog*
Afin d’étoffer ses équipes la DGSE a organisé un challenge: le Challenge Richelieu.
Pour y accéder, il fallait se rendre sur le site https://challengecybersec.fr/ :  
![Page d'Accueil du Challenge](/img/accueil-richelieu.png)  
Et c’est tout! A moi ensuite d’enquêter…  
Premier réflexe donc, ouvrir la console web et regarder le code source de la page et là j’ai découvert l’existence d’un fichier PDF:  
![Code Source de la page d'accueil](/img/code-source-richelieu.png)  
J’accède au fichier en tapant dans le navigateur à la suite de l’adresse « /Richelieu.pdf » pour ainsi obtenir ce qui semblait être un fichier PDF de 364 pages avec un texte noir sur fond blanc à la première page:  
![Première page du PDF](/img/premiere-page-pdf-richelieu.png)  
Mais comme je ne suis pas dupe j’ai fait une sélection de tout le document:  
![Sélection sur le PDF](/img/selection-pdf-richelieu.png)  
Et bien sur du texte était caché. J’ai donc sélectionné tout le texte et collé dans mon notepad préféré.

En voici un extrait:  
```
/9j/2wBDADIiJSwlHzIsKSw4NTI7S31RS0VFS5ltc1p9tZ++u7Kfr6zI4f/zyNT/16yv+v/9//// ////wfD/////////////wgALCA20CD4BAREA/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECAwQF/9oA CAEBAAAAAeFzUWUsiyzUFlgFgChLKud5lms2KluaLBNZs1neNSaRclSxqWLJ0xYVNQFyusxQlA1M 6iyhNRKQrUpCxKuNJqUEqyywmoIosUgmosZ1nSWxYlzbOYEWFlRZQssFlRUAqWGsgsspc6zZUsqW WWagXNlihKCywVZcrLZLYWLEspYssRalJqEmpTQzqCaSNXNualoEUzKQVQlSiklslFRKOUosLIai UlAChFhYohYCoVc6ksAsLLKSyzeNSakWwlsBSyClipKAlSpZpJSrJRFllKVneUpVzVkVFTUsLCFm kmoiyiWS1c0SyWrOVyssoRUsompYAVLBUqxLKlslhZUqUAJqWCWakqWWazpEtgsazrNlhYsti5qw WLBYWWxYljWRZWpWdJrnbc3UzaSqlSasiTSaJYkprNhYaixE1E05AlslRUsUlqFgssBZZZvBYsWL LNZVKjWbYJVkoubFE1JaRYllUSglJSahYm8ypVlCpYGsakVUq5E3Gue7lTNUsubFShYSoWWGoms6 ksKLnTiWSy2EUhZqShQRZrJYUiywssLLCpSW51C53m5KQqVKsWEsosVKXO8zeLLWaWNZ1JZYWVKs lJbnebnSWoE0lzpBQEhbGksAiy3G2dsyqZtzpmiuIssRSWLLYSgWWak1lYsssLLFJUWWGs2LNQJr OoItiW5WazU1BUCWoq5azSaRNSxrIsCxUbzYJrO83OmkY3Cpc6li5usXRLjZmhQICbxTNLqZ1mxL Y1eFgLJUoRbE0lgKgApc2VBUDWSzWVEqFSypbmhNSy5sqazSVrKoFiwtzZWsrKiakpZUVLKudZ1n 
```
J’ai reconnu un encodage de base64. J’ai ensuite décodé ce texte et testé un « strings » sur le fichier :  
`strings richelieu.dat`  
![Résultat de la commande](/img/strings-richelieu.png)  
J’ai ainsi obtenu une liste de fichiers et un mot de passe.

Il y a donc des fichiers inclus dans le PDF. Je vous passe mes recherches approfondies sur les structures des PDF (je vous renvoie vers les liens de fin d’article si vous souhaitez en savoir plus, je vous y invite vivement car c’est passionnant).

Il est également intéressant de noter que si l’on renomme le fichier en jpg on obtient une image:  
![Renommage du fichier en PDF](/img/richelieu-image.jpg)  

Répondons maintenant à la question que l’on est amené à se poser, en tout cas que je me suis posée longuement en ce qui me concerne.  
Comment dois-je faire pour récupérer les fichiers et les extraire? Il existe un outil très pratique pour ceci: binwalk  
![Résultat de binwalk](/img/binwalk-richelieu.png)  
Binwalk affiche tous les fichiers que l’on nous avait promis, c’est bon signe! Je vais pouvoir les extraire grâce à l’option -e

Ici mon fichier s’appelle base64.jpg, binwalk va créer un dossier `_base64.extracted` et y mettre tout ce qu’il aura pu extraire:  
![Résultat de binwalk -e](/img/binwalk-e-richelieu.png)  
Voici le contenu du dossier créé par binwalk:  
![Résultat du ls dans le dossier créé par binwalk](/img/ls-binwalk-richelieu.png)  
J’ai ensuite tenté de dézipper le fichier 6CCBC.zip (le mot de passe du zip est celui trouvé précédemment dans le base64:  
![Mot de passe](/img/mot-de-passe-richelieu.png)  
![Dézippage et récupération des fichiers](/img/dezip-richelieu.png)  
J’ai donc récupéré les fichiers et leur contenus.  
![Contenu et taille des fichiers que l’on vient d’extraire](/img/content-size-richelieu.png)  
Il est important de noter à cette étape qu’en voyant les fichiers obtenus et leur noms, il m’a semblé que j’allais devoir cracker une clé RSA… Je dispose en effet d’une clé publique « public.key » et d’un étrange fichier « prime.txt ».

Je me suis donc attaquée à la compréhension du `.bash_history`. En connaissant un peu Linux on peut savoir que le `.bash_history` contient l’historique des commandes tapées. J’ai donc fait un cat sur le fichier pour savoir ce qui a été tapé pour créer les fichiers.  
![Dézippage et récupération des fichiers](/img/cat-bash-history-richelieu.png)  
Je remarque plusieurs utilisation de la commande sed qui fonctionnent avec des expressions régulières. Une petite recherche m’a permis d’en savoir plus:  
![The sed General Syntax](/img/sed-syntax-richelieu.png)  
Je comprends que prime.txt est une clé RSA mais qu’elle a été modifiée avec la commande sed.

Voici ce qui a été effectué grâce à sed:  

```
// 7f a été remplacé par fb sur tout le document
 1342  sed -i ‘s/7f/fb/g’ prime.txt

// e1 a été remplacé par 66 sur tout le document 
 1343  sed -i ‘s/e1/66/g’ prime.txt

// f4 a été remplacé par 12 sur tout le document
 1344  sed -i ‘s/f4/12/g’ prime.txt

// 16 a été remplacé par 54 sur tout le document
 1345  sed -i ‘s/16/54/g’ prime.txt

// a4 a été remplacé par 57 sur tout le document
 1346  sed -i ‘s/a4/57/g’ prime.txt

// b5 a été remplacé par cd sur tout le document
 1347  sed -i ‘s/b5/cd/g’ prime.txt
```

Ici il faudrait donc taper les commandes à l’inverse pour retrouver le fichier d’origine.

Je vais maintenant essayer de comprendre en quoi consiste la commande : openssl rsa -noout -text -in priv.key | grep prime1 -A 18 > prime.txt

Grâce à une recherche j’apprend ceci:  
![Openssl](/img/openssl-rsa-richelieu.png)  
Cette commande permet donc juste d’afficher la clé privé.

J’ai eu quelques difficultés sur cette partie du fait de mon manque de connaissances en cryptographie.

J’ai donc fait des recherches afin de continuer car j’étais curieuse de savoir sur quoi cela allait déboucher. J’ai pu trouver le mot de passe pour décompresser suite.zip.

Ce zip contenait un fichier texte avec des informations nécessaires à la continuation du défi.

Il était possible de se connecter en ssh à un serveur dédié au challenge.  
![Suite du challenge](/img/suite-challenge-richelieu.png)  
On passait ensuite sur la partie Wargame du challenge.  
![Connexion en ssh au wargame richelieu](/img/ssh-wargame-richelieu.png)  
J’ai un peu joué avec le défi 1 mais j’ai malheureusement manqué de temps pour finir les défis. En manipulant un peu le défi 1, j’ai compris qu’il s’agit d’un buffer overflow à exploiter.

En effet voici le résultat d’un ls -al :  
![Résultat ls -al](/img/cmd-ls-al-richelieu.png)  

Je n’ai évidemment pas les droits nécessaire pour faire un cat sur « drapeau.txt ». Je sais que je peux exécuter le programme grâce aux droits que j’ai a sur prog.bin : -r-sr-sr-x

Je l’ai donc lancé et j’ai pu m’amuser un moment avec les différentes options… Fun fact: avec l’option 3 j’ai vu devant mes yeux ébahis un petit train qui passait sagement:

![Le DGSE Express](/img/express-dgse-richelieu.png)  
Le principe ici était d’exploiter le buffer overflow pour faire des commandes réservées à root. En effet, j’avais noté la présence du « s » sur le programme prog.bin. Ce « s » permet à l’exécutable d’effectuer des commandes que le propriétaire du fichier aurait pu faire. C’est grâce à ceci que j’ai pu en apprendre plus sur la fameuse attaque: « return oriented programming ». En exploitant cette attaque j’aurais pu essayer de faire faire un cat drapeau.txt par le programme.

Note importante: Grâce à Geluchat sur Twitter j’ai appris que la démarche était bien plus simple que ce que j’imaginais pour le défi 1 du wargame:  
![Comment Twitter Geluchat](/img/geluchat-richelieu.png)  

Voilà donc mon expérience sur le challenge Richelieu. J’ai beaucoup aimé parce-que j’ai appris énormément sur les pdf et j’ai pu découvrir la return oriented programming attack. Je trouve important de noter que même si l’on ne peut pas ou l’on a pas forcément le temps d’aller au bout des défis on apprend énormément même en y conscrant peu de temps.

Je vous invite donc si vous avez l’occasion à faire le prochain défi proposé par la DGSE, qui sait, vous serez peut-être embauchés!

## Pour aller plus loin

- [Portail de la DGSE](https://www.defense.gouv.fr/dgse/)
- [Un write-up brillant par @_nwodtuhs](https://inshallhack.org/richelieu_dgse_2019/)
- [La référence officielle des PDF](https://www.adobe.com/devnet/pdf/pdf_reference.html)
- [Explications sur la structure d’un PDF](https://resources.infosecinstitute.com/pdf-file-format-basic-structure/#gref)
- [Les présentations de corkami sur les PDF](https://github.com/corkami/docs/blob/master/talks.md#portable-document-format)
- [Understanding linux file permission](https://www.linux.com/learn/understanding-linux-file-permissions)
- [Module binwalk de Kali Linux](https://tools.kali.org/forensics/binwalk)
- [La return oriented programming attack sur Wikipedia](https://web.archive.org/web/20210411045400/https://fr.wikipedia.org/wiki/Return-oriented_programming)
- [La return oriented programming - Geluchat](https://www.dailysecurity.fr/return_oriented_programming/)
- [Windows Exploit 64 bits ROP - Geluchat](https://www.dailysecurity.fr/windows_exploit_64_bits_rop/)
