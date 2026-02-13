---
title: OTP Usage Rules
description: Best practices and constraints related to using a one-time password (OTP) in the authentication process.
---

# 🔐 OTP Usage Rules

This guide explains the rules for using an OTP (*One-Time Password*) in the authentication process.

---

## 1. ⏱️ Code validity period

Once generated and sent, an OTP code remains **valid for 15 minutes**.

After that:
- the code can no longer be used;
- the user must **generate a new code** to log in again.

> ⚠️ **Warning:** Expired codes cannot be reactivated.  
> A new OTP must always be requested.

---

## 2. ✉️ Code generation when accessing via Magic Link

An OTP code is generated **only on the first click** on the *magic link*.

If you click the same link again:
- a new code **will not be resent automatically**;
- you must **explicitly request a resend** to receive a new code.

> 💡 **Good to know:** The *magic link* can be used only once to generate an active OTP.

---

## 3. 🔁 Reusing the code during its validity window

Even if the code is still valid (within 15 minutes), it **cannot be used multiple times**.

Each login attempt requires a **new OTP code**.

---

## 4. 🚫 Validity after first use

Any OTP code becomes **immediately invalid** after first use.

So it **cannot be reused**, even if still within the validity period.

---

## 📋 Summary

| **Rule** | **Description** |
|--------------------------|----------------|
| **Validity period** | Maximum 15 minutes |
| **Code delivery** | Sent once at initial generation |
| **Reuse** | No, single-use only |
| **After use** | Code is immediately invalid |

---

> 🛡️ **Security tip:**  
> Never share your OTP code.  
> It is strictly personal and single-use.
