# Screening

## Accessing the Screening module

**Screening** is available from the **AML/CFT section**, in the **Screening** tab.

{% img src="../images/LCB FT/screening/screening.png" alt="Global dashboard" width="1100" withLightbox=true %}
{% /img %}

All **third parties** linked to a counterparty are screened.  
However, the results of these screenings contribute to the **overall risk** of the main counterparty.

To view detailed screening for each third party, go to the counterparty's **main file**.

---

## Screening objective

Screening is used to **automatically check** individuals, legal entities, and funds registered on the platform to identify sensitive information related to:

- **Sanctions Lists**,  
- **High-risk Profiles (PEP)**,  
- **Negative Reputation Indicators (adverse media)**.

---

## Connecting a screening provider

Each platform environment can be **connected to a screening provider**, if the client has subscribed to this option.

**Main compatible providers:**

- MemberCheck  
- Dow Jones  
- World-Check (Refinitiv)

{% admonition type="info" %}
Provider selection depends on the client contract and subscribed licenses.
{% /admonition %}

---

## Common behavior across providers

Regardless of the provider, these rules are common:

- 📧 A **daily email** reports potential new matches.  
- ✅ The **match selection or rejection process** is standardized.  
- 💬 You can **add comments** to justify each action.  
- ⚙️ Each screening criterion (*PEP, reputation, etc.*) can be **manually adjusted** if needed or in case of anomalies.

---

## Managing matches (select or reject)

When a **match** appears, it is shown as an individual file.

### 🔍 Verification
You can open the **screening report** to confirm related information.

### ✅ Selecting a match
1. Check the **white box** (to the right of the *Download report* button).  
2. Click **Confirm match**.  

{% admonition type="warning" %}
The investor file must be in **Collecting** status; otherwise, the *Confirm match* button remains  disabled.
{% /admonition %}

This action is **reversible** through the **Reset** button.

### ❌ Rejecting a match
- Click **Reject** if the match is not relevant.  
- ⚠️ This action is **final and irreversible**.

---

## History and manual changes

Each file has a **screening history** tracking all actions.

{% img src="../images/LCB FT/screening/Match.png" alt="Global dashboard" width="1100" withLightbox=true %}
{% /img %}

The detail of each criterion is **viewable and manually editable**, which directly impacts the **overall scoring**.

{% img src="../images/LCB FT/screening/Match .png" alt="Global dashboard" width="1100" withLightbox=true %}
{% /img %}
---

### ✉️ Automatic notifications

Every morning, two emails are sent to authorized users:

1. The **first email** reports **newly detected matches**.  
2. The **second email** reports **changes on existing matches** (e.g., status change, new data).

### 📊 Operational monitoring on the platform

- A **“New match”** column in the pipeline lets you quickly filter files with new matches.  
- The file **history** logs daily **changes related to screening data**.

{% img src="../images/LCB FT/screening/monitoring.png" alt="Global dashboard" width="1100" withLightbox=true %}
{% /img %}
