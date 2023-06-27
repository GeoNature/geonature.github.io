---
title: Workshop GeoNature 2023 - Refonte module EXPORT
date: "2023-06-26"
excerpt: "La semaine du 9 mai 2023 13 contributeurs à GeoNature se sont réunis à Nyons pour une semaine de développement collectif et contributif à GeoNature."
author: Camille Monchicourt
---

La semaine du 9 mai 2023, 13 contributeurs à GeoNature venant des parcs nationaux des Cévennes et des Écrins, du CBNA, de Patrinat et de Natural Solutions, se sont réunis à Nyons pour une semaine de développement collectif et contributif à GeoNature.
Cette semaine de workshop a permis de réaliser collectivement une importante refonte du module EXPORT [version 1.5.0](https://github.com/PnX-SI/gn_module_export/releases).

L'objectif était de se rencontrer, d'échanger, d'harmoniser nos pratiques, de faire du transfert de compétences, tout en consolidant et améliorant ce module important pour les échanges et la diffusion des données.

Ce module de GeoNature permet en effet de mettre en place dynamiquement des exports de fichiers à la demande ou automatiques, ainsi que des API de diffusion des données vers le SINP, les partenaires ou des plateformes opendata comme data.gouv.fr.
Il est ainsi utilisé par exemple par le Parc national des Écrins pour déposer et mettre à jour automatiquement et quotidiennement toutes les observations du parc national sur data.gouv.fr : <https://www.ecrins-parcnational.fr/actualite/parc-national-ecrins-deconfine-donnees-biodiversite>

Le travail s'est notamment concentré sur :

- Amélioration des performances pour pouvoir exporter plusieurs millions de données sans limite
- Amélioration et standardisation de l'accès aux API des exports
- Accès ouvert aux API des exports définis comme "public"
- Reprise, nettoyage et factorisation du socle technique et mise en place des bonnes pratiques de GeoNature
- Ajout de tests automatisés du module
- Mise en place de taches automatisées et de notifications quand un export est généré
- Révision, optimisation et simplifications des permissions du module

Ce workshop a aussi été l'occasion de réfléchir collectivement aux évolutions techniques plus globales de GeoNature, d'initier une nouvelle version du site internet <https://geonature.fr>, d'accueillir Pierre Narcisi tout juste recruté par Patrinat et de dire au revoir à Élie Bouttier et de le remercier pour le travail important qu'il a fait sur le socle et les bonnes pratiques de GeoNature pendant 2 ans et demi.

A voir aussi sur <https://www.linkedin.com/feed/update/urn:li:activity:7078314856826728448/>.
