# Pierre & Paysage — Site vitrine

**Client :** Pierre & Paysage (paysagiste)
**Lieu :** 20 Route de la Chapelle, 71220 Saint-Bonnet-de-Joux (Saône-et-Loire)
**Type :** Site vitrine statique multi-pages (HTML / CSS / JS)
**Date :** Juin 2026

## Contexte

Paysagiste à Saint-Bonnet-de-Joux (71). Site multi-pages créé sur Claude Design,
remplaçant la maquette one-page initiale déployée sur Netlify.

## Structure

- `index.html` — accueil
- `apropos.html` — présentation
- `services.html` — prestations
- `realisations.html` — galerie de réalisations
- `contact.html` — coordonnées et formulaire
- `style.css` — design system (polices Playfair Display + DM Sans)
- `script.js` — interactions
- `assets/` — logo + photos (logo.jpg, photo1 à photo4)

## Déploiement (EN LIGNE)

Site 100 % statique, aucun back-end requis.

- **Site en production :** https://pierrepaysage.netlify.app
- **Code source (GitHub) :** https://github.com/thomas-creator192/pierre-paysage (branche `main`)
- **Hébergement :** Netlify, déploiement continu depuis GitHub.
  Tout push sur le dépôt redéploie automatiquement le site.

Circuit de mise à jour : modifier les fichiers du livrable > push sur GitHub >
Netlify redéploie tout seul en ~30 s.

## À faire avant publication

- Remplacer le téléphone placeholder `06 00 00 00 00` par le vrai numéro
- Ajouter / vérifier l'email de contact
- Mettre à jour le copyright (© 2025 → 2026)
- Validation du contenu par le client
- Brancher le formulaire de contact (Netlify Forms)
- Remplacer les photos par de vraies réalisations si nécessaire
