# ⚙️ On-demand configuration



---

## 🎨 Customization and evolution of your instance

Once your instance is configured, it is **normal for needs to evolve over time**.  
Good news: your environment can be **customized and adjusted at any time** to fit your specific use cases.

Change requests can be sent to:
- Your **Account Manager**, or  
- The **Support** team: [support@b4finance.com](mailto:support@b4finance.com)

---

## 🔧 Elements that can be customized at any time

| **Category** | **Examples of possible customization** |
|----------------|---------------------------------------------|
| **Visual identity** | Logo, environment colors |
| **Funds** | Add new funds, update settings (minimum amount, entry fees, open/closed status, etc.) |
| **Questionnaires** | Add new questions or disable existing ones |
| **Subscription form** | Content updates and adjustments |
| **Users and internal groups** | Add internal or external users (e.g., depositary), create groups |
| **Signatures** | Add or remove countersigners |
| **Communication** | Customize email templates |
| **Regulatory documents** | MiFID letter, agreement template |
| **Modules** | Enable new modules on request |
| **Automatic suitability** | Adjust settings based on needs |
| **Custom email address (Version 5)** | Configure a dedicated email address (e.g., no-reply@xx.com) |

---

## 📧 Custom email address setup

Once the email address is validated with Support, configuration must be done **by your IT team**.

### Technical steps

# 📧 Custom email address setup

**Example:** `no-reply@xx.com`

---

## 🧩 Step 1 - Domain verification

To validate your sending domain, create a **TXT record** in your domain DNS with the following value:

mandrill_verify.TBD


This record allows the platform to authenticate your domain before sending emails.

---

## 🔐 Step 2 - DKIM activation

**DKIM (DomainKeys Identified Mail)** is an authentication protocol ensuring sender legitimacy.

Create the following two **CNAME** records in your DNS:

mte1._domainkey.xx.com → dkim1.mandrillapp.com

mte2._domainkey.xx.com → dkim2.mandrillapp.com

---

## ✅ Objective

These records ensure:
- Secure authentication of outgoing emails,
- Better message deliverability,
- Compliance of your domain with professional sending policies.

> 💡 Once DNS records are created, full verification propagation can take up to **48 hours**.
