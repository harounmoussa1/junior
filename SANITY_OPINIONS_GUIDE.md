# Guide d'utilisation - Système d'avis clients avec Sanity

## 📋 Vue d'ensemble

Ce système permet aux clients de soumettre leurs avis via le site web. Les avis sont stockés dans Sanity CMS et doivent être approuvés par un administrateur avant d'être affichés publiquement.

## 🏗️ Architecture

### Backend (Sanity)
- **Schema `userOpinion`** : Stocke tous les avis soumis
  - `name` : Nom du client (requis)
  - `email` : Email du client (requis)
  - `avis` : Texte de l'avis (10-500 caractères)
  - `approved` : Boolean pour l'approbation (false par défaut)
  - `createdAt` : Date de création

### Frontend (React)
- **`opinionsApi.ts`** : Fonctions pour interagir avec Sanity
- **`OpinionForm.tsx`** : Formulaire de soumission d'avis
- **`OpinionsDisplay.tsx`** : Affichage des avis approuvés
- **`OpinionsPage.tsx`** : Page complète combinant formulaire et affichage

## 🚀 Configuration

### 1. Variables d'environnement

Créez un fichier `.env` à la racine du projet avec :

```env
VITE_SANITY_WRITE_TOKEN=votre_token_sanity
```

Pour obtenir le token :
1. Allez sur [sanity.io/manage](https://sanity.io/manage)
2. Sélectionnez votre projet (ID: `0t5kzyxt`)
3. API → Tokens → Add API token
4. Donnez les permissions "Editor" ou "Write"

### 2. Déployer les changements Sanity

Dans le dossier `studio-sdair_website` :

```bash
npm install
npm run dev
```

Cela lancera Sanity Studio localement sur http://localhost:3333

Pour déployer en production :
```bash
npm run deploy
```

## 📱 Utilisation

### Pour les visiteurs du site

1. **Soumettre un avis** :
   - Accédez à la page Contact ou Avis
   - Remplissez le formulaire avec nom, email et avis
   - Cliquez sur "Envoyer mon avis"
   - Un message de confirmation apparaîtra

2. **Voir les avis** :
   - Les avis approuvés s'affichent automatiquement
   - Carrousel avec navigation par slides

### Pour les administrateurs

1. **Accéder à Sanity Studio** :
   - En local : http://localhost:3333
   - En production : https://sdair-website.sanity.studio

2. **Approuver un avis** :
   - Cliquez sur "User Opinion" dans le menu
   - Les avis en attente sont marqués avec ⏳
   - Ouvrez un avis
   - Cochez la case "Approuvé"
   - Cliquez sur "Publish"
   - L'avis apparaîtra immédiatement sur le site (✅)

3. **Modifier/Supprimer un avis** :
   - Ouvrez l'avis dans Sanity Studio
   - Modifiez le contenu si nécessaire
   - Ou cliquez sur "Delete" pour le supprimer

## 🔧 Intégration dans vos pages

### Afficher les avis sur n'importe quelle page :

```tsx
import OpinionsDisplay from "../components/contactcomponents/OpinionsDisplay";

// Dans votre composant
<OpinionsDisplay />
```

### Ajouter le formulaire de soumission :

```tsx
import OpinionForm from "../components/contactcomponents/OpinionForm";

// Dans votre composant
<OpinionForm />
```

### Page complète (formulaire + affichage) :

```tsx
import OpinionsPage from "../pages/OpinionsPage";

// Dans votre router
<Route path="/avis" element={<OpinionsPage />} />
```

## 🎨 Personnalisation

### Modifier les couleurs du gradient :

Dans `OpinionForm.tsx` et `OpinionsDisplay.tsx`, changez :
```tsx
bgGradient="linear(to-r, #4CABE1, #004F87)"
```

### Modifier le nombre de caractères max :

Dans `userOpinion.ts` :
```typescript
validation: (Rule: any) => Rule.required().min(10).max(500)
```

### Modifier le nombre de slides affichées :

Dans `OpinionsDisplay.tsx` :
```tsx
<SlideSwiper slides={opinions} showMultiple={true} />
// showMultiple={false} pour 1 slide à la fois
// showMultiple={true} pour 3 slides sur desktop
```

## 🔍 Requêtes Sanity utiles

### Récupérer tous les avis approuvés :
```groq
*[_type == "userOpinion" && approved == true] | order(createdAt desc)
```

### Compter les avis en attente :
```groq
count(*[_type == "userOpinion" && approved == false])
```

### Récupérer les avis récents (7 derniers jours) :
```groq
*[_type == "userOpinion" && createdAt > now() - 60*60*24*7]
```

## 🐛 Dépannage

### Les avis ne s'affichent pas :
1. Vérifiez que des avis sont approuvés dans Sanity Studio
2. Vérifiez la console du navigateur pour les erreurs
3. Vérifiez que le token Sanity est configuré

### Erreur lors de la soumission :
1. Vérifiez le token VITE_SANITY_WRITE_TOKEN
2. Vérifiez que le token a les permissions d'écriture
3. Vérifiez la connexion internet

### Les changements Sanity ne se reflètent pas :
1. Attendez quelques secondes (cache CDN)
2. Rafraîchissez la page
3. Vérifiez que `useCdn: true` dans sanityClient.ts

## 📊 Statistiques

Pour voir les statistiques des avis, vous pouvez créer un dashboard dans Sanity Studio ou utiliser la fonction :

```typescript
import { getPendingOpinionsCount } from './sanity/opinionsApi';

const count = await getPendingOpinionsCount();
console.log(`${count} avis en attente`);
```

## 🔐 Sécurité

- Les emails ne sont jamais affichés publiquement
- Seuls les avis approuvés sont visibles
- Le token Sanity doit rester privé (fichier .env)
- Validation côté client ET serveur (Sanity)

## 📝 Notes importantes

- Les avis sont stockés de manière permanente dans Sanity
- L'approbation est manuelle pour garantir la qualité
- Le système utilise le CDN Sanity pour de meilleures performances
- Les avis sont triés du plus récent au plus ancien
