---
title: KYC files statuses
description: Description of possible KYC record statuses and their impact on the operational workflow.
---

# 📌 KYC files statuses

This page describes the different **statuses** of a KYC file, their meaning, and the available actions for each status.

---

## 🔁 Main status list

### 1. Draft
The file is being created by an operator (initial entry or draft save).

**Available actions:**
- Edit the file.
- Complete information before sending.

---

### 2. Sent / Awaiting (Sent to counterparty)
The file has been sent to the external contact (counterparty) to complete their information.

**Consequences:**
- The counterparty can complete missing fields through the completion link.
- The operator can **take control back** (depending on permissions) if needed.

---

### 3. Collecting
Status indicating that information is being collected (internally or via the counterparty).

---

### 4. Under validation / In due diligence
The file has been completed and is being reviewed by the compliance/management company team.

**Available actions:**
- Review provided documents.
- Request clarifications from the counterparty.
- Move to *Approved* or *Rejected* status.

---

### 5. Approved / Validated
The KYC file has been approved and can be used to link subscriptions or operations.

**Effect:**
- Information is shown in read-only mode (unless explicitly edited).
- The investor can be used for new subscriptions.

---

### 6. Rejected
The file was rejected after review. The reason must be documented in the file.

**Consequences:**
- The operator can correct or archive the file.
- The counterparty must complete or provide additional elements before re-review.

---

## 🔧 Specific actions and rules

- **Edit an approved file**: click *Edit investor*; the status automatically returns to *Collecting*.  
- **Take control back** on a sent file: available at subscription or file level, depending on user permissions.  
- **Audit log**: all status changes and actions should be tracked in the file history.

---

## ℹ️ Best practices

- Document the reason when moving to *Rejected*.  
- Use dashboard filters to list the file by status (Draft, Awaiting, In due diligence, Approved, Rejected).  
- Keep the documents in the attached Documents section for audit.

---
