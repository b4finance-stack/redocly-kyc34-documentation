# Screening

## Accès au module Screening

Le **Screening** est accessible depuis la **section LCB/FT**, dans l’onglet **Screening**.

{% img src="../images/LCB FT/screening/image17.png" alt="Dashboard global" width="1100" withLightbox=true %}
{% /img %}
{% img src="../images/LCB FT/screening/image18.png" alt="Dashboard global" width="1100" withLightbox=true %}
{% /img %}

Toutes les **parties tierces** associées à une contrepartie font l’objet d’un screening.  
Cependant, les résultats de ces screenings contribuent au **risque global** de la contrepartie principale.

Pour consulter le détail du screening de chaque partie tierce, il faut se rendre dans la **fiche principale** de la contrepartie.

---

## Objectif du Screening

Le screening permet de **vérifier automatiquement** les personnes physiques, morales et fonds enregistrés dans la plateforme afin d’identifier toute information sensible en lien avec :

- les **listes de sanctions**,  
- les **profils à risque (PEP)**,  
- les **éléments négatifs de réputation (adverse media)**.

---

## Connexion à un provider de screening

Chaque environnement de la plateforme peut être **connecté à un fournisseur de screening**, sous réserve que le client ait souscrit à cette option.

**Principaux providers compatibles :**

- MemberCheck  
- Dow Jones  
- World-Check (Refinitiv)

{% admonition type="info" %}
Le choix du provider dépend du contrat client et des licences souscrites.
{% /admonition %}

---

## Fonctionnement commun à tous les providers

Peu importe le fournisseur utilisé, certaines règles sont communes :

- 📧 Un **mail quotidien** signale l’apparition éventuelle de nouveaux matchs.  
- ✅ Le processus de **sélection ou rejet d’un match** est standardisé.  
- 💬 Il est possible d’**ajouter des commentaires** pour justifier chaque action.  
- ⚙️ Chaque critère du screening (*PEP, réputation, etc.*) peut être **modifié manuellement** en cas de besoin ou d’anomalie.

---

## Gérer les matchs (sélectionner ou rejeter)

Lorsqu’un **match** apparaît, il est présenté sous forme de fiche individuelle.

### 🔍 Vérification
Vous pouvez consulter le **rapport de screening** pour confirmer les informations associées.

### ✅ Sélection d’un match
1. Cochez la **case blanche** (à droite du bouton *Télécharger le rapport*).  
2. Cliquez sur **Confirmer le match**.  

{% admonition type="warning" %}
La fiche investisseur doit être en **statut Collecte**, sinon le bouton *Confirmer le match* restera grisé.
{% /admonition %}

Cette action est **réversible** via le bouton **Réinitialiser**.

### ❌ Rejet d’un match
- Cliquez sur **Rejeter** si le match est non pertinent.  
- ⚠️ Cette action est **définitive et irréversible**.

---

## Historique et modification manuelle

Chaque fiche dispose d’un **historique de screening** retraçant toutes les actions effectuées. 

{% img src="../images/LCB FT/screening/image19.png" alt="Dashboard global" width="1100" withLightbox=true %}
{% /img %}

Le détail de chaque critère est **consultable et modifiable manuellement**, ce qui impacte directement le **scoring global**.

{% img src="../images/LCB FT/screening/image20.png" alt="Dashboard global" width="1100" withLightbox=true %}
{% /img %}
---

## Nouveautés – Intégration V2 (MemberCheck & Dow Jones)

La nouvelle **intégration V2**, disponible pour *MemberCheck* et *Dow Jones*, ajoute des fonctionnalités avancées pour un meilleur suivi.

### ✉️ Notifications automatiques

Chaque matin, deux e-mails sont envoyés aux utilisateurs habilités :

1. Le **premier mail** signale les **nouveaux matchs détectés**.  
2. Le **deuxième mail** informe des **modifications sur les matchs existants** (ex. changement de statut, nouvelles informations).

### 📊 Suivi opérationnel sur la plateforme

- Une **colonne “New match”** dans le pipeline permet de filtrer directement les fiches contenant de nouveaux matchs.  
- L’**historique** de chaque fiche enregistre quotidiennement les **changements liés aux données de screening**.

{% img src="../images/LCB FT/screening/image21.png" alt="Dashboard global" width="1100" withLightbox=true %}
{% /img %}
