import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://ovidius-astro-theme.netlify.app',
    integrations: [
        mdx(),
        sitemap(),
        tailwind({
            // Disable injecting a basic `base.css` import on every page.
            applyBaseStyles: false
        })
    ]
});
