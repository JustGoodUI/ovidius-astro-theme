import heroAvatar from '../assets/images/avatar.jpg';
import heroBackground from '../assets/images/hero.webp';
import logoUrl from '../assets/images/logo.svg?url';
import defaultSocial from '../assets/images/ovidius-preview.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    logo: {
        src: logoUrl,
        alt: 'Ovidius logo'
    },
    title: 'Ovidius',
    description: 'Astro.js and Tailwind CSS theme for blogging by justgoodui.com',
    image: {
        src: defaultSocial,
        alt: 'Ovidius - Astro.js and Tailwind CSS theme'
    },
    primaryNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Download Theme',
            href: 'https://github.com/JustGoodUI/ovidius-astro-theme'
        }
    ],
    secondaryNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Terms of Service',
            href: '/terms'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Download Theme',
            href: 'https://github.com/JustGoodUI/ovidius-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'Go to GitHub repo',
            href: 'https://github.com/JustGoodUI/ovidius-astro-theme',
            icon: 'github'
        },
        {
            text: 'Follow on Instagram',
            href: 'https://instagram.com/',
            icon: 'instagram'
        },
        {
            text: 'Follow on Bluesky',
            href: 'https://bsky.app/profile/justgoodui.com',
            icon: 'bluesky'
        }
    ],
    hero: {
        title: 'Hi there!',
        text: "My name is Justin Case. I'm a freelance front-end developer, author and speaker based in Austin, TX. It's nice to meet you.",
        avatar: {
            src: heroAvatar,
            alt: 'Justin Case'
        },
        backgroundImage: {
            src: heroBackground
        }
    },
    subscribe: {
        enabled: true,
        title: 'Subscribe to Ovidius Newsletter',
        text: 'One update per week. All the latest news directly in your inbox.',
        form: {
            action: 'https://justgoodthemes.us3.list-manage.com/subscribe/post?u=78f1bab16028354caeb23aecd&amp;id=4a7330d117&amp;f_id=005c48e2f0',
            emailFieldName: 'EMAIL',
            honeypotFieldName: 'b_78f1bab16028354caeb23aecd_4a7330d117'
        }
    },
    postsPerPage: 5
};

export default siteConfig;
