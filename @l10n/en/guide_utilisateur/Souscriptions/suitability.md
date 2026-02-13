# 🧮 Automatic Suitability module



---

## 🎯 Objective

The **automatic suitability module** allows management companies to verify whether **investor responses** comply with predefined criteria.  
This mechanism automates part of regulatory validation and simplifies subscription file follow-up.

---

## ⚙️ How it works

Automatic suitability relies on **initial configuration**:
- Each questionnaire question is linked to one or more **responses considered compliant**.
- Other responses are **flagged as non-compliant** and trigger a manual review step.

---

## 🧾 During the subscription flow

When the investor completes the subscription questionnaire, two options appear at the end:

### 🔍 Send for review
- Responses **do not all match** expected values.  
- The file is sent to the **management company** for review.  
- The management company decides whether the subscription can be **accepted despite deviations**.

### ✍️ Sign
- Responses are considered **compliant** according to configuration.  
- The investor can **sign directly** without additional validation.

> 🔗 A complete suitability workflow diagram is available in the **[WORKFLOW](#)** section.

---

## 🧩 Suitability configuration

Configuration is done in two steps:

1. **Initial setup (technical team)**  
   - Enable the module and define the analysis model.  
   - Link with existing questionnaires.

2. **Define expected answers (management company)**  
   - For each question, compliant answers are set manually.  
   - See the **SETTINGS** section for configuration details.

> ⚠️ **Important:**
> - Automatic suitability **starts only after the investor link is sent**.  
> - Without sending that link, operators **cannot validate or reject** suitability.  
> - **In-person signature is not possible** with this module: the investor must receive their completion link.

---

## 📋 Suitability module

The module provides a tracking table with three categories:

| **Status** | **Description** |
|-------------|----------------|
| **To analyze** | Files requiring manual review. |
| **Validated** | Files with confirmed suitability. |
| **Rejected** | Files rejected after review. |

---

## 🧠 Processing a file to analyze

When a subscription is flagged as **unsuitable**, the management company must **validate or reject it manually**.

### Processing steps
1. Go to the **Suitability** module.  
2. Open the **relevant subscription**.  
3. Review each answer **question by question**.  
4. For unsuitable answers:
   - Click **Edit**,  
   - Add a **comment**,  
   - Then click **Save**.

Once all sections are reviewed:
- The **“Validate suitability”** button becomes available.

### 🔄 Possible outcomes
- **Validation**: a **signature email** is immediately sent to signers.  
- **Rejection**: the subscription automatically moves to **Rejected** status.

{% img src="../images/Souscriptions/suitability/image55.png" alt="Global dashboard" width="1100" withLightbox=true %}
{% /img %}

{% img src="../images/Souscriptions/suitability/image56.png" alt="Global dashboard" width="1100" withLightbox=true %}
{% /img %}

> 💡 *This module automates compliance management while keeping human validation for edge cases. It is a key step in the subscription process for management companies.*
