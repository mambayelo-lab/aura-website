# Film Aura : sources et licences

- **Musique** : composition originale générée par programme (`music.py`, numpy/scipy), sans échantillon ni ressource externe. Œuvre créée pour Aura, libre de droits pour tout usage par Aura. 120 BPM, la mineur ; montage calé sur la mesure (2 s). Masterisée à -14 LUFS intégrés (mesuré -14,3 LUFS, crête -2,0 dBFS), fondus d'entrée et de sortie.
- **Visuels** : globe, réseaux et particules générés en canvas (`film.html`) ; captures réelles des applications Aura (données de démonstration Maison Lucie). Polices Sora et Lexend (SIL Open Font License).
- **Rendu** : `render.mjs` capture chaque image (30 i/s) avec Playwright, `LANG_FILM=fr|en` ; montage et encodage avec ffmpeg (H.264, VP9/Opus).
