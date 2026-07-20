# Changelog

All notable changes to the "Ovidius" theme will be documented in this file.

## 2.0.0

- upgraded to Astro v7 and updated official integrations to compatible versions
- **now requires Node.js 22.12 or newer** (added `engines.node` to `package.json`)
- updated Tailwind CSS, Prettier, and Fontsource dependencies
- added `astro check` (via `@astrojs/check`) as a `check` script and to the build step for type safety
- simplified canonical URL handling in `BaseHead` (strips the fragment, preserves query params and structure)
- fixed `rel="noopener noreferrer"` typo on post share links
- updated X/Twitter share link to `x.com`
- removed redundant date mutation from the RSS `pubDate`

## 1.0.0

- updated all dependencies to latest versions
- removed `NoHeaderLayout` and added named slots to `BaseLayout`
- improved accessibility and visual contrast
- switched to plain `.svg` icons from `src/assets/icons` and updated `Icon.astro`
- moved ssite configuration type definitions to `types.ts`
- updated `Hero` component to receive props from pages instead of importing `site-config` directly
- refactored and improved `Subscribe` component for cleaner config
- switched to Astro optimized image handling and introduced `CustomImage` component

## 0.1.0

- upgraded to Astro v5

## 0.0.2

- improved blog document outline
