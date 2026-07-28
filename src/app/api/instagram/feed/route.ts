/**
 * app/api/instagram/feed/route.ts
 * ─────────────────────────────────────────────────────────────
 * Public API endpoint that serves real Instagram posts from
 * @addisfoodiess via the Meta Graph API.
 *
 * GET /api/instagram/feed?limit=12
 * Returns: { posts: InstagramPost[], cached: boolean }
 * ─────────────────────────────────────────────────────────────
 */

import { NextResponse } from 'next/server';
import { fetchInstagramPosts } from '@/lib/instagram';

export const dynamic = 'force-dynamic'; // always fetch fresh

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = Math.min(Number(searchParams.get('limit') ?? 12), 50);

  try {
    const posts = await fetchInstagramPosts(limit);

    return NextResponse.json(
      { posts, count: posts.length, source: '@addisfoodiess' },
      {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        },
      }
    );
  } catch (error: unknown) {
    console.error('[Instagram Feed API]', error);
    return NextResponse.json(
      { error: 'Failed to fetch Instagram feed', posts: [] },
      { status: 500 }
    );
  }
}
