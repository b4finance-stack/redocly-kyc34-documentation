# Due Diligence Workflow

B4Finance’s KYC (Know Your Customer) process is based on successive statuses applied to a counterparty record.  
Each record goes through several stages: collection, analysis, approval, then closure (approval, rejection, or archiving).

***

## Available Statuses

{% table %}
  - Status (EN / API)<span style="display:inline-block; width: 12ch;"></span>
  - Description
  ---
  - <span style="display:inline-block; white-space:nowrap; font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace; font-size:0.9em; padding:2px 8px; border-radius:6px; background:rgba(127,127,127,0.18); border:1px solid rgba(127,127,127,0.35);">collecting</span>
  - First step of the process. You can <strong>freely edit</strong> all data in the counterparty record.
  ---
  - <span style="display:inline-block; white-space:nowrap; font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace; font-size:0.9em; padding:2px 8px; border-radius:6px; background:rgba(127,127,127,0.18); border:1px solid rgba(127,127,127,0.35);">analysis</span>
  - Review of collected information. Allows manual updates to Screening, Scoring, and categorization.
  ---
  - <span style="display:inline-block; white-space:nowrap; font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace; font-size:0.9em; padding:2px 8px; border-radius:6px; background:rgba(127,127,127,0.18); border:1px solid rgba(127,127,127,0.35);">approval</span>
  - Second-level validation (often by a compliance officer). Also allows manual changes to Screening, Scoring, and <strong>categorization</strong>.
  ---
  - <span style="display:inline-block; white-space:nowrap; font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace; font-size:0.9em; padding:2px 8px; border-radius:6px; background:rgba(127,127,127,0.18); border:1px solid rgba(127,127,127,0.35);">approved</span>
  - Record validated and locked. <strong>No changes allowed.</strong>
  ---
  - <span style="display:inline-block; white-space:nowrap; font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace; font-size:0.9em; padding:2px 8px; border-radius:6px; background:rgba(127,127,127,0.18); border:1px solid rgba(127,127,127,0.35);">rejected</span>
  - Applicable to in-progress records (<strong>Collecte</strong>, <strong>Analyse</strong>, or <strong>Approbation</strong>). Used when a record cannot be validated.
  ---
  - <span style="display:inline-block; white-space:nowrap; font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace; font-size:0.9em; padding:2px 8px; border-radius:6px; background:rgba(127,127,127,0.18); border:1px solid rgba(127,127,127,0.35);">archived</span>
  - Final status for a <strong>previously approved</strong> record. Closes and retains the record without deleting it. Can be <strong>reopened</strong> in exceptional cases.
  ---
  - <span style="display:inline-block; white-space:nowrap; font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace; font-size:0.9em; padding:2px 8px; border-radius:6px; background:rgba(127,127,127,0.18); border:1px solid rgba(127,127,127,0.35);">reopen</span>
  - Allows you to <strong>reactivate a closed record</strong> (Rejected or Archived). Can return to <strong>Collecting</strong> to resume the process.
{% /table %}



<br />

## Workflow Overview

<br />

{% img src="./images/diligence_workflow/workflow_diligence.png" alt="Standard Workflow – Diligence" width="1100" withLightbox=true %}
{% /img %}

<br />
