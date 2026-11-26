# Éditeur d'affiche de matchs

Application web personnelle (un seul fichier `index.html`, sans installation) pour créer des affiches
de programme de matchs : logos, couleurs des maillots, fond personnalisable avec flou, zones de
contacts (WhatsApp, appel) et code promo, export en PNG.

## Mettre en ligne avec GitHub Pages

1. Créez un dépôt sur GitHub (par exemple `affiche-matchs`).
2. Envoyez-y `index.html` (bouton **Add file > Upload files**).
3. Allez dans **Settings > Pages**, choisissez **Deploy from a branch**, branche `main`, dossier `/ (root)`.
4. Après une minute, votre application est disponible à l'adresse `https://VOTRE-NOM.github.io/affiche-matchs/`.

Vous pouvez aussi simplement double-cliquer sur `index.html` pour l'utiliser en local.

## Utilisation rapide

- **Textes, logo, PNG du nom** : section « Textes ». Le logo, le PNG du nom et le texte du nom sont trois éléments
  indépendants (taille, position, décalages, glisser-déposer sur l'affiche).
- **Matchs** : collez une liste (une ligne par match) :
  `Équipe A - Équipe B | Jour | Heure | Compétition | Chaîne`.
  Zone vide + « Importer la liste » : charge la liste de la semaine (voir ci-dessous).
- **Logos des clubs** : importez-les en lot, le nom du fichier doit être le nom du club (`arsenal.png`).
  Ils sont mémorisés dans votre navigateur.
- **Enregistrer** : bouton « Enregistrer » (avec un nom d'affiche). Vos affiches enregistrées apparaissent sous l'aperçu, avec « Ouvrir » et « Supprimer », et restent disponibles à la réouverture.
- **Filigrane** : section « Filigrane » (texte, 5 styles, opacité, taille, rotation, couleur).
- **Export** : bouton « Télécharger en PNG ». Le bouton « Sauvegarder » crée un fichier de réglages à conserver.

## Mettre à jour la liste des matchs de la semaine

Dans `index.html`, cherchez la ligne qui commence par `const WEEK=` et remplacez le contenu :

```js
const WEEK={upd:'25/11/2026',date:'Mercredi 25 – Dimanche 29 novembre 2026',m:[
  ['Équipe A','Équipe B','Mer · 25/11','20:00','LDC'],
  ...
]};
```

Chaque match : `[domicile, extérieur, 'Jour · jj/mm', 'hh:mm', 'code compétition']`.

## Notes

- Les polices (Google Fonts) et l'export PNG (html2canvas) sont chargés depuis internet : une connexion est nécessaire.
- Les données (réglages, logos) restent dans votre navigateur (localStorage), elles ne sont envoyées nulle part.
- Les logos de clubs et de ligues sont des marques déposées : vérifiez vos droits d'utilisation avant de publier.
