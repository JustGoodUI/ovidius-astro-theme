import { type CollectionEntry } from 'astro:content';

export function sortPostsByDateDesc(postA: CollectionEntry<'blog'>, postB: CollectionEntry<'blog'>) {
    return new Date(postB.data.publishDate).getTime() - new Date(postA.data.publishDate).getTime();
}
