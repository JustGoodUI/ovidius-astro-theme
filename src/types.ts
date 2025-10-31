export type ImageInput = {
    src: ImageMetadata | string;
    alt?: string;
};

export type Link = {
    href: string;
    text: string;
};

export type SocialLink = Link & {
    icon: 'bluesky' | 'codepen' | 'dev' | 'facebook' | 'github' | 'instagram' | 'linkedin' | 'mastodon' | 'medium' | 'reddit' | 'x' | 'youtube';
};

export type Hero = {
    title?: string;
    text?: string;
    avatar?: ImageInput;
    backgroundImage?: ImageInput;
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl?: string;
};

export type SiteConfig = {
    logo?: ImageInput;
    title: string;
    description: string;
    image?: ImageInput;
    primaryNavLinks?: Link[];
    secondaryNavLinks?: Link[];
    socialLinks?: SocialLink[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
};
