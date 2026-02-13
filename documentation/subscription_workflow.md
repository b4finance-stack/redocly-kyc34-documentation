# Subscription Workflow

The **subscription** process in B4Finance is based on a series of successive statuses applied to a subscription file.  
Each status corresponds to a specific stage of the lifecycle, from preparation by the owner to final approval after diligence.

***

## ⚙️ Available Statuses

{% table %}
  - Status (EN / API)<span style="display:inline-block; width: 12ch;"></span>
  - Description
  ---
  - <span style="display:inline-block; white-space:nowrap; font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace; font-size:0.9em; padding:2px 8px; border-radius:6px; background:rgba(127,127,127,0.18); border:1px solid rgba(127,127,127,0.35);">draft</span>
  - The subscription is in progress on the <strong>distributor</strong> or <strong>operator</strong> side. At this stage, the file is still editable.
  ---
  - <span style="display:inline-block; white-space:nowrap; font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace; font-size:0.9em; padding:2px 8px; border-radius:6px; background:rgba(127,127,127,0.18); border:1px solid rgba(127,127,127,0.35);">sent_to_investor</span>
  - The subscription has been sent to the investor. The operator or distributor can still take over if needed.
  ---
  - <span style="display:inline-block; white-space:nowrap; font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace; font-size:0.9em; padding:2px 8px; border-radius:6px; background:rgba(127,127,127,0.18); border:1px solid rgba(127,127,127,0.35);">awaiting_signature</span>
  - The electronic signature process has started. At this stage, <strong>no rollback is possible</strong>.
  ---
  - <span style="display:inline-block; white-space:nowrap; font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace; font-size:0.9em; padding:2px 8px; border-radius:6px; background:rgba(127,127,127,0.18); border:1px solid rgba(127,127,127,0.35);">signed</span>
  - All required signers (the investor and, where applicable, the counter-signer) have signed the subscription.
  ---
  - <span style="display:inline-block; white-space:nowrap; font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace; font-size:0.9em; padding:2px 8px; border-radius:6px; background:rgba(127,127,127,0.18); border:1px solid rgba(127,127,127,0.35);">diligence_review</span>
  - The file is in the <strong>KYC/Diligence validation</strong> stage. Approval of the investor’s KYC record is required to proceed.
  ---
  - <span style="display:inline-block; white-space:nowrap; font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace; font-size:0.9em; padding:2px 8px; border-radius:6px; background:rgba(127,127,127,0.18); border:1px solid rgba(127,127,127,0.35);">approved</span>
  - The subscription has been <strong>approved</strong> and is now considered <strong>finalized</strong>.
{% /table %}

***

## Diagrams / Subscription Workflows

### Standard workflow

{% img src="./images/souscription_workflow/workflow_standard.png" alt="Workflow standard – Subscription" width="1100" withLightbox=true %}
{% /img %}

### Operator view: Standard workflow with countersignature workflow
{% img src="./images/souscription_workflow/workflow_operator_standard_countersignature.png" alt="Operator view – Standard workflow with countersignature" width="1100" withLightbox=true %}
{% /img %}

---

### Distributor view: Standard workflow with countersignature workflow
{% img src="./images/souscription_workflow/workflow_distributor_standard_countersignature.png" alt="Distributor view – Standard workflow with countersignature" width="1100" withLightbox=true %}
{% /img %}

---

### Standard workflow with a countersignatory, but without the countersignature workflow
{% img src="./images/souscription_workflow/workflow_standard_with_countersignatory_no_countersignature.png" alt="Standard workflow with a countersignatory, but without the countersignature workflow" width="1100" withLightbox=true %}
{% /img %}

---

### Workflow review before signature by the management company, Operator view
{% img src="./images/souscription_workflow/workflow_review_before_signature_operator.png" alt="Operator view – Review before signature by the management company" width="1100" withLightbox=true %}
{% /img %}

---

### Workflow review before signature by the management company, Distributor view
{% img src="./images/souscription_workflow/workflow_review_before_signature_distributor.png" alt="Distributor view – Review before signature by the management company" width="1100" withLightbox=true %}
{% /img %}

---

### Suitability workflow
{% img src="./images/souscription_workflow/workflow_suitability.png" alt="Workflow Suitability – Subscription" width="1100" withLightbox=true %}
{% /img %}

---

### Suitability workflow with countersignature workflow
{% img src="./images/souscription_workflow/workflow_suitability_countersignature.png" alt="Workflow Suitability with countersignature workflow" width="1100" withLightbox=true %}
{% /img %}
