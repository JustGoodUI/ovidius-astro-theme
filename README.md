# Ovidius - Astro & Tailwind CSS Theme by justgoodui.com

Ovidius is a single-author blog theme for Astro.js. Featuring a minimal, slick, responsive and content-focused design. For more Astro.js themes please check [justgoodui.com](https://justgoodui.com/).

![Ovidius Astro.js Theme](public/ovidius-preview.jpg)

[![Deploy to Netlify Button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/JustGoodUI/ovidius-astro-theme)

Clicking the button above ☝️ will create a new repo for you that looks exactly like this one, and sets that repo up immediately for deployment on Netlify.

## Prerequisites

This theme is built with **Astro v7**, which requires **Node.js 22.12 or newer**. Check your version with `node -v` before installing, and make sure your host/CI uses a compatible Node version.

## Theme Features:

- ✅ Featured post support
- ✅ Subscribe form
- ✅ Tailwind CSS
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support
- ✅ Optimized images using Astro’s `Image` component

## Template Integrations

- @tailwindcss/vite - https://tailwindcss.com/docs/installation/framework-guides/astro
- @astrojs/sitemap - https://docs.astro.build/en/guides/integrations-guide/sitemap/
- @astrojs/mdx - https://docs.astro.build/en/guides/markdown-content/
- @astrojs/rss - https://docs.astro.build/en/guides/rss/

## ⚙️ Configuration Notes

### `astro.config.mjs`

Set your deployed domain in the `site` property:

```js
// astro.config.mjs
export default defineConfig({
  site: 'https://example.com'
});
```

This is required for correct image optimization and sitemap generation.

### `site-config.ts`

All site-wide data and theme options are stored in `src/data/site-config.ts`. It provides a single configuration object used throughout the theme for navigation, branding, hero content, social links, and more.

You can update this file to customize:

- Site identity — title, description, logo, and default social share image
- Navigation — primary and secondary navigation links
- Social links — icons and URLs for supported platforms
- Hero section — title, text, avatar, and background image
- Newsletter subscription — form settings suitable for Mailchimp, Formspree, ConvertKit, or other form-based providers. The form supports a custom action URL, configurable email and hidden fields, and an optional honeypot field for spam protection.
- Pagination — posts per page for blog listings

Images can be referenced either as imports from `src/assets/` (for optimized Astro images) or as string paths from the `public/` directory.

### Images

The theme uses a `CustomImage` component that automatically displays images using Astro’s optimized `<Image />` or a standard `<img>` tag depending on the source.

- Content collection images (used in posts or pages) must be stored in `src/assets/` since they use Astro’s `image()` schema.
- Site-config images (like the logo, hero background, or social preview) can either be imported from `src/assets/` for optimization or referenced directly from `public/` (e.g. /logo.svg) if you prefer not to optimize them.

The `public/` directory can still be used for static files like favicons, fonts, or robots.txt.

## 🚀 Project Structure

Inside of Ovidius Astro theme, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── content.config.ts
│   └── types.ts
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro (`.astro`) components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

## Astro.js Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Want to learn more about Astro.js?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credits

- Demo content generate with [Chat GPT](https://chat.openai.com/)
- Images for demo content from [Unsplash](https://unsplash.com/)

## Astro Themes by Just Good UI

- [Dante](https://github.com/JustGoodUI/dante-astro-theme) is a free single-author blog and portfolio theme.

## License

Licensed under the [GPL-3.0](https://github.com/JustGoodUI/ovidius-astro-theme/blob/main/LICENSE) license.
