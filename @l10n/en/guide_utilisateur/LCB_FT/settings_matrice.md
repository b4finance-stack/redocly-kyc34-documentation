# Scoring settings matrix

## Settings -> Scoring management

The **Scoring management** module lets you **configure parameters for scoring, screening, and periodic review**.  
Configuration is **global** and applies to the **entire platform**; it cannot be customized for specific file only.

---

## Configuring weights

You can adjust the **weight assigned to each criterion** used to calculate a file's **final risk score**.  
Weights are configurable per **counterparty type** (Investor, Asset, etc.).

{% img src="../images/LCB FT/settings_matrice/poids.png" alt="Global dashboard" width="1100" withLightbox=true %}
{% /img %}

---

## List configuration

This setting lets you assign, for each **country**:
- a **country risk level**,
- a **corruption risk level**.

At platform implementation, these values are initialized from **FATF list** data.  
After that, you can update them yourself: they **will no longer be automatically updated** by our teams.

{% img src="../images/LCB FT/settings_matrice/pays.png" alt="Global dashboard" width="1100" withLightbox=true %}
{% /img %}

---

## Date of periodic review 

The **date of periodic review** can be automatically adjusted **based on the file's overall risk level**.  
The countdown starts **as soon as the file is approved** (*“Approved”* status).

{% img src="../images/LCB FT/settings_matrice/date.png" alt="Global dashboard" width="1100" withLightbox=true %}
{% /img %}

---

## Applying changes

For changes made to **weight configuration** or **lists** to take effect:

1. Click **Apply**.  
2. Choose one of these two options:

### 🔹 For all
- The change is applied to **all files on the platform**.  
- If weights are segmented by counterparty type (*asset, investor, etc.*), the update applies to **all files for each type**.

### 🔹 For all except manually modified records
- The change applies only to files whose **final risk has not been manually adjusted**.  
- This preserves files that already received **specific manual treatment**.

---
{% img src="../images/LCB FT/settings_matrice/apply.png" alt="Global dashboard" width="400" withLightbox=true %}
{% /img %}

## Confirmation and performance

Once changes are applied:

- 📧 A **confirmation email** is automatically sent.  
- ⚠️ These changes trigger **platform-wide processing**, which may **temporarily slow down the interface**.

{% admonition type="warning" %}
Mass recalculation operations can take several minutes depending on the number of impacted records.
{% /admonition %}
