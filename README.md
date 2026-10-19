# Next JS Boilerplate

This package contains Boilterplate of NextJS project which inculdes the following packages

-   framer-motion: ^11.0.5,
-   next: 14.1.0,
-   tailwindcss
-   react: ^18,
-   react-dom: ^18,
-   react-slick: ^0.30.1,
-   slick-carousel: ^1.8.1
-   sass: 1.71.0

## Writing and editing blog posts

Blog posts are edited in **Pages CMS** – no WordPress, no code.

1. Go to **https://app.pagescms.org** and sign in with GitHub (an account with access to `Aakarsh-B/creativate`).
2. Open the **creativate** repo → **Blog posts**.
3. Click **Add an entry** for a new post, or click an existing one to edit it.
4. Fill in:
   - **Title**
   - **URL slug** – lowercase words with hyphens, e.g. `my-new-post` → the post lives at `creativate.in/our-blog/my-new-post`
   - **Publish date** – newest posts show first on the blog page
   - **Thumbnail** (card on the blog list) and **Banner** (top of the post)
   - **Related posts** – up to 2, shown at the bottom of the post
   - **SEO** title, description and keywords
   - **Post body**
5. Click **Save**. This commits to GitHub; Vercel rebuilds automatically and the post is live in about **1–2 minutes**.

To delete a post, open it in Pages CMS and use **Delete**.

**Adding someone else as a writer:** give them access to this GitHub repo (or add them as a collaborator in Pages CMS → Settings), then they sign in at app.pagescms.org.

**Nothing else is needed.** There is no WordPress/Hostinger backend any more – the repo is the single source of truth. You can also edit the JSON files directly on GitHub; it does the same thing.

## Content

Site content lives in `src/content` as JSON (exported from the old WordPress backend, same shape as its REST API):

- `src/content/our-blog/*.json` – one file per blog post (managed with Pages CMS, configured in `.pages.yml`)
- `src/content/our-work.json`, `pages.json`, `header.json`, `footer.json`, `form.json` – work case studies, page text, menus, footer and the booking form. These are not in Pages CMS; edit the JSON on GitHub.

Images from the old site are in `public/wp-content/uploads`; new blog images upload to `public/images/blog`.

## Hosting

- Hosted on **Vercel**, auto-deployed from the `main` branch of this repo.
- Domain `creativate.in` is registered at GoDaddy and points to Vercel.
