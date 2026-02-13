---
title: KYC record statuses
description: Description of possible KYC record statuses and their impact on the operational workflow.
---

# 📌 KYC record statuses

This page describes the different **statuses** of a KYC record, their meaning, and the available actions for each status.

---

## 🔁 Main status list

### 1. Draft
The record is being created by an operator (initial entry or draft save).

**Available actions:**
- Edit the record.
- Complete information before sending.

---

### 2. Sent / Pending (Sent to counterparty)
The record has been sent to the external contact (counterparty) to complete their information.

**Consequences:**
- The counterparty can complete missing fields through the completion link.
- The operator can **take control back** (depending on permissions) if needed.

---

### 3. Collecting
Status indicating that information is being collected (internally or via the counterparty).

---

### 4. Under validation / In diligence
The record has been completed and is being reviewed by the compliance/management company team.

**Available actions:**
- Review provided documents.
- Request clarifications from the counterparty.
- Move to *Approved* or *Rejected* status.

---

### 5. Approved / Validated
The KYC record has been approved and can be used to link subscriptions or operations.

**Effect:**
- Information is shown in read-only mode (unless explicitly edited).
- The investor can be used for new subscriptions.

---

### 6. Rejected
The record was rejected after review. The reason must be documented in the record.

**Consequences:**
- The operator can correct or archive the record.
- The counterparty must complete or provide additional elements before re-review.

---

## 🔧 Specific actions and rules

- **Edit an approved record**: click *Edit investor*; the status automatically returns to *Collecting*.  
- **Take control back** on a sent record: available at subscription or record level, depending on user permissions.  
- **Audit log**: all status changes and actions must be tracked in the record history.

---

## ℹ️ Best practices

- Document the reason when moving to *Rejected*.  
- Use dashboard filters to list records by status (Draft, Pending, Under validation, Approved, Rejected).  
- Keep supporting documents in the attached Documents section for audit.

---
