# EU – Éditeur d’affiches de matchs

Cette version prépare l’éditeur pour une installation PWA et une application Windows.
Elle reprend le fichier HTML de travail fourni précédemment et conserve les fonctions neutres :
création d’affiches, logos, filigrane, matchs, sauvegarde locale et export PNG.

## 1. Publier la PWA sur GitHub Pages

1. Décompressez l’archive.
2. Ouvrez le dossier `eu-editeur-installable`.
3. Envoyez **tout le contenu** du dossier à la racine du dépôt GitHub `affiche-matchs`
   (remplacez l’ancien `index.html`, ajoutez les nouveaux fichiers et le dossier `icons`).
4. Dans GitHub, ouvrez **Settings → Pages** et vérifiez que la publication utilise `main` et `/ (root)`.
5. Ouvrez votre site avec Chrome ou Edge, laissez-le charger une première fois avec Internet.
6. Dans le menu du navigateur, choisissez **Installer l’application** ou **Ajouter à l’écran d’accueil**.

Le service worker met en cache les fichiers de l’application et la bibliothèque d’export PNG.
L’éditeur peut ensuite être rouvert hors connexion sur le même appareil et dans le même navigateur.

## 2. Préparer l’installateur Windows (.exe)

Cette étape nécessite un ordinateur Windows et Node.js installé.

1. Ouvrez le dossier du projet dans l’Explorateur Windows.
2. Cliquez dans la barre d’adresse du dossier, tapez `cmd`, puis Entrée.
3. Dans la fenêtre qui s’ouvre, exécutez :

   ```bash
   npm install
   npm run dist
   ```

4. Attendez la fin de la compilation.
5. L’installateur sera créé dans le dossier `dist`, avec un nom du type
   `EU Editeur d’affiches-Setup-1.0.0.exe`.

Pour tester sans créer l’installateur, utilisez `npm start`.

## Fonctionnement hors connexion

- Au premier lancement, connectez l’appareil à Internet et ouvrez l’application une fois.
  Cela permet au navigateur de mettre en cache la bibliothèque nécessaire à l’export PNG.
- Après cette première mise en cache, l’application et ses fonctions principales restent accessibles hors connexion.
- Les réglages et logos sont enregistrés localement dans le navigateur ou dans l’application Windows.
- Les données locales ne sont pas synchronisées automatiquement entre le téléphone, le navigateur et Windows.
  Utilisez le bouton de sauvegarde JSON de l’application pour transférer une copie d’un appareil à l’autre.

## Important

- Cette archive prépare les fichiers du projet, mais ne publie rien sur GitHub et ne fabrique pas
  directement le fichier `.exe` depuis ChatGPT : la compilation Windows doit être lancée sur un PC Windows.
- Conservez une copie de vos fichiers actuels avant de remplacer ceux du dépôt.
