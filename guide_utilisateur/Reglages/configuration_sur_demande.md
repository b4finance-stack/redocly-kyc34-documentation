# ⚙️ Configuration sur demande



---

## 🎨 Personnalisation et évolutions de votre instance

Une fois votre instance configurée, il est **normal que certains besoins évoluent avec le temps**.  
Bonne nouvelle : votre environnement peut être **personnalisé et ajusté à tout moment** pour s’adapter à vos usages spécifiques.

Les demandes de modification peuvent être adressées à :
- votre **Account Manager**, ou  
- l’équipe **Support** : [support@b4finance.com](mailto:support@b4finance.com)

---

## 🔧 Éléments personnalisables à tout moment

| **Catégorie** | **Exemples de personnalisations possibles** |
|----------------|---------------------------------------------|
| **Identité visuelle** | Logo, couleurs de l’environnement |
| **Fonds** | Ajout de nouveaux fonds, mise à jour des paramètres (montant minimum, droits d’entrée, statut ouvert/fermé, etc.) |
| **Questionnaires** | Ajout de nouvelles questions ou désactivation de certaines |
| **Bulletin de souscription** | Mise à jour et ajustements du contenu |
| **Utilisateurs et groupes internes** | Ajout d’utilisateurs internes ou externes (ex. dépositaire), création de groupes |
| **Signatures** | Ajout ou suppression de contre-signataires |
| **Communication** | Personnalisation des templates d’e-mail |
| **Documents réglementaires** | Lettre MIFID, template de convention |
| **Modules** | Activation de nouveaux modules sur demande |
| **Adéquation automatique** | Ajustement du paramétrage selon les besoins |
| **Adresse e-mail personnalisée (Version 5)** | Paramétrage d’une adresse e-mail dédiée (ex. no-reply@xx.com) |

---

## 📧 Paramétrage de l’adresse e-mail personnalisée

Une fois l’adresse e-mail validée avec l’équipe Support, la configuration doit être effectuée **par votre équipe IT**.

### Étapes techniques

# 📧 Paramétrage de l’adresse e-mail personnalisée

**Exemple :** `no-reply@xx.com`

---

## 🧩 Étape 1 – Vérification du domaine

Pour valider votre domaine d’envoi, créez un **enregistrement TXT** dans les DNS de votre domaine avec la valeur suivante :

mandrill_verify.TBD


Cet enregistrement permet à la plateforme d’authentifier votre domaine avant l’envoi d’e-mails.

---

## 🔐 Étape 2 – Activation du DKIM

Le **DKIM (DomainKeys Identified Mail)** est un protocole d’authentification garantissant la légitimité de l’expéditeur.

Créez les deux enregistrements **CNAME** suivants dans vos DNS :

mte1._domainkey.xx.com → dkim1.mandrillapp.com

mte2._domainkey.xx.com → dkim2.mandrillapp.com

---

## ✅ Objectif

Ces enregistrements assurent :
- une **authentification sécurisée** des e-mails sortants,
- une **meilleure délivrabilité** des messages,
- la **conformité** de votre domaine avec les politiques d’envoi professionnelles.

> 💡 Une fois les enregistrements DNS créés, il peut s’écouler jusqu’à **48 heures** avant que la vérification soit totalement propagée.




