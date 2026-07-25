import React from 'react';
import { FoodPost, CulinaryEvent } from '@/types/post';

interface ReviewJsonLdProps {
  post: FoodPost;
}

export function ReviewJsonLd({ post }: ReviewJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Restaurant',
      name: post.restaurantName,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Addis Ababa',
        streetAddress: post.location,
      },
      servesCuisine: post.category,
      priceRange: post.priceFormatted,
      image: post.image,
    },
    author: {
      '@type': 'Organization',
      name: 'Addis Foodies',
      url: 'https://addis-foodie.vercel.app/',
    },
    reviewBody: post.caption,
    datePublished: post.timestamp,
    publisher: {
      '@type': 'Organization',
      name: 'Addis Foodies',
      logo: {
        '@type': 'ImageObject',
        url: 'https://addis-foodie.vercel.app/images/logo.png',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface EventJsonLdProps {
  event: CulinaryEvent;
}

export function EventJsonLd({ event }: EventJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: event.locationName,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Addis Ababa',
        streetAddress: event.landmark,
      },
    },
    image: event.posterImage,
    description: `Join us for ${event.title} at ${event.locationName}. Highlighting ${event.offeringTags.join(', ')}.`,
    organizer: {
      '@type': 'Organization',
      name: 'Addis Foodies',
      url: 'https://addis-foodie.vercel.app/',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'ETB',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
