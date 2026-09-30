# Crédits des films Aura (version 3, 30/09/2026)

Un film par produit, en français et en anglais, 60 à 75 s, une seule histoire :
1. le problème réel (images terrain), 2. ce qu'Aura voit (captures réelles), 3. la décision (Décider, Bora), 4. le résultat.

- Supply : 67 s. Architect : 65 s.
- Montage : `v3/story.mjs` (liste des plans), `v3/build.mjs` (rendu des cartons avec `v3/ins.html`, puis montage ffmpeg).
- Les plans d'application et les cartons animés d'origine sont repris des films d'origine (même langue).
- Les films d'origine ne sont plus déployés (`public/video/original/` retiré pour alléger le site). Ils restent dans l'historique git (commit f406858) et dans le scratchpad `videos/original/`.

## Photos (licence Unsplash : usage libre, commercial compris, sans attribution obligatoire)
Fichiers dans `photos/`.

| Fichier | Sujet | Auteur | Page |
|---|---|---|---|
| container-ship-5.jpg | Porte-conteneurs vu du ciel | Bent Van Aeken | https://unsplash.com/photos/0A7YwYhZhWw |
| shipping-port-4.jpg | Portiques d'un port à conteneurs | Foto K. | https://unsplash.com/photos/YTh-Yu_BEXw |
| truck-highway-2.jpg | Camion sur une route | Joseph Corl | https://unsplash.com/photos/OVKRxZub9f4 |
| warehouse-worker-4.jpg | Chariot élévateur en entrepôt, personne floue | Pickawood | https://unsplash.com/photos/6tAIO3pxde4 |
| delivery-van-0.jpg | Utilitaire de livraison (sans marque) | Jan Kopřiva | https://unsplash.com/photos/b6fns2kOFsk |

Licence : https://unsplash.com/license. Ni logo de marque lisible, ni visage identifiable en gros plan. L'auteur est crédité à l'écran.

## Captures
Captures réelles d'Aura Supply (aura-decision-zen.vercel.app), démo Maison Lucie, prises le 30/09/2026. Données fictives, signalé à l'écran. Les captures d'Aura Architect viennent du film d'origine.

## Musique
Aucune nouvelle musique : la piste d'origine de chaque film (composition originale, voir `LICENCE-MUSIQUE.md`) est reprise depuis son début, avec un fondu de sortie.

# Film de marque (accueil, 30/09/2026)

`public/video/aura-brand-{fr,en}.mp4` : 53 s, 1080p, H.264 + AAC, ~17 Mo, lecture au clic. Montage : `brand/build.mjs` (`node build.mjs fr|en`), cartons `brand/work/ins.html` (repris de v3), captures recadrées dans `brand/caps/`.
Histoire : ambition (port) → tension (navire retardé, conteneurs à quai) → l'équipe voit venir (open space, captures Cockpit et Causes) → compare (réunion, capture options) → choisit (comité) → agit (camion) → résultat (livraison, route dans la verdure) → carton final.

## Vidéos (Mixkit Stock Video Free License : usage commercial libre, sans attribution, https://mixkit.co/license/#videoFree)
Licence vérifiée sur chaque page le 30/09/2026 (les clips « Mixkit Restricted License » ont été écartés). Fichiers sources hors dépôt (`brand/clips/`, ignoré par git), à retélécharger via `https://assets.mixkit.co/videos/<id>/<id>-1080.mp4`.

| Id | Sujet | Page |
|---|---|---|
| 4012 | Portiques et porte-conteneurs à quai | https://mixkit.co/free-stock-video/cranes-working-on-unloading-dock-4012/ |
| 4011 | Porte-conteneurs (cadré haut : aucun marquage lisible) | https://mixkit.co/free-stock-video/cargo-ship-full-of-containers-4011/ |
| 4445 | Port à conteneurs vu d'en haut | https://mixkit.co/free-stock-video/top-view-of-tokyo-cargo-port-4445/ |
| 918 | Open space, équipe devant écrans | https://mixkit.co/free-stock-video/busy-office-space-918/ |
| 4547 | Réunion d'équipe autour d'une table | https://mixkit.co/free-stock-video/people-having-a-work-meeting-around-a-table-4547/ |
| 42666 | Présentation en comité | https://mixkit.co/free-stock-video/presentation-during-a-work-team-meeting-42666/ |
| 44284 | Camion sur une route | https://mixkit.co/free-stock-video/cars-and-trucks-crossing-on-a-highway-in-nature-44284/ |
| 31346 | Livreur préparant des colis | https://mixkit.co/free-stock-video/courier-worker-preparing-boxes-on-a-loading-truck-31346/ |
| 41389 | Route dans la nature (vue aérienne) | https://mixkit.co/free-stock-video/aerial-view-of-a-road-that-crosses-through-nature-41389/ |

Pas de logo de marque lisible ni de visage en gros plan (plans d'ensemble ou mi-distance).

## Musique
« Motivating Mornings », Ahjay Stelino, Mixkit (https://assets.mixkit.co/music/33/33.mp3), Mixkit Stock Music Free License (https://mixkit.co/license/#musicFree) : usage commercial libre, sans attribution. ≈123 BPM ; coupes sur la mesure (1,951 s, premier temps à 0,464 s), fondus d'un temps ; introduction calme pour la tension, entrée de la rythmique à 12 s sur « Voir venir ». Normalisée -16 LUFS, fondu de sortie 3 s.

## Captures
Aura Supply, démo Maison Lucie (données fictives, signalé à l'écran), FR et EN : Cockpit recadré (sans montant ni bouton d'action), fiche Causes, tableau des options.

# Film de marque Aura Architect (page Architect, 30/09/2026)

`public/video/aura-architect-brand-{fr,en}.mp4` : 49 s, 1080p, H.264 + AAC, lecture au clic. Montage : `brand/build-architect.mjs` (`node build-architect.mjs fr|en`), mêmes cartons (`brand/work/ins.html`), même musique et mêmes coupes sur la mesure que le film de marque.
Message : le jumeau numérique de l'architecte, qui raisonne et dialogue avec les acteurs de la transformation.
Histoire : open space → équipe projet → présentation → dialogue (capture) → cible dessinée (capture) → échange → analyse d'impact (capture) → comité → vérification ou carte des capacités (capture) → équipe → carton final.

## Vidéos ajoutées (Mixkit Stock Video Free License, vérifiée sur chaque page le 30/09/2026)
Plus 918, 4547 (voir ci-dessus). Fichiers hors dépôt (`brand/clips/`), à retélécharger via `https://assets.mixkit.co/videos/<id>/<id>-1080.mp4`.

| Id | Sujet | Page |
|---|---|---|
| 914 | Open space vu d'en haut | https://mixkit.co/free-stock-video/open-office-space-914/ |
| 4809 | Équipe au travail autour d'une table, vue du dessus | https://mixkit.co/free-stock-video/business-people-at-work-meeting-4809/ |
| 42643 | Présentation sur écran en salle de réunion | https://mixkit.co/free-stock-video/presentation-in-a-business-meeting-room-42643/ |
| 4813 | Deux collègues échangent devant un ordinateur | https://mixkit.co/free-stock-video/business-partners-meeting-4813/ |
| 42644 | Réunion en salle, écrans | https://mixkit.co/free-stock-video/business-meeting-in-a-meeting-room-42644/ |

## Captures
Aura Architect (https://aura-architect-seven.vercel.app, FR et `?lang=en`), prises le 30/09/2026 : cadrage par questions, schéma inter-applicatif, analyse d'impact « et si on retire l'ERP ? », aides à la réflexion (FR) ou carte des capacités (EN). Démo sans données réelles, signalé à l'écran. `brand/caps/arch-*`.

Les miniatures de repérage (`brand/sheet/`, dont un clip à licence restreinte) ont été retirées.
