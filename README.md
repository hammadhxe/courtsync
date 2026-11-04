# CourtSync website

The public site at https://court-sync.xyz. The app lives separately at https://app.court-sync.xyz and is not touched by this repo.

## Change the text (no developer needed)
1. On GitHub, open `index.html`, click the pencil icon.
2. Change the words between the tags. Do not change anything inside `< >`.
3. Click **Commit changes**. The site updates in about a minute.

Left out on purpose until a lawyer supplies real text: pricing, privacy policy, terms. A `{{testimonial}}` comment in the proof section marks where a real quote can go.

## Add the demo video
The demo video code is in `data-video-id` in `index.html`. Change it to switch videos.

## Go live: GitHub Pages (free, HTTPS included)
1. GitHub repo, **Settings, Pages**: Source = "Deploy from a branch", branch `main`, folder `/ (root)`. Save.
2. Under **Custom domain** enter `court-sync.xyz`, save, then tick **Enforce HTTPS** when it becomes available.
3. At Namecheap, **Domain List, Manage, Advanced DNS**. Add only these records:

| Type | Host | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | hammadhxe.github.io |

Delete any old parked or URL redirect record on `@` and `www` only. Do not touch the verification TXT, the `app` CNAME, the Resend records (DKIM TXT, `rsend`, `send`) or email forwarding. HTTPS certificates come from GitHub Pages (Let's Encrypt) and can take up to an hour.

## After going live, check
- https://court-sync.xyz and https://www.court-sync.xyz open the site with a padlock.
- https://app.court-sync.xyz still opens the app and the login code email arrives.
- An email sent to hello@court-sync.xyz reaches your inbox.
