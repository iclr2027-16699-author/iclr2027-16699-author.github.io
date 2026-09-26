# EnergyDrive — anonymous project page

Static project website for ICLR 2027 submission 16699. No build step, package installation, external fonts, analytics, or third-party scripts are required.

## Preview

Run from this directory:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open `http://127.0.0.1:8765`.

## Update the page

- `index.html`: abstract, captions, results, and all seven tables.
- `styles.css`: responsive layout and typography.
- `script.js`: accessible figure enlargement, with ordinary image links as a fallback.
- `assets/`: six lossless figure exports, the anonymous paper PDF, and a simple favicon.

Edit the relevant HTML section to add future materials. Tables are semantic HTML and can scroll on narrow screens. Appendix tables are inside the expandable results section. Figures have intrinsic image dimensions and descriptive alt text; retain these when replacing an asset.

The abstract and numerical results come from the supplied paper. The main three tables are visible by default. Tables B.1 and C.1–C.3 appear under “Additional benchmarks and inference efficiency.” The default quantitative planner uses learned-energy proposals followed by composed-energy selection. The qualitative OR examples instead use composed gradients. Keep this distinction when editing captions.

## Publish with GitHub Pages

Publish from a dedicated anonymous user account. For a chosen account named `USERNAME`, the repository must be `USERNAME/USERNAME.github.io`, and its site address will be `https://USERNAME.github.io/` once publication is configured and succeeds. Confirm username availability before setting the remote.

1. Authenticate with the dedicated anonymous GitHub user, including the Git transport used for pushes.
2. Create an empty public repository named `USERNAME.github.io` under that same anonymous user. Do not initialize it with a README or another commit.
3. Push this directory's `main` branch using the anonymous identity.
4. Under repository **Settings → Pages**, choose **Deploy from a branch**, `main`, and `/ (root)`, then save.
5. Verify the published site, commit author and committer, repository activity, and Pages workflow actor from a signed-out session.

The `.nojekyll` file serves these assets without Jekyll processing. No custom domain is required.

## Preserve anonymity

Both author and committer must remain anonymous. The local repository is configured with `Anonymous Authors <anonymous@iclr2027-16699.invalid>` and commit signing disabled. These local settings are not transported by a clone; configure them again on another checkout:

```sh
git config --local user.name 'Anonymous Authors'
git config --local user.email 'anonymous@iclr2027-16699.invalid'
git config --local commit.gpgsign false
git config --local tag.gpgsign false
```

Anonymous commit metadata does not hide the authenticated GitHub pusher or deployment actor. Do not push using a personal account, its SSH key, or its token. Do not use a personal account's GitHub noreply email: it is still associated with that account.

Use fresh image exports with no EXIF/XMP author fields. Sanitize document metadata before replacing `assets/paper.pdf`, and inspect the visible content for names, affiliations, acknowledgments, profile links, or identifying watermarks. The current paper has anonymous metadata, no attachments or annotations, and is visually identical to the supplied 24-page paper. Original figure PDFs are not included.

The page makes no external resource requests. Search-engine indexing is discouraged by `robots.txt` and page metadata; these are indexing preferences, not access controls or an anonymity guarantee.

Useful platform references: [organization membership visibility](https://docs.github.com/en/account-and-profile/how-tos/organization-membership/publicizing-or-hiding-organization-membership), [workflow pusher attribution](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#push), and [Pages publication](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
