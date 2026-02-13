# Entity

## Person

Person corresponds to a central record in the B4Finance application. It can represent: an individual, a legal entity (e.g., company, organization), or a fund.

All data (information, relationships, roles, etc.) are attached to a Person record.

**Visibility in the interface (UI).** A Person without a role does not appear in the application. This behaves like a soft delete: the record remains in the database but is hidden from the user.

### Concrete example

- Creating an investor → a Person record is automatically created with the “investor” role.
- Removing all of their roles → the Person record remains in the database but no longer appears in the UI.

---

## Party

A Party refers to any entity (individual, organization, or structure) for which a compliance review (due diligence) must be performed within the activities managed via B4Finance.

Parties correspond to the counterparties with which the platform interacts. They can take different forms:

- **Investors**: Individuals (natural persons investing directly), Companies (legal entities investing for themselves or on behalf of third parties), Investment funds.
- **Assets**: when an asset is treated as a counterparty requiring verification.
- **Distributors**: entities responsible for marketing financial products.
- **Service providers**: operational or technical partners involved in transactions or management.
- **General Partners (GPs)**: managers or entities responsible for fund management (notably in private equity structures).

### Use in the API

Endpoints related to Parties allow you to create, read, update, and manage these entities. Each Party is subject to compliance tracking and can be associated with different roles depending on its type.

---

## Relation

A Relation represents a link between two Parties within B4Finance. It models interactions, dependencies, or responsibilities between these entities (for example, an individual in relation to a company, or a company in relation to its service providers).

When a new person or entity is added specifically in the context of this link, it corresponds to the creation of a third party.

### Available relation types
- Representative
- Shareholder
- Vendor
- Ultimate Beneficial Owner (UBO)
- Service provider
- Others…

**Expected values**: `SHAREHOLDER`, `ADMINISTRATOR`, `REPRESENTATIVE`, `UBO`, `CONTACT`, `SERVICE_PROVIDER`, `CO_INVESTOR`, `VENDOR`, `LENDER`, `BUYER`.

### Use in the API
Endpoints related to Relations allow you to:
- create a relation between two Parties,
- update or modify an existing link,
- read information related to already established relations,
- delete a relation if it is no longer applicable.

Each relation is typed, and this type defines the nature of the link between the Parties concerned.

---

## Funds / Parts

In B4Finance, Funds and Parts refer to the objects related to investment funds and the units subscribed by investors.

### Fund
A Fund corresponds to an investment vehicle available for subscription. Each fund has its own characteristics (for example: name, strategy, currency, subscription terms, associated distributor, etc.).

### Part
A Part represents a share class or subscription type available within a fund.

- Each fund may include multiple configured parts (e.g., Class A, Class B, institutional class, etc.).
- Parts define specific subscription terms (for example: minimum investment amount, management fees, voting rights, currency).
- When an investor subscribes, they do so to a specific part of the fund.

### Use in the API
- The **Funds/Parts** endpoint allows you to retrieve all characteristics of the fund selected for a subscription.
- All configured parts for the fund are returned in the response.
- You can target a particular part by adding `partsId` as a parameter in the payload. This lets you focus only on the part chosen for the subscription.

---

## Operations

Operations encompass all actions related to the lifecycle of an investment in B4Finance, including subscriptions, ownership transfers, and distribution agreements.

### Subscription
A subscription corresponds to creating an operation that allows a counterparty to invest in a fund. It is characterized by:
- a main counterparty (main investor);
- **co-signers**, who jointly participate in the subscription;
- **counter-signers**, generally the entities or parties validating or authorizing the subscription (e.g., the distributor or the manager).

### Ownership Transfer
A transfer operation modifies the ownership of a fund’s units (e.g., from one investor to another).

### Use in the API
Endpoints related to Operations allow you to:
- create a subscription, an ownership transfer, or a distribution agreement,
- associate the required signers and counter-signers,
- read or consult the status and details of an ongoing operation,
- manage distribution agreements linked to a fund.

Each operation is a central element of regulatory and transactional tracking on the platform.

---

## Users / Teams

Users and Teams correspond to the management of users and groups in the B4Finance application. These elements are essential for organizing access, distributing responsibilities, and administering permissions.

### Users
A User represents an individual account that can access the platform.
- Each user has their own information (name, email, role, status).
- Their access and permissions depend on the rights assigned to them.
- A user can belong to one or more teams.

### Teams
A Team brings several users together to facilitate the collective management of rights and responsibilities.
- Teams make it possible to organize users by department, project, or function.

### Permissions
Permissions define the level of access and the actions available to a user or a team. In B4Finance, the main permissions are:
- **Collection**: ability to enter and gather information (e.g., investor documents, KYC data).
- **Analysis**: ability to consult, review, and analyze collected information.
- **Approval**: right to validate, accept, or reject operations or files.
- **Admin**: full administrative rights over global platform settings.

### Use in the API
Endpoints related to Users/Teams allow you to:
- create, modify, or delete users and teams,
- assign collection, analysis, approval, or administration rights,
- add or remove a user from a team,
- consult detailed information on existing users, teams, and permissions.
