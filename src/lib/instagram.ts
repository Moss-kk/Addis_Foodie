/**
 * lib/instagram.ts
 * ─────────────────────────────────────────────────────────────
 * Meta Instagram Graph API service for @addisfoodiess.
 *
 * Fetches the 12 most recent media items from the connected
 * Instagram Business Account using the Graph API v21.0.
 *
 * Env vars required (set in .env.local):
 *   INSTAGRAM_BUSINESS_ACCOUNT_ID
 *   INSTAGRAM_ACCESS_TOKEN
 * ─────────────────────────────────────────────────────────────
 */

const IG_API_BASE = 'https://graph.facebook.com/v21.0';

export interface InstagramPost {
  id: string;
  caption: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;         // video thumbnail
  permalink: string;
  timestamp: string;
  like_count?: number;
  comments_count?: number;
}

/**
 * Fetch recent posts from the @addisfoodiess Instagram account.
 * Called server-side only (Next.js API route or server component).
 */
export async function fetchInstagramPosts(limit = 12): Promise<InstagramPost[]> {
  const igAccountId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;
  const accessToken  = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!igAccountId || !accessToken) {
    console.warn('[Instagram] Missing INSTAGRAM_BUSINESS_ACCOUNT_ID or INSTAGRAM_ACCESS_TOKEN');
    return [];
  }

  const fields = [
    'id',
    'caption',
    'media_type',
    'media_url',
    'thumbnail_url',
    'permalink',
    'timestamp',
    'like_count',
    'comments_count',
  ].join(',');

  const url =
    `${IG_API_BASE}/${igAccountId}/media` +
    `?fields=${fields}` +
    `&limit=${limit}` +
    `&access_token=${accessToken}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 300 }, // cache 5 min
    });

    if (!res.ok) {
      const err = await res.json();
      console.error('[Instagram] API error:', err);
      return [];
    }

    const data = await res.json();
    return (data.data as InstagramPost[]) ?? [];
  } catch (err) {
    console.error('[Instagram] Fetch failed:', err);
    return [];
  }
}

/**
 * Refresh a long-lived token before it expires (call weekly via cron).
 * Returns the new token string.
 */
export async function refreshLongLivedToken(): Promise<string | null> {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!accessToken) return null;

  const url =
    `${IG_API_BASE}/oauth/access_token` +
    `?grant_type=ig_refresh_token` +
    `&access_token=${accessToken}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.access_token) {
      console.log('[Instagram] Token refreshed. New expiry (seconds):', data.expires_in);
      return data.access_token as string;
    }
    console.error('[Instagram] Token refresh failed:', data);
    return null;
  } catch (err) {
    console.error('[Instagram] Token refresh error:', err);
    return null;
  }
}

/**
 * Verify this account's token is still valid.
 */
export async function verifyToken(): Promise<boolean> {
  const appId     = process.env.META_APP_ID;
  const appSecret = process.env.META_APP_SECRET;
  const token     = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!appId || !appSecret || !token) return false;

  const url =
    `${IG_API_BASE}/debug_token` +
    `?input_token=${token}` +
    `&access_token=${appId}|${appSecret}`;

  try {
    const res = await fetch(url);
    const { data } = await res.json();
    return data?.is_valid === true;
  } catch {
    return false;
  }
}
