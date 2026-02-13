# Settings Matrice

## Réglages → Gestion du scoring

Le module **Gestion du scoring** permet de **configurer les paramètres liés au scoring, au screening et à la revue périodique**.  
La configuration est **globale** et s’applique à **toute la plateforme** — il n’est pas possible de la personnaliser pour certaines fiches uniquement.

---

## Configuration des poids

Vous pouvez ajuster le **poids attribué à chaque critère** utilisé dans le calcul du **score de risque final** d’une fiche.  
Les poids sont configurables individuellement pour chaque **type de contrepartie** (Investisseur, Actif, etc.).

{% img src="../images/LCB FT/settings_matrice/image23.png" alt="Dashboard global" width="1100" withLightbox=true %}
{% /img %}

---

## Configuration des listes

Ce paramètre permet d’associer à chaque **pays** :
- un **niveau de risque pays**,  
- un **risque de corruption**.

Lors de l’implémentation de la plateforme, ces valeurs sont initialisées à partir des données de la **liste GAFI**.  
Par la suite, vous avez la main pour les modifier : elles **ne seront plus mises à jour automatiquement** par nos services.

{% img src="../images/LCB FT/settings_matrice/image24.png" alt="Dashboard global" width="1100" withLightbox=true %}
{% /img %}

---

## Date de revue périodique

La **date de revue périodique** peut être automatiquement ajustée **en fonction du niveau de risque global** de la fiche.  
Le décompte démarre **à partir du moment où la fiche est approuvée** (statut *« Approuvé »*).

{% img src="../images/LCB FT/settings_matrice/image25.png" alt="Dashboard global" width="1100" withLightbox=true %}
{% /img %}

---

## Application des modifications

Pour que les changements apportés à la **configuration des poids** ou des **listes** soient pris en compte :

1. Cliquez sur **Appliquer**.  
2. Choisissez l’une des deux options suivantes :

### 🔹 Pour tous
- La modification est appliquée à **toutes les fiches de la plateforme**.  
- Si les poids sont segmentés par type de contrepartie (*asset, investisseur, etc.*), la mise à jour concerne **toutes les fiches associées à chaque type**.

### 🔹 Pour tous sauf ceux modifiés manuellement
- La modification s’applique uniquement aux fiches dont le **risque final n’a pas été ajusté manuellement**.  
- Cette option permet de **préserver les fiches ayant déjà fait l’objet d’un traitement spécifique**.

---
{% img src="../images/LCB FT/settings_matrice/image26.png" alt="Dashboard global" width="1100" withLightbox=true %}
{% /img %}

## Confirmation et performance

Une fois les modifications appliquées :

- 📧 Un **e-mail de confirmation** est automatiquement envoyé.  
- ⚠️ Ces ajustements déclenchent un **traitement global sur la plateforme**, pouvant **temporairement ralentir l’interface**.

{% admonition type="warning" %}
Les opérations de recalcul massif peuvent durer plusieurs minutes selon le volume de fiches concernées.
{% /admonition %}
