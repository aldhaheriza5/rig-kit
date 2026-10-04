# Rig Kit

A small Windows app with notes, files and links, grouped into sections and pages.

## Download

Get **RigKit.exe** from the [latest release](https://github.com/aldhaheriza5/rig-kit/releases/tag/latest). It's portable: no install, just run it.

Windows may show "Windows protected your PC" because the app isn't code-signed. Click **More info → Run anyway**.

## How it works

- The app reads `content/content.json` and `content/files/` from this repository every time it opens or you click **Refresh**.
- Content changes show up for everyone without a new exe.
- A new exe is built automatically (GitHub Actions → Releases) only when the files in `app/` change.

## Admin mode

1. Create a fine-grained token at <https://github.com/settings/personal-access-tokens/new>
   - Repository access: **Only select repositories → rig-kit**
   - Permissions → Repository → **Contents: Read and write**
2. In the app, click **Admin** and paste the token. It's stored only on that computer.
3. Add or edit sections, pages, notes and links, then click **Publish**. File uploads publish right away.
4. Click **Lock** to leave admin mode on a shared computer.

Anyone without a token can only view.
