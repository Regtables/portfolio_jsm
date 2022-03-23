import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'jzopnv6a',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skXmypIjZjMDmhfMvQ6naNg2pyUUetcvObBEzpLZuEVCzwGBMxOP59wleDRU2zjXxwDG0RvftWlVW7VuNysqbgKHXmVjlzwOUc1LVCmRGfX8jCGwzKvgH2TTkNkqKyf3BHIqyDyI5CT3HXVzJIMkjOgJ9c5ATZroZvPLJ6LlwjZzk1QFBluY',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);