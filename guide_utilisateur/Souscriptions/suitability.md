# 🧮 Module Adéquation Automatique (Suitability)



---

## 🎯 Objectif

Le **module d’adéquation automatique** permet aux sociétés de gestion de vérifier si les **réponses fournies par les investisseurs** sont conformes aux critères prédéfinis.  
Ce mécanisme automatise une partie de la validation réglementaire et simplifie le suivi des dossiers de souscription.

---

## ⚙️ Principe de fonctionnement

L’adéquation automatique repose sur un **paramétrage initial** :
- Chaque question du questionnaire est associée à une ou plusieurs **réponses considérées comme conformes**.
- Les autres réponses sont **signalées comme non conformes** et déclenchent une étape d’analyse manuelle.

---

## 🧾 Déroulement lors de la souscription

Lorsque l’investisseur complète son questionnaire de souscription, deux options apparaissent à la fin du parcours :

### 🔍 Envoyer en analyse
- Les réponses **ne correspondent pas toutes** aux attentes définies.  
- Le dossier est transmis à la **société de gestion** pour examen.  
- Celle-ci décide si la souscription peut être **acceptée malgré les écarts**.

### ✍️ Signer
- Les réponses sont **jugées conformes** selon la configuration.  
- L’investisseur peut **signer directement** sa souscription, sans validation supplémentaire.

> 🔗 Un schéma complet du workflow d’adéquation automatique est disponible dans la section **[WORKFLOW](#)**.

---

## 🧩 Paramétrage de l’adéquation

Le paramétrage s’effectue en deux étapes :

1. **Configuration initiale (équipe technique)**  
   - Activation du module et définition du modèle d’analyse.  
   - Liaison avec les questionnaires existants.

2. **Définition des réponses attendues (société de gestion)**  
   - Pour chaque question, les réponses conformes sont définies manuellement.  
   - Voir la section **SETTINGS** pour plus de détails sur la configuration.

> ⚠️ **Important :**
> - L’adéquation automatique **ne se lance que si le lien investisseur a été envoyé**.  
> - Sans envoi du lien, les opérateurs **ne peuvent ni valider ni rejeter** l’adéquation.  
> - La **signature en présentiel n’est pas possible** avec ce module : l’investisseur doit impérativement recevoir son lien de complétude.

---

## 📋 Le module Adéquation

Le module propose un **tableau de suivi** structuré en trois catégories :

| **Statut** | **Description** |
|-------------|----------------|
| **À analyser** | Dossiers nécessitant une revue manuelle. |
| **Validés** | Dossiers dont l’adéquation est confirmée. |
| **Rejetés** | Dossiers refusés après analyse. |

---

## 🧠 Traitement d’un dossier à analyser

Lorsqu’une souscription est signalée comme **inadéquate**, la société de gestion doit la **valider ou la rejeter manuellement**.

### Étapes de traitement
1. Rendez-vous dans le **module Adéquation**.  
2. Ouvrez la **souscription concernée**.  
3. Analysez chaque réponse **question par question**.  
4. Pour les réponses inadéquates :
   - Cliquez sur **Modifier**,  
   - Ajoutez un **commentaire**,  
   - Puis cliquez sur **Sauvegarder**.

Une fois toutes les sections revues :
- Le bouton **“Valider l’adéquation”** devient disponible.

### 🔄 Résultats possibles
- **Validation** : un email de **signature** est immédiatement envoyé aux signataires.  
- **Rejet** : la souscription passe automatiquement en statut **Rejeté**.
  
{% img src="../images/Souscriptions/suitability/image55.png" alt="Dashboard global" width="1100" withLightbox=true %}
{% /img %}

{% img src="../images/Souscriptions/suitability/image56.png" alt="Dashboard global" width="1100" withLightbox=true %}
{% /img %}

> 💡 *Ce module permet d’automatiser la gestion de conformité tout en conservant une validation humaine sur les cas limites. Il constitue une étape clé du processus de souscription pour les sociétés de gestion.*
