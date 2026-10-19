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

## Content

Site content lives in `src/content` as JSON (exported from the old WordPress backend, same shape as its REST API):

- `src/content/our-blog/*.json` – one file per blog post (editable in [Pages CMS](https://app.pagescms.org), see `.pages.yml`)
- `src/content/our-work.json`, `pages.json`, `header.json`, `footer.json`, `form.json` – everything else

Images from the old site are in `public/wp-content/uploads`; new blog images upload to `public/images/blog`.
