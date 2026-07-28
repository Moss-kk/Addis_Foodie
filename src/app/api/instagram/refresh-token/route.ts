/**
 * app/api/instagram/refresh-token/route.ts
 * ─────────────────────────────────────────────────────────────
 * Secure endpoint to refresh the Instagram long-lived token.
 * Call this weekly via a cron job (e.g. Vercel Cron, GitHub Actions).
 *
 * Requires header: Authorization: Bearer <INSTAGRAM_VERIFY_TOKEN>
 *
 * Example cron (Vercel):
 *   POST /api/instagram/refresh-token
 *   Schedule: 0 9 * * 1   (every Monday at 9 AM)
 * ─────────────────────────────────────────────────────────────
 */

import { NextResponse } from 'next/server';
import { refreshLongLivedToken, verifyToken } from '@/lib/instagram';

export async function POST(request: Request) {
  // Simple bearer auth guard
  const authHeader = request.headers.get('authorization') ?? '';
  const expectedBearer = `Bearer ${process.env.INSTAGRAM_VERIFY_TOKEN ?? 'addis_foodies_webhook_secret'}`;

  if (authHeader !== expectedBearer) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Verify current token first
    const isValid = await verifyToken();
    if (!isValid) {
      return NextResponse.json(
        { error: 'Current token is invalid or expired. Manual re-auth required.' },
        { status: 400 }
      );
    }

    const newToken = await refreshLongLivedToken();

    if (!newToken) {
      return NextResponse.json({ error: 'Token refresh failed' }, { status: 500 });
    }

    // In production: store newToken in your database or secrets manager
    // For now, log it and update .env.local manually
    console.log('[TOKEN REFRESH] ✅ New token generated. Update INSTAGRAM_ACCESS_TOKEN.');

    return NextResponse.json({
      success: true,
      message: 'Token refreshed. Update INSTAGRAM_ACCESS_TOKEN in your environment variables.',
      // Note: We don't return the token in the response for security
    });

  } catch (error: unknown) {
    console.error('[TOKEN REFRESH] Error:', error);
    return NextResponse.json({ error: 'Token refresh error' }, { status: 500 });
  }
}
