# ✅ Checklist de nettoyage avant hébergement

## 🗑️ Fichiers à supprimer

### Fichiers de développement/debug
- [ ] `src/components/debug/DebugOpinions.tsx` - Composant de debug temporaire
- [ ] `src/components/contactcomponents/PublicOpinionsDisplay.tsx` - Doublon non utilisé

### Fichiers de documentation (optionnel)
- [ ] `CORRECTIONS_EFFECTUEES.md` - Documentation des corrections
- [ ] `MIGRATION_PUBLIC_OPINION.md` - Documentation de migration
- [ ] `CLEANUP_CHECKLIST.md` - Ce fichier (après nettoyage)

**À garder :**
- ✅ `SANITY_OPINIONS_GUIDE.md` - Guide d'utilisation important
- ✅ `README.md` - Documentation du projet

## 🔍 Vérifications importantes

### 1. Variables d'environnement
- [x] `.env` contient `VITE_SANITY_WRITE_TOKEN`
- [ ] `.env` est dans `.gitignore` (ne pas commit le token !)
- [x] `.env.example` existe pour la documentation

### 2. Fichiers Sanity
- [x] `studio-sdair_website/` - Projet Sanity Studio séparé
- [x] Schémas : `publicOpinion.ts`, `userOpinion.ts`, `contact.ts`

### 3. Configuration de build
- [ ] Vérifier `package.json` - scripts de build
- [ ] Tester le build : `npm run build`
- [ ] Vérifier qu'il n'y a pas d'erreurs TypeScript

### 4. Optimisations
- [x] Rafraîchissement automatique désactivé (économie de requêtes)
- [x] Images optimisées
- [x] Code mort supprimé

## 📦 Commandes avant hébergement

### 1. Nettoyer les node_modules
```bash
# Optionnel : réinstaller proprement
rm -rf node_modules package-lock.json
npm install
```

### 2. Tester le build
```bash
npm run build
```

### 3. Tester en local
```bash
npm run preview
```

### 4. Vérifier les erreurs
```bash
npm run lint
```

## 🚀 Hébergement

### Frontend (React)
**Plateformes recommandées :**
- Vercel (recommandé)
- Netlify
- GitHub Pages

**Variables d'environnement à configurer :**
```
VITE_SANITY_WRITE_TOKEN=votre_token_ici
```

### Backend (Sanity Studio)
**Déployer Sanity Studio :**
```bash
cd studio-sdair_website
npm run deploy
```

Accessible sur : `https://sdair-website.sanity.studio`

## ✅ Checklist finale

Avant de déployer :
- [ ] Tous les fichiers inutiles supprimés
- [ ] Build réussi sans erreurs
- [ ] Variables d'environnement configurées
- [ ] Sanity Studio déployé
- [ ] Token Sanity configuré sur la plateforme d'hébergement
- [ ] Test du site en production

## 🔐 Sécurité

**Important :**
- ❌ Ne jamais commit le fichier `.env`
- ❌ Ne jamais exposer le token Sanity publiquement
- ✅ Utiliser les variables d'environnement de la plateforme
- ✅ Vérifier que `.gitignore` contient `.env`

## 📊 Structure finale du projet

```
SDair/
├── src/
│   ├── components/
│   │   ├── HomeComponent/
│   │   │   └── OpinionsSection.tsx ✅
│   │   ├── contactcomponents/
│   │   │   ├── OpinionsDisplay.tsx ✅
│   │   │   ├── OpinionForm.tsx ✅
│   │   │   └── SlideSwiper.tsx ✅
│   │   └── navbar/
│   ├── pages/
│   │   ├── LandingPage.tsx ✅
│   │   ├── ContactPage.tsx ✅
│   │   └── OpinionsPage.tsx ✅
│   ├── sanity/
│   │   ├── sanityClient.ts ✅
│   │   ├── opinionsApi.ts ✅
│   │   └── index.ts ✅
│   └── main.tsx ✅
├── studio-sdair_website/ (Sanity Studio)
├── .env (ne pas commit !)
├── .env.example ✅
└── package.json ✅
```

## 🎯 Résumé

**Le projet est prêt pour l'hébergement après :**
1. Suppression des fichiers de debug
2. Test du build
3. Configuration des variables d'environnement
4. Déploiement de Sanity Studio

**Système d'avis fonctionnel :**
- ✅ Formulaire de soumission
- ✅ Stockage dans `publicOpinion`
- ✅ Affichage automatique sur 3 pages
- ✅ Pas de rafraîchissement automatique
- ✅ Espacement optimisé
