# Guide simple FR/EN (Redocly)

## A retenir

| Langue | Ou ecrire | Exemple |
|---|---|---|
| FR (defaut) | Racine du projet | `guide_utilisateur/KYC/ma_page.md` |
| EN | Dossier miroir | `@l10n/en/guide_utilisateur/KYC/ma_page.md` |

Regle: le chemin EN doit etre exactement le meme que FR, avec `@l10n/en/` devant.

## Ajouter une page (5 etapes)

1. Creer la page FR a la racine.
Exemple: `guide_utilisateur/KYC/ma_page.md`

2. Creer la page EN miroir.
Exemple: `@l10n/en/guide_utilisateur/KYC/ma_page.md`

3. Ajouter la page dans `sidebars.yaml`.

```yaml
- page: guide_utilisateur/KYC/ma_page.md
  label: Ma page
  labelTranslationKey: sidebar.userGuide.kyc.myPage
```

4. Ajouter le texte FR dans `translations.yaml`.

```yaml
sidebar.userGuide.kyc.myPage: Ma page
```

5. Ajouter le texte EN dans `@l10n/en/translations.yaml`.

```yaml
sidebar.userGuide.kyc.myPage: My page
```

## Si tu modifies une page existante

1. Modifier FR a la racine.
2. Modifier EN dans le miroir.
3. Si le nom change, mettre a jour `sidebars.yaml` + les 2 `translations.yaml`.

## Si tu deplaces ou renommes une page

1. Deplacer/renommer FR.
2. Faire la meme chose en EN au meme chemin relatif.
3. Mettre a jour le chemin dans `sidebars.yaml`.

## Si tu supprimes une page

1. Supprimer FR.
2. Supprimer EN.
3. Supprimer l'entree dans `sidebars.yaml`.
4. Supprimer la cle dans les 2 `translations.yaml`.

## Images et fichiers API

- Images: garder la meme logique de chemin entre FR et EN.
- API:
  - FR: `apis/...`
  - EN: `@l10n/en/apis/...`

## Checklist finale (a cocher)

- [ ] La page FR existe a la racine.
- [ ] La page EN existe dans `@l10n/en/...` au meme chemin.
- [ ] La page est dans `sidebars.yaml`.
- [ ] La cle existe dans `translations.yaml` (FR).
- [ ] La cle existe dans `@l10n/en/translations.yaml` (EN).
- [ ] Le switch de langue affiche le bon label et la bonne page.
